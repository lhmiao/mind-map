const { Service } = require('egg');
const { LOGIN_COOKIE_MAX_AGE } = require('../constant');

module.exports = class UserService extends Service {
  createUser(newUserInfo) {
    return this.ctx.model.User.create(newUserInfo);
  }

  setLoginCookieAndSession(userInfo) {
    const { id } = userInfo;
    this.ctx.cookies.set('id', id, { maxAge: LOGIN_COOKIE_MAX_AGE });
    this.ctx.session[`loginUser-${id}`] = userInfo;
  }

  updateUser(id, userInfo) {
    const where = { id };
    return this.ctx.model.User.update(userInfo, { where });
  }

  async checkUserInfo({ username, password }) {
    const where = { username };
    const record = await this.ctx.model.User.findOne({ where });
    if (!record) return Promise.reject({ name: '该用户不存在' });
    if (record.password !== password) return Promise.reject({ name: '密码错误' });
    return Promise.resolve(record);
  }

  clearLoginCookieAndSession(id) {
    this.ctx.cookies.set('id', '', { maxAge: 0 });
    this.ctx.session[`loginUser-${id}`] = null;
  }

  async isUserIdExist(id) {
    const record = await this.ctx.model.User.findByPk(id);
    if (record) return Promise.resolve(true);
    return Promise.reject({ name: `不存在 id 为 ${id} 的用户` });
  }
};
