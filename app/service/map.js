const { Service } = require('egg');

module.exports = class MapService extends Service {
  getMapList(user_id) {
    const where = { user_id };
    return this.ctx.model.Map.findAll({
      where,
      attributes: ['id', 'config'],
      include: [{
        model: this.ctx.model.User,
        attributes: ['id', 'username'],
        as: 'owner',
      }],
    });
  }

  async getOneMap(where) {
    const record = await this.ctx.model.Map.findOne({
      where,
      attributes: ['id', 'config', 'created_at', 'updated_at'],
      include: [{
        model: this.ctx.model.User,
        attributes: ['id', 'username'],
        as: 'owner',
      }],
    });
    if (!record) return Promise.reject({ name: '该 map 不存在' });
    return Promise.resolve(record);
  }

  async checkMapAuth(user_id, map_id) {
    const where = { id: map_id };
    const record = await this.getOneMap(where);
    if (Number(user_id) !== Number(record.owner.id)) {
      return false;
    }
    return true;
  }

  createMap(record) {
    return this.ctx.model.Map.create(record);
  }

  updateMap(map_id, record) {
    const where = { id: map_id };
    return this.ctx.model.Map.update(record, { where });
  }

  destroyMap(map_id) {
    const where = { id: map_id };
    return this.ctx.model.Map.destroy({ where });
  }
};
