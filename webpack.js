const Compiler = require("./Compiler");
// 实现自己的webpack
function webpack(options) {
  const argv = process.argv.slice(2);
  const shellOptions = argv.reduce((shellOptions, option) => {
    let [key, value] = option.split("=");
    shellOptions[key.slice(2)] = value;
    return shellOptions;
  }, {});

  const finalOptions = { ...options, ...shellOptions }; // 1. 拿到编译选项 还是以cmdl 传的为主

  const compiler = new Compiler(finalOptions); // 2. 创建compiler对象
  // 3. 加载所有配置的插件
  finalOptions.plugins.forEach((plugin) => plugin.apply(compiler));
  return compiler;
}

module.exports = webpack;
