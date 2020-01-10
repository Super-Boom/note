# react源码学习
1. Component
```js
function Component(props, context, updater) {
  this.props = props;
  this.context = context;

  this.refs = emptyObject;

  this.updater = updater || ReactNoopUpdateQueue;
}

```

1.1 emptyObject:
```js
// emptyObject :定义一个空对象，并冻结
var emptyObject = {};

{
  Object.freeze(emptyObject);
}
```

[在{}中写代码，参见es6块级作用域](http://es6.ruanyifeng.com/?search=%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F&x=10&y=7#docs/let#%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F)

1.2 ReactNoopUpdateQueue:官方解释为，更新队列的抽象API
```js
var ReactNoopUpdateQueue = {
  isMounted: function (publicInstance) {
    return false;
  },
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};
```

1.2.1 warnNoop:
```js
function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
```

1.2.1.1
```js
var didWarnStateUpdateForUnmountedComponent = {};
var warningWithoutStack$1 = warningWithoutStack;
warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
```

1.2.1.1.1
```js
var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }

    if (condition) {
      return;
    }

    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610

      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}
```
