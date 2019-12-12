const fs = require('fs');

module.exports = (routePathList) => {
  let sagas = '';
  let importList = '';
  let comma = ',';

  routePathList.forEach((item, index) => {
    let { sagaPath } = item;
    if (index === routePathList.length - 1) comma = '';
    importList += `import saga${index + 1} from '${sagaPath}'\n`;
    sagas += `saga${index + 1}${comma}`;
  })
  return [importList, `[${sagas}]`]
}