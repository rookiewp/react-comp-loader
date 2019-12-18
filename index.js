const path = require('path');
const transform = require('@babel/core').transformSync;
const loaderUtils = require('loader-utils');
const getRoutePathList = require('./lib/getRoutePathList');
const genRoute = require('./lib/genRoute');
const genReducer = require('./lib/genReducer');
const genSaga = require('./lib/genSaga');
const babelTypeNamePlugin = require('./lib/babel-plugin-type-name')
const routerId = '__react_router__';
const reducerId = '__redux_reducer__';
const sagaId = '__redux_saga__';

module.exports = function reactRouterLoader(codeStr) {
  const ctx = this;
  const loaderQuery = loaderUtils.getOptions(this) || {};
  const {
    componentDir, loadablePath,
    reducerName,
    typeName,
    sagaName,
  } = loaderQuery;
  const cwd = path.join(process.cwd(), 'src', componentDir);
  let result = codeStr;
  const routePathList = getRoutePathList(cwd, reducerName, typeName, sagaName);

  // 自动生成route
  if (codeStr.indexOf(routerId) > 0) {
    const [imp, routes] = genRoute(routePathList, loadablePath);
    result = imp + codeStr;
    result = result.replace(routerId, routes);
  }
  // 自动导入reducer
  if (codeStr.indexOf(reducerId) > 0) {
    const [importList, reducers] = genReducer(routePathList);
    result = importList + codeStr;
    result = result.replace(reducerId, reducers);
  }
  // 自动导入saga
  if (codeStr.indexOf(sagaId) > 0) {
    debugger
    const [importList, sagas] = genSaga(routePathList);
    result = importList + codeStr;
    result = result.replace(sagaId, sagas);
  }

  // 用路径名补全type
  if (
    ctx.resourcePath.endsWith(`/${typeName}.js`) &&
    routePathList.find(item => item.typePath === ctx.resourcePath)
  ) {
    debugger
    const namespace = path.relative(cwd, path.dirname(ctx.resourcePath));
    const { code } = transform(codeStr, {
      plugins: [[babelTypeNamePlugin, { namespace }]]
    })
    result = code;
  }
  ctx.addContextDependency(componentDir);
  ctx.cacheable();
  return result;
}