class RunPlugin {
  // 应用此插件
  apply(compiler) {
    // 实例 注册run函数
    compiler.hooks.run.tap("RunPlugin", () => {
      console.log("开始编译");
    });
  }
}

module.exports = RunPlugin;
