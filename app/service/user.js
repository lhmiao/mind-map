const { Service } = require('egg');

module.exports = class UserService extends Service {
  createUser(newUserInfo) {
    return this.ctx.model.User.create(newUserInfo);
  }

  setLoginCookieAndSession(userInfo) {
    const { id } = userInfo;
    this.ctx.cookies.set('id', id);
    this.ctx.session[`loginUser-${id}`] = userInfo;
  }

  updateUser(userInfo) {
    const where = { id: userInfo.id };
    return this.ctx.model.User.update(userInfo, { where });
  }

  async checkUserInfo({ username, password }) {
    const where = { username };
    const record = await this.ctx.model.User.findOne({ where });
    if (!record) return Promise.reject({ name: '该用户不存在' }); // eslint-disable-line
    if (record.password !== password) return Promise.reject({ name: '密码错误' }); // eslint-disable-line
    return Promise.resolve(record);
  }

  clearLoginCookieAndSession(id) {
    this.ctx.cookies.set('id', '', { maxAge: 0 });
    this.ctx.session[`loginUser-${id}`] = null;
  }

  async isUserIdExist(id) {
    const record = await this.ctx.model.User.findById(id);
    if (record) return Promise.resolve(true);
    return Promise.reject({ name: `不存在 id 为"${id}"的用户` }); // eslint-disable-line
  }
};
