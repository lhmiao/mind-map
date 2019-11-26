# mind-map

## 环境依赖

- node >= 10.0.0
- mysql = 5.7.28

### 启动本地开发环境

```bash
$ npm i
$ npm run dev
```

- 项目启动后将监听 **7001** 端口

### 项目结构

```string
mind-map
|_ app
|   |_ middleware // 中间件
|   |_ validateRule // 请求参数校验规则
|   |_ constant.js // 公共常量
|   |_ ...
|
|_ config
|   |_ config.default.js // 默认配置
|   |_ config.local.js // 本地开发配置
|   |_ plugin.js // 插件
|
|_ mind_map.sql // 数据库 sql 文件
|
|_ mind_map.postman_collection.json // postman 测试文件
|
|_ ...
```

## 接口文档

### 返回结构

```json
{
  "code": 0, // 响应代码
  "message": "success", // 响应信息
  "data": "" // 响应数据
}
```

响应代码

- 0: 成功
- 1: 错误
- 2: 未登录
- 3: 无权限

### 接口列表

#### 登录 - [**POST**] /api/v1/user/login

``` json
// params
{
  "username": "name", // 用户名
  "password": "123456", // 密码
}

// response
{
  "code": 0,
  "message": "success",
  "data": ""
}
```

### 登出 - [**GET**] /api/v1/user/logout

```json
// 无 params

// response
{
  "code": 0,
  "message": "success",
  "data": ""
}
```

### 注册 - [**POST**] /api/v1/user

```json
// params
{
  "username": "name", // 用户名
  "password": "123456", // 密码
}

// response
{
  "code": 0,
  "message": "success",
  "data": ""
}
```

### 修改用户信息 - [**PUT**] /api/v1/user

```json
// params
{
  "username": "name", // 用户名
  "password": "123456", // 密码
}

// response
{
  "code": 0,
  "message": "success",
  "data": ""
}
```

### 获取好友列表 - [**GET**] /api/v1/friend

```json
// 无 params

// response
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": 2, // 好友 id
      "username": "zhp" // 好友用户名
    }
  ]
}
```

### 获取好友申请列表 - [**GET**] /api/v1/friend/apply

```json
// 无 params

// response
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": 2, // 好友 id
      "username": "zhp" // 好友用户名
    }
  ]
}
```

### 申请添加好友 - [**POST**] /api/v1/friend/apply

```json
// params
{
  "friend_id": 1 // 好友的 id
}

// response
{
  "code": 0,
  "message": "success",
  "data": ""
}
```

### 同意好友申请 - [**POST**] /api/v1/friend/apply/agree

```json
// params
{
  "friend_id": 1 // 好友的 id
}

// response
{
  "code": 0,
  "message": "success",
  "data": ""
}
```

### 拒绝好友申请 - [**DELETE**] /api/v1/friend/apply/agree

```json
// params
{
  "friend_id": 1 // 好友的 id
}

// response
{
  "code": 0,
  "message": "success",
  "data": ""
}
```

### 删除好友 - [**DELETE**] /api/v1/friend

```json
// params
{
  "friend_id": 1 // 好友的 id
}

// response
{
  "code": 0,
  "message": "success",
  "data": ""
}
```

### 获取所属所有 map - [**GET**] /api/v1/map

```json
// 无 params

// response
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": 2, // map 的 id
      "config": [], // map 的配置，由前端还原成脑图
      "owner": { // map 所有者信息
        "id": 1,
        "username": "zhp"
      }
    }
  ]
}
```

### 创建 map — [**POST**] /api/v1/map

```json
// params
{
  "config": [] // 前端生成 map 的配置项
}

// response
{
  "code": 0,
  "message": "success",
  "data": { // 创建成功的 map
    "id": 2, // map 的id
    "user_id": "1", // 创建 map 的用户的 id
    "config": ["1"],
    "created_at": "2019-11-26T10:38:09.091Z" // 创建时间
  }
}
```

### 获取某个 map - [**GET**] /api/v1/map/:map_id

```json
// 路径参数：map_id

// 无 params

// response
{
  "code": 0,
  "message": "success",
  "data": {
    "id": 2, // map 的 id
    "config": [], // map 的配置，由前端还原成脑图
    "created_at": "2019-11-26T10:38:09.091Z", // map 创建时间
    "updated_at": null, // map 上次修改时间，没有修改过为 null
    "owner": { // map 所有者信息
      "id": 1,
      "username": "zhp"
    }
  }
}
```

### 更新某个 map - [**PUT**] /api/v1/map/:map_id

```json
// 路径参数：map_id

// params
{
  "config": ["1"]
}

// response
{
  "code": 0,
  "message": "success",
  "data": ""
}
```

### 删除某个 map - [**DELETE**] /api/v1/map/:map_id

```json
// 路径参数：map_id

// response
{
  "code": 0,
  "message": "success",
  "data": ""
}
```
