const fs = require('fs');

module.exports = (routePathList) => {
  let importList = '';
  let reducers = '';

  routePathList.forEach((item, index) => {
    let { routePath, reducerPath } = item;
    importList += `import reducer${index + 1} from '${reducerPath}'\n`;
    reducers += `${routePath}: reducer${index + 1}, \n`;
  })
  return [importList, `{\n ${reducers}}`]
}