const { Controller } = require('egg');

module.exports = class UserController extends Controller {
  async register() {
    try {
      const { username, password } = this.ctx.request.body;
      const userInfo = await this.service.user.createUser({ username, password });
      await this.service.user.setLoginCookieAndSession(userInfo);
      this.ctx.body = '';
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: 1,
        message: error.name,
        data: '',
      };
    }
  }

  async modifyUserInfo() {
    try {
      const { username, password } = this.ctx.request.body;
      const id = this.ctx.cookies.get('id');
      const userInfo = { id, username, password };
      await this.service.user.updateUser({ id, username, password });
      await this.service.user.setLoginCookieAndSession(userInfo);
      this.ctx.body = '';
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: 1,
        message: error.name,
        data: '',
      };
    }
  }

  async login() {
    try {
      const { username, password } = this.ctx.request.body;
      const userInfo = await this.service.user.checkUserInfo({ username, password });
      await this.service.user.setLoginCookieAndSession(userInfo);
      this.ctx.body = '';
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: 1,
        message: error.name,
        data: '',
      };
    }
  }

  async logout() {
    try {
      const id = this.ctx.cookies.get('id');
      await this.service.user.clearLoginCookieAndSession(id);
      this.ctx.body = '';
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: 1,
        message: error.name,
        data: '',
      };
    }
  }
};
