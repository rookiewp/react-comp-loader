1：这是webpack的loader
2：写这个loader的目的：减少从复代码，简化开发流程
3：主要功能:
(1): 根据路径生成Route组件，如果在src/components文件夹下，同时出现route.json(路由配置文件)和View.jsx(路由对应的组件),则自动生成路由组件
(2): 将各个文件下的reducer.js自动导入到combineReducers()方法中
(3): 将各个文件下的saga.js自动导入到sagas.js文件中
(4): action = { type, payload}中type的命名空间问题，用bable-plugin自动补全命名空间