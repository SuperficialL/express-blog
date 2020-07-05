/*
 * @author: SuperficialL
 * @Date: 2019-08-24 12:35:32
 * @LastEditTime: 2020-07-05 23:13:19
 * @Description: 标签模型
 */
const mongoosePaginate = require("mongoose-paginate");
const autoIncrement = require("mongoose-auto-increment");
const { mongoose } = require("../core/mongodb");

// 标签模型
const tagSchema = new mongoose.Schema(
  {
    // 标签名称
    title: { type: String, required: true, validate: /\S+/ },

    // 别名
    slug: { type: String, required: true, validate: /\S+/ },

    // 是否首页展示
    isTop: { type: Boolean, default: false },


    // 创建日期
    created_time: { type: Date, default: Date.now },

    // 最后修改日期
    updated_time: { type: Date, default: Date.now },
  },
  {
    timestamps: {
      createdAt: "created_time",
      updatedAt: "updated_time",
    },
  }
);

// 翻页 + 自增 ID 插件配置
tagSchema.plugin(mongoosePaginate);
tagSchema.plugin(autoIncrement.plugin, {
  model: "Tag",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

// 标签模型
module.exports = mongoose.model("Tag", tagSchema);
