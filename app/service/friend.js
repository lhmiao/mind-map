const { Service } = require('egg');

module.exports = class FriendService extends Service {
  getFriendList(user_id) {
    const where = { user_id };
    return this.ctx.model.FriendRelation.findAll({ where });
  }

  destroyFriend(user_id, friend_id) {
    const Op = this.app.Sequelize;
    const where = {
      [Op.or]: [
        { user_id, friend_id },
        { user_id: friend_id, friend_id: user_id },
      ],
    };
    return this.ctx.model.FriendRelation.destroy({ where });
  }

  getApplyList(from_id) {
    const where = { from_id };
    return this.ctx.model.FriendApply.findAll({ where });
  }

  createFriendApply(user_id, friend_id) {
    return this.ctx.model.FriendApply.create({ user_id, friend_id });
  }

  agreeFriendApply(from_id, to_id) {
    return this.ctx.model.transaction(async transaction => {
      const where = { from_id, to_id };
      await this.ctx.model.FriendApply.destroy({ where, transaction });
      await this.ctx.model.FriendRelation.create({ from_id, to_id }, { transaction });
      await this.ctx.model.FriendRelation.create({ from_id: to_id, to_id: from_id }, { transaction });
    });
  }

  disagreeFriendApply(from_id, to_id) {
    const where = { from_id, to_id };
    return this.ctx.model.FriendApply.destroy({ where });
  }
};
