class Compilation {
  constructor(options) {
    this.options = options;
  }
  build(onCompiled) {
    // 5. 拿到编译入口
    const entry = {};
    // 兼容entry的值是对象和字符串的情况
    if (typeof this.options.entry === "string") {
      entry.main = this.options.entry;
    } else {
      entry = this.options.entry;
    }
  }
}

module.exports = Compilation;
