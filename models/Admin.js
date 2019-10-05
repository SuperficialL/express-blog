/*
 * @author: SuperficialL
 * @Date: 2019-08-24 12:35:32
 * @LastEditTime: 2019-10-04 12:41:52
 * @Description: 用户模型
 */

const bcrypt = require('bcrypt');
const { mongoose } = require('../core/db');

const UserSchema = new mongoose.Schema({
  // 用户名
  username: { type: String, required: true },

  // 密码
  password: {
    type: String,
    required: true,
    select: false,
    set(val) {
      return bcrypt.hashSync(val, 10);
    }
  },

  // 邮箱
  // email: { type: String, required: true },

  // 版本号
  __v: { type: Number, select: false }
});

module.exports = mongoose.model('User', UserSchema);
