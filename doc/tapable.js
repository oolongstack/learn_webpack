// const { SyncHook } = require("tapable");

class SyncHook {
  constructor(args) {
    this.args = args;
    this.taps = [];
  }
  tap(name, fn) {
    this.taps.push(fn);
  }
  call(...args) {
    this.taps.forEach((tap) => tap(...args));
  }
}

const syncHook = new SyncHook(["name", "age"]);

syncHook.tap("1", (name, age) => {
  console.log(name, age);
});

syncHook.tap("2", (name, age) => {
  console.log(name, age);
});

syncHook.call("蔡杰鲁用", 20);
