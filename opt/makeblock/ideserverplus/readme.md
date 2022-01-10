### 通讯插件

#### 安装依赖
翻墙情况下，npm install

#### 启动服务
```
node server.js
```

#### 插件版本号需要升级的地方有三处
1，当前根目录下的package.json文件中的 "version": "1.0.0",
2，当前根目录下的server.js文件中的client.emit('pluginVersion', {'version': '1.0'});
3，前段模块中的front-end/commlogic/communication.js文件中的const latestVersion = '1.0';

#### 升级版本号注意事项（如果需要的话）
1，如果前段业务逻辑发生了改变，并影响到插件的修改，pc和web版需同时发布新的插件
2，如果仅是插件的优化功能，对外接口不发生改变，不需要改变版本号，pc可以发布新的插件，web不更新也不受影响
3，排除第2点，如果插件内部报重大bug，插件内部修复bug，对外接口不发生改变，也需要同时发布pc和web版