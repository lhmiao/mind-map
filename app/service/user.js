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
    const { id } = userInfo;
    return this.ctx.model.User.update(userInfo, { where: { id } });
  }

  async checkUserInfo({ username, password }) {
    const record = await this.ctx.model.User.findOne({ where: { username } });
    if (!record) return Promise.reject({ name: '该用户不存在' }); // eslint-disable-line
    if (record.password !== password) return Promise.reject({ name: '密码错误' }); // eslint-disable-line
    return Promise.resolve(record);
  }

  clearLoginCookieAndSession(id) {
    this.ctx.cookies.set('id', '', { maxAge: 0 });
    this.ctx.session[`loginUser-${id}`] = null;
  }
};
