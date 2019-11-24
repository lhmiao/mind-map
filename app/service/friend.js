const { Service } = require('egg');

module.exports = class FriendService extends Service {
  getFriendList(user_id) {
    const where = { user_id };
    return this.ctx.model.FriendRelation.findAll({
      where,
      attributes: ['friend_id'],
      include: [{
        model: this.ctx.model.User,
        attributes: ['username'],
        as: 'user_info',
      }],
    });
  }

  destroyFriend(user_id, friend_id) {
    const { Op } = this.app.Sequelize;
    const where = {
      [Op.or]: [
        { user_id, friend_id },
        { user_id: friend_id, friend_id: user_id },
      ],
    };
    return this.ctx.model.FriendRelation.destroy({ where });
  }

  getApplyList(to_id) {
    const where = { to_id };
    return this.ctx.model.FriendApply.findAll({
      where,
      attributes: ['from_id'],
      include: [{
        model: this.ctx.model.User,
        attributes: ['username'],
        as: 'user_info',
      }],
    });
  }

  createFriendApply(from_id, to_id) {
    return this.ctx.model.FriendApply.create({ from_id, to_id });
  }

  async isApplyExist(where) {
    const record = await this.ctx.model.FriendApply.findOne({ where });
    if (record) return Promise.resolve('好友申请存在');
    return Promise.reject({ name: '好友申请不存在' });
  }

  agreeFriendApply(from_id, to_id) {
    return this.ctx.model.transaction(async transaction => {
      const where = { from_id, to_id };
      await this.ctx.model.FriendApply.destroy({ where, transaction });
      await this.ctx.model.FriendRelation.bulkCreate(
        [
          { user_id: from_id, friend_id: to_id },
          { user_id: to_id, friend_id: from_id },
        ],
        { transaction }
      );
    });
  }

  disagreeFriendApply(from_id, to_id) {
    const where = { from_id, to_id };
    return this.ctx.model.FriendApply.destroy({ where });
  }
};
