const { Controller } = require('egg');
const { ERROR_CODE, NO_AUTH_CODE } = require('../constant');

module.exports = class MapController extends Controller {
  async index() {
    try {
      const user_id = this.ctx.cookies.get('id');
      const mapList = await this.service.map.getMapList(user_id);
      this.ctx.body = mapList;
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: ERROR_CODE,
        message: error.name,
        data: '',
      };
    }
  }

  async show() {
    try {
      const { id } = this.ctx.params;
      const user_id = this.ctx.cookies.get('id');
      const record = await this.service.map.getOneMap({ id });
      if (Number(user_id) !== Number(record.owner.id)) {
        this.ctx.body = {
          code: NO_AUTH_CODE,
          message: '无查看权限',
          data: '',
        };
        return;
      }
      this.ctx.body = record;
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: ERROR_CODE,
        message: error.name,
        data: '',
      };
    }
  }

  async create() {
    try {
      const user_id = this.ctx.cookies.get('id');
      const { config } = this.ctx.request.body;
      const created_at = Date.now();
      const record = { user_id, config, created_at };
      const map = await this.service.map.createMap(record);
      this.ctx.body = map;
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: ERROR_CODE,
        message: error.name,
        data: '',
      };
    }
  }

  async update() {
    try {
      const user_id = this.ctx.cookies.get('id');
      const { id: map_id } = this.ctx.params;
      const hasMapAuth = await this.service.map.checkMapAuth(user_id, map_id);
      if (!hasMapAuth) {
        this.ctx.body = {
          code: NO_AUTH_CODE,
          message: '无更新权限',
          data: '',
        };
        return;
      }
      const { config } = this.ctx.request.body;
      const updated_at = Date.now();
      const record = { config, updated_at };
      await this.service.map.updateMap(map_id, record);
      this.ctx.body = '';
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: ERROR_CODE,
        message: error.name,
        data: '',
      };
    }
  }

  async destroy() {
    try {
      const user_id = this.ctx.cookies.get('id');
      const { id: map_id } = this.ctx.params;
      const hasMapAuth = await this.service.map.checkMapAuth(user_id, map_id);
      if (!hasMapAuth) {
        this.ctx.body = {
          code: NO_AUTH_CODE,
          message: '无删除权限',
          data: '',
        };
        return;
      }
      await this.service.map.destroyMap(map_id);
      this.ctx.body = '';
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: ERROR_CODE,
        message: error.name,
        data: '',
      };
    }
  }
};
