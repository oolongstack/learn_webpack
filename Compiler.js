const { SyncHook } = require("tapable");
// 编译对象，负责整个编译过程，该实例全局唯一
class Compiler {
  constructor(options) {
    this.options = options;
    // 实例上所有的钩子
    this.hooks = {
      run: new SyncHook(), // 开始编译 （开始编译时触发）
      done: new SyncHook(), // 结束编译 （编译结束时触发）
    };
  }
  // 执行run方法开始编译
  run(callback) {
    // 开始编译
    this.hooks.run.call();
    function onCompiled() {
      console.log("onCompiled");
    }
    this.compile(onCompiled);
    // 编译过程
    // 编译结束
    this.hooks.done.call();
  }
  compile(onCompiled) {
    // 开始编译 每次开启一次编译 都会开启一个Compilation
    const compilation = new Compilation(this.options);
    compilation.build(onCompiled);
  }
}

module.exports = Compiler;
