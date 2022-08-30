class DonePlugin {
  // 应用此插件
  apply(compiler) {
    compiler.hooks.done.tap("DonePlugin", () => {
      console.log("结束编译");
    });
  }
}

module.exports = DonePlugin;
