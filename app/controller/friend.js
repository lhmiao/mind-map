const { Controller } = require('egg');

module.exports = class FriendController extends Controller {
  async getFriendList() {
    try {
      const id = this.ctx.cookies.get('id');
      const friendList = await this.service.friend.getFriendList(id);
      const data = friendList.map(item => {
        const { friend_id, user_info: { username } } = item;
        return { id: friend_id, username };
      });
      this.ctx.body = data;
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: 1,
        message: error.name,
        data: '',
      };
    }
  }

  async deleteFriend() {
    try {
      const user_id = this.ctx.cookies.get('id');
      const { friend_id } = this.ctx.query;
      await this.service.user.isUserIdExist(friend_id);
      await this.service.friend.destroyFriend(user_id, friend_id);
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

  async getApplyList() {
    try {
      const id = this.ctx.cookies.get('id');
      const applyList = await this.service.friend.getApplyList(id);
      const data = applyList.map(item => {
        const { from_id, user_info: { username } } = item;
        return { id: from_id, username };
      });
      this.ctx.body = data;
    } catch (error) {
      this.logger.error(error);
      this.ctx.body = {
        code: 1,
        message: error.name,
        data: '',
      };
    }
  }

  async applyFriend() {
    try {
      const from_id = this.ctx.cookies.get('id');
      const { friend_id: to_id } = this.ctx.request.body;
      await this.service.user.isUserIdExist(to_id);
      await this.service.friend.createFriendApply(from_id, to_id);
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

  async agreeFriendApply() {
    try {
      const to_id = this.ctx.cookies.get('id');
      const { friend_id: from_id } = this.ctx.request.body;
      await this.service.user.isUserIdExist(to_id);
      await this.service.friend.isApplyExist({ from_id, to_id });
      await this.service.friend.agreeFriendApply(from_id, to_id);
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

  async disagreeFriendApply() {
    try {
      const to_id = this.ctx.cookies.get('id');
      const { friend_id: from_id } = this.ctx.query;
      await this.service.user.isUserIdExist(from_id);
      await this.service.friend.isApplyExist({ from_id, to_id });
      await this.service.friend.disagreeFriendApply(from_id, to_id);
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
