exports.security = {
  csrf: { enable: false }, // 本地开发时为方便用 postman 测试，把 csrf 防御关掉
};

exports.sequelize = {
  dialect: 'mysql',
  database: 'mind_map',
  host: '127.0.0.1',
  username: 'root',
  password: '123456',
  define: {
    freezeTableName: true,
    timestamps: false,
  },
};
