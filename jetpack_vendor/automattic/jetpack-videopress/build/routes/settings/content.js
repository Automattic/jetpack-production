var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// package-external:@wordpress/components
var require_components = __commonJS({
  "package-external:@wordpress/components"(exports, module) {
    module.exports = window.wp.components;
  }
});

// package-external:@wordpress/i18n
var require_i18n = __commonJS({
  "package-external:@wordpress/i18n"(exports, module) {
    module.exports = window.wp.i18n;
  }
});

// package-external:@wordpress/element
var require_element = __commonJS({
  "package-external:@wordpress/element"(exports, module) {
    module.exports = window.wp.element;
  }
});

// vendor-external:react
var require_react = __commonJS({
  "vendor-external:react"(exports, module) {
    module.exports = window.React;
  }
});

// vendor-external:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "vendor-external:react/jsx-runtime"(exports, module) {
    module.exports = window.ReactJSXRuntime;
  }
});

// vendor-external:react-dom
var require_react_dom = __commonJS({
  "vendor-external:react-dom"(exports, module) {
    module.exports = window.ReactDOM;
  }
});

// ../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe2, getSnapshot2) {
        didWarnOld18Alpha || void 0 === React32.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot2();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot2();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState12({
          inst: { value, getSnapshot: getSnapshot2 }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect3(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot2;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe2, value, getSnapshot2]
        );
        useEffect12(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe2(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe2]
        );
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error2) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe2, getSnapshot2) {
        return getSnapshot2();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React32 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState12 = React32.useState, useEffect12 = React32.useEffect, useLayoutEffect3 = React32.useLayoutEffect, useDebugValue = React32.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React32.useSyncExternalStore ? React32.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// ../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// package-external:@wordpress/primitives
var require_primitives = __commonJS({
  "package-external:@wordpress/primitives"(exports, module) {
    module.exports = window.wp.primitives;
  }
});

// package-external:@wordpress/compose
var require_compose = __commonJS({
  "package-external:@wordpress/compose"(exports, module) {
    module.exports = window.wp.compose;
  }
});

// ../../js-packages/config/src/index.js
var require_src = __commonJS({
  "../../js-packages/config/src/index.js"(exports, module) {
    var jetpackConfig = {};
    try {
      jetpackConfig = __require("jetpackConfig");
    } catch {
      console.error(
        "jetpackConfig is missing in your webpack config file. See @automattic/jetpack-config"
      );
      jetpackConfig = { missingConfig: true };
    }
    var jetpackConfigHas2 = (key) => {
      return Object.hasOwn(jetpackConfig, key);
    };
    var jetpackConfigGet2 = (key) => {
      if (!jetpackConfigHas2(key)) {
        throw 'This app requires the "' + key + '" Jetpack Config to be defined in your webpack configuration file. See details in @automattic/jetpack-config package docs.';
      }
      return jetpackConfig[key];
    };
    module.exports = {
      jetpackConfigHas: jetpackConfigHas2,
      jetpackConfigGet: jetpackConfigGet2
    };
  }
});

// package-external:@wordpress/url
var require_url = __commonJS({
  "package-external:@wordpress/url"(exports, module) {
    module.exports = window.wp.url;
  }
});

// routes/settings/stage.tsx
var import_components2 = __toESM(require_components());
var import_i18n8 = __toESM(require_i18n());

// ../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useControlled.js
var React = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/error.js
var set;
if (true) {
  set = /* @__PURE__ */ new Set();
}
function error(...messages) {
  if (true) {
    const messageKey = messages.join(" ");
    if (!set.has(messageKey)) {
      set.add(messageKey);
      console.error(`Base UI: ${messageKey}`);
    }
  }
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useControlled.js
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React.useRef(controlled !== void 0);
  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    React.useEffect(() => {
      if (isControlled !== (controlled !== void 0)) {
        error([`A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React.useRef(defaultProp);
    React.useEffect(() => {
      if (!isControlled && serializeToDevModeString(defaultValue) !== serializeToDevModeString(defaultProp)) {
        error([`A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [defaultProp]);
  }
  const setValueIfUncontrolled = React.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function serializeToDevModeString(input) {
  let nextId = 0;
  const seen = /* @__PURE__ */ new WeakMap();
  try {
    const result = JSON.stringify(input, function replacer(key, value) {
      if (key === "_owner" && this != null && typeof this === "object" && "$$typeof" in this) {
        return void 0;
      }
      if (typeof value === "bigint") {
        return `__bigint__:${value}`;
      }
      if (value !== null && typeof value === "object") {
        const id = seen.get(value);
        if (id !== void 0) {
          return `__object__:${id}`;
        }
        seen.set(value, nextId);
        nextId += 1;
      }
      return value;
    });
    return result ?? `__top__:${typeof input}`;
  } catch {
    return "__unserializable__";
  }
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useStableCallback.js
var React3 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useRefWithInit.js
var React2 = __toESM(require_react(), 1);
var UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
  const ref = React2.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useStableCallback.js
var useInsertionEffect = React3[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)];
var useSafeInsertionEffect = (
  // React 17 doesn't have useInsertionEffect.
  useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  useInsertionEffect !== React3.useLayoutEffect ? useInsertionEffect : (fn) => fn()
);
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: void 0,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
  if (true) {
    throw (
      /* minify-error-disabled */
      new Error("Base UI: Cannot call an event handler while rendering.")
    );
  }
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js
var React4 = __toESM(require_react(), 1);
var noop = () => {
};
var useIsoLayoutEffect = typeof document !== "undefined" ? React4.useLayoutEffect : noop;

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/warn.js
var set2;
if (true) {
  set2 = /* @__PURE__ */ new Set();
}
function warn(...messages) {
  if (true) {
    const messageKey = messages.join(" ");
    if (!set2.has(messageKey)) {
      set2.add(messageKey);
      console.warn(`Base UI: ${messageKey}`);
    }
  }
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/list/CompositeList.js
var React6 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/list/CompositeListContext.js
var React5 = __toESM(require_react(), 1);
var CompositeListContext = /* @__PURE__ */ React5.createContext({
  register: () => {
  },
  unregister: () => {
  },
  subscribeMapChange: () => {
    return () => {
    };
  },
  elementsRef: {
    current: []
  },
  nextIndexRef: {
    current: 0
  }
});
if (true) CompositeListContext.displayName = "CompositeListContext";
function useCompositeListContext() {
  return React5.useContext(CompositeListContext);
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/list/CompositeList.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function CompositeList(props) {
  const {
    children,
    elementsRef,
    labelsRef,
    onMapChange: onMapChangeProp
  } = props;
  const onMapChange = useStableCallback(onMapChangeProp);
  const nextIndexRef = React6.useRef(0);
  const listeners = useRefWithInit(createListeners).current;
  const map = useRefWithInit(createMap).current;
  const [mapTick, setMapTick] = React6.useState(0);
  const lastTickRef = React6.useRef(mapTick);
  const register = useStableCallback((node, metadata) => {
    map.set(node, metadata ?? null);
    lastTickRef.current += 1;
    setMapTick(lastTickRef.current);
  });
  const unregister = useStableCallback((node) => {
    map.delete(node);
    lastTickRef.current += 1;
    setMapTick(lastTickRef.current);
  });
  const sortedMap = React6.useMemo(() => {
    disableEslintWarning(mapTick);
    const newMap = /* @__PURE__ */ new Map();
    const sortedNodes = Array.from(map.keys()).filter((node) => node.isConnected).sort(sortByDocumentPosition);
    sortedNodes.forEach((node, index) => {
      const metadata = map.get(node) ?? {};
      newMap.set(node, {
        ...metadata,
        index
      });
    });
    return newMap;
  }, [map, mapTick]);
  useIsoLayoutEffect(() => {
    if (typeof MutationObserver !== "function" || sortedMap.size === 0) {
      return void 0;
    }
    const mutationObserver = new MutationObserver((entries) => {
      const diff = /* @__PURE__ */ new Set();
      const updateDiff = (node) => diff.has(node) ? diff.delete(node) : diff.add(node);
      entries.forEach((entry) => {
        entry.removedNodes.forEach(updateDiff);
        entry.addedNodes.forEach(updateDiff);
      });
      if (diff.size === 0) {
        lastTickRef.current += 1;
        setMapTick(lastTickRef.current);
      }
    });
    sortedMap.forEach((_, node) => {
      if (node.parentElement) {
        mutationObserver.observe(node.parentElement, {
          childList: true
        });
      }
    });
    return () => {
      mutationObserver.disconnect();
    };
  }, [sortedMap]);
  useIsoLayoutEffect(() => {
    const shouldUpdateLengths = lastTickRef.current === mapTick;
    if (shouldUpdateLengths) {
      if (elementsRef.current.length !== sortedMap.size) {
        elementsRef.current.length = sortedMap.size;
      }
      if (labelsRef && labelsRef.current.length !== sortedMap.size) {
        labelsRef.current.length = sortedMap.size;
      }
      nextIndexRef.current = sortedMap.size;
    }
    onMapChange(sortedMap);
  }, [onMapChange, sortedMap, elementsRef, labelsRef, mapTick]);
  useIsoLayoutEffect(() => {
    return () => {
      elementsRef.current = [];
    };
  }, [elementsRef]);
  useIsoLayoutEffect(() => {
    return () => {
      if (labelsRef) {
        labelsRef.current = [];
      }
    };
  }, [labelsRef]);
  const subscribeMapChange = useStableCallback((fn) => {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  });
  useIsoLayoutEffect(() => {
    listeners.forEach((l) => l(sortedMap));
  }, [listeners, sortedMap]);
  const contextValue = React6.useMemo(() => ({
    register,
    unregister,
    subscribeMapChange,
    elementsRef,
    labelsRef,
    nextIndexRef
  }), [register, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositeListContext.Provider, {
    value: contextValue,
    children
  });
}
function createMap() {
  return /* @__PURE__ */ new Map();
}
function createListeners() {
  return /* @__PURE__ */ new Set();
}
function sortByDocumentPosition(a, b) {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function disableEslintWarning(_) {
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/direction-context/DirectionContext.js
var React7 = __toESM(require_react(), 1);
var DirectionContext = /* @__PURE__ */ React7.createContext(void 0);
if (true) DirectionContext.displayName = "DirectionContext";
function useDirection() {
  const context = React7.useContext(DirectionContext);
  return context?.direction ?? "ltr";
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/useRenderElement.js
var React10 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useMergedRefs.js
function useMergedRefs(a, b, c, d) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChange(forkRef, a, b, c, d)) {
    update(forkRef, [a, b, c, d]);
  }
  return forkRef.callback;
}
function useMergedRefsN(refs) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a, b, c, d) {
  return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index) => ref !== newRefs[index]);
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every((ref) => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = (instance) => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i = 0; i < refs.length; i += 1) {
        const ref = refs[i];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case "function": {
            const refCleanup = ref(instance);
            if (typeof refCleanup === "function") {
              cleanupCallbacks[i] = refCleanup;
            }
            break;
          }
          case "object": {
            ref.current = instance;
            break;
          }
          default:
        }
      }
      forkRef.cleanup = () => {
        for (let i = 0; i < refs.length; i += 1) {
          const ref = refs[i];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const cleanupCallback = cleanupCallbacks[i];
              if (typeof cleanupCallback === "function") {
                cleanupCallback();
              } else {
                ref(null);
              }
              break;
            }
            case "object": {
              ref.current = null;
              break;
            }
            default:
          }
        }
      };
    }
  };
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/getReactElementRef.js
var React9 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/reactVersion.js
var React8 = __toESM(require_react(), 1);
var majorVersion = parseInt(React8.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/getReactElementRef.js
function getReactElementRef(element) {
  if (!/* @__PURE__ */ React9.isValidElement(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/mergeObjects.js
function mergeObjects(a, b) {
  if (a && !b) {
    return a;
  }
  if (!a && b) {
    return b;
  }
  if (a || b) {
    return {
      ...a,
      ...b
    };
  }
  return void 0;
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/empty.js
function NOOP() {
}
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/getStateAttributesProps.js
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/utils/resolveClassName.js
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/utils/resolveStyle.js
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/merge-props/mergeProps.js
var EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
  if (!c && !d && !e && !a) {
    return createInitialMergedProps(b);
  }
  let merged = createInitialMergedProps(a);
  if (b) {
    merged = mergeInto(merged, b);
  }
  if (c) {
    merged = mergeInto(merged, c);
  }
  if (d) {
    merged = mergeInto(merged, d);
  }
  if (e) {
    merged = mergeInto(merged, e);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }
  let merged = createInitialMergedProps(props[0]);
  for (let i = 1; i < props.length; i += 1) {
    merged = mergeInto(merged, props[i]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    return {
      ...resolvePropsGetter(inputProps, EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return resolvePropsGetter(inputProps, merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result2 = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result2;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/useRenderElement.js
var import_react = __toESM(require_react(), 1);
function useRenderElement(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping3,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping3) : EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
  const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return mergePropsN(props);
  }
  return mergeProps(void 0, props);
}
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
var LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === "function") {
      if (true) {
        warnIfRenderPropLooksLikeComponent(render);
      }
      return render(props, state);
    }
    const mergedProps = mergeProps(props, render.props);
    mergedProps.ref = props.ref;
    let newElement = render;
    if (newElement?.$$typeof === REACT_LAZY_TYPE) {
      const children = React10.Children.toArray(render);
      newElement = children[0];
    }
    if (true) {
      if (!/* @__PURE__ */ React10.isValidElement(newElement)) {
        throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
      }
    }
    return /* @__PURE__ */ React10.cloneElement(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag(element, props);
    }
  }
  throw new Error(true ? "Base UI: Render element or function are not defined." : formatErrorMessage_default(8));
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
    return;
  }
  warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ (0, import_react.createElement)("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ (0, import_react.createElement)("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ React10.createElement(Tag, props);
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/reason-parts.js
var reason_parts_exports = {};
__export(reason_parts_exports, {
  cancelOpen: () => cancelOpen,
  chipRemovePress: () => chipRemovePress,
  clearPress: () => clearPress,
  closePress: () => closePress,
  closeWatcher: () => closeWatcher,
  decrementPress: () => decrementPress,
  disabled: () => disabled,
  drag: () => drag,
  escapeKey: () => escapeKey,
  focusOut: () => focusOut,
  imperativeAction: () => imperativeAction,
  incrementPress: () => incrementPress,
  inputBlur: () => inputBlur,
  inputChange: () => inputChange,
  inputClear: () => inputClear,
  inputPaste: () => inputPaste,
  inputPress: () => inputPress,
  itemPress: () => itemPress,
  keyboard: () => keyboard,
  linkPress: () => linkPress,
  listNavigation: () => listNavigation,
  none: () => none,
  outsidePress: () => outsidePress,
  pointer: () => pointer,
  scrub: () => scrub,
  siblingOpen: () => siblingOpen,
  swipe: () => swipe,
  trackPress: () => trackPress,
  triggerFocus: () => triggerFocus,
  triggerHover: () => triggerHover,
  triggerPress: () => triggerPress,
  wheel: () => wheel,
  windowResize: () => windowResize
});
var none = "none";
var triggerPress = "trigger-press";
var triggerHover = "trigger-hover";
var triggerFocus = "trigger-focus";
var outsidePress = "outside-press";
var itemPress = "item-press";
var closePress = "close-press";
var linkPress = "link-press";
var clearPress = "clear-press";
var chipRemovePress = "chip-remove-press";
var trackPress = "track-press";
var incrementPress = "increment-press";
var decrementPress = "decrement-press";
var inputChange = "input-change";
var inputClear = "input-clear";
var inputBlur = "input-blur";
var inputPaste = "input-paste";
var inputPress = "input-press";
var focusOut = "focus-out";
var escapeKey = "escape-key";
var closeWatcher = "close-watcher";
var listNavigation = "list-navigation";
var keyboard = "keyboard";
var pointer = "pointer";
var drag = "drag";
var wheel = "wheel";
var scrub = "scrub";
var cancelOpen = "cancel-open";
var siblingOpen = "sibling-open";
var disabled = "disabled";
var imperativeAction = "imperative-action";
var swipe = "swipe";
var windowResize = "window-resize";

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useId.js
var React12 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/safeReact.js
var React11 = __toESM(require_react(), 1);
var SafeReact = {
  ...React11
};

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useId.js
var globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
  const [defaultId, setDefaultId] = React12.useState(idOverride);
  const id = idOverride || defaultId;
  React12.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`${prefix}-${globalId}`);
    }
  }, [defaultId, prefix]);
  return id;
}
var maybeReactUseId = SafeReact.useId;
function useId(idOverride, prefix) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }
  return useGlobalId(idOverride, prefix);
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/useBaseUiId.js
function useBaseUiId(idOverride) {
  return useId(idOverride, "base-ui");
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/useAnimationsFinished.js
var ReactDOM = __toESM(require_react_dom(), 1);

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useOnMount.js
var React13 = __toESM(require_react(), 1);
var EMPTY = [];
function useOnMount(fn) {
  React13.useEffect(fn, EMPTY);
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useAnimationFrame.js
var EMPTY2 = null;
var LAST_RAF = globalThis.requestAnimationFrame;
var Scheduler = class {
  /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = (timestamp) => {
    this.isScheduled = false;
    const currentCallbacks = this.callbacks;
    const currentCallbacksCount = this.callbacksCount;
    this.callbacks = [];
    this.callbacksCount = 0;
    this.startId = this.nextId;
    if (currentCallbacksCount > 0) {
      for (let i = 0; i < currentCallbacks.length; i += 1) {
        currentCallbacks[i]?.(timestamp);
      }
    }
  };
  request(fn) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn);
    this.callbacksCount += 1;
    const didRAFChange = LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index = id - this.startId;
    if (index < 0 || index >= this.callbacks.length) {
      return;
    }
    this.callbacks[index] = null;
    this.callbacksCount -= 1;
  }
};
var scheduler = new Scheduler();
var AnimationFrame = class _AnimationFrame {
  static create() {
    return new _AnimationFrame();
  }
  static request(fn) {
    return scheduler.request(fn);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  currentId = EMPTY2;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(fn) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY2;
      fn();
    });
  }
  cancel = () => {
    if (this.currentId !== EMPTY2) {
      scheduler.cancel(this.currentId);
      this.currentId = EMPTY2;
    }
  };
  disposeEffect = () => {
    return this.cancel;
  };
};
function useAnimationFrame() {
  const timeout = useRefWithInit(AnimationFrame.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/utils/resolveRef.js
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js
var TransitionStatusDataAttributes = /* @__PURE__ */ (function(TransitionStatusDataAttributes2) {
  TransitionStatusDataAttributes2["startingStyle"] = "data-starting-style";
  TransitionStatusDataAttributes2["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes2;
})({});
var STARTING_HOOK = {
  [TransitionStatusDataAttributes.startingStyle]: ""
};
var ENDING_HOOK = {
  [TransitionStatusDataAttributes.endingStyle]: ""
};
var transitionStatusMapping = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK;
    }
    if (value === "ending") {
      return ENDING_HOOK;
    }
    return null;
  }
};

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/useAnimationsFinished.js
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      ReactDOM.flushSync(fnToExecute);
    };
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }).catch(() => {
        if (treatAbortedAsFinished) {
          if (!signal?.aborted) {
            done();
          }
          return;
        }
        const currentAnimations = resolvedElement.getAnimations();
        if (!signal?.aborted && currentAnimations.length > 0 && currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
          exec();
        }
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/useTransitionStatus.js
var React14 = __toESM(require_react(), 1);
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
  const [transitionStatus, setTransitionStatus] = React14.useState(open && enableIdleState ? "idle" : void 0);
  const [mounted, setMounted] = React14.useState(open);
  if (open && !mounted) {
    setMounted(true);
    setTransitionStatus("starting");
  }
  if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) {
    setTransitionStatus("ending");
  }
  if (!open && !mounted && transitionStatus === "ending") {
    setTransitionStatus(void 0);
  }
  useIsoLayoutEffect(() => {
    if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("ending");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }
    return void 0;
  }, [open, mounted, transitionStatus, deferEndingState]);
  useIsoLayoutEffect(() => {
    if (!open || enableIdleState) {
      return void 0;
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus(void 0);
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open]);
  useIsoLayoutEffect(() => {
    if (!open || !enableIdleState) {
      return void 0;
    }
    if (open && mounted && transitionStatus !== "idle") {
      setTransitionStatus("starting");
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus("idle");
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open, mounted, transitionStatus]);
  return {
    mounted,
    setMounted,
    transitionStatus
  };
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/list/useCompositeListItem.js
var React15 = __toESM(require_react(), 1);
var IndexGuessBehavior = /* @__PURE__ */ (function(IndexGuessBehavior2) {
  IndexGuessBehavior2[IndexGuessBehavior2["None"] = 0] = "None";
  IndexGuessBehavior2[IndexGuessBehavior2["GuessFromOrder"] = 1] = "GuessFromOrder";
  return IndexGuessBehavior2;
})({});
function useCompositeListItem(params = {}) {
  const {
    label,
    metadata,
    textRef,
    indexGuessBehavior,
    index: externalIndex
  } = params;
  const {
    register,
    unregister,
    subscribeMapChange,
    elementsRef,
    labelsRef,
    nextIndexRef
  } = useCompositeListContext();
  const indexRef = React15.useRef(-1);
  const [index, setIndex] = React15.useState(externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? () => {
    if (indexRef.current === -1) {
      const newIndex = nextIndexRef.current;
      nextIndexRef.current += 1;
      indexRef.current = newIndex;
    }
    return indexRef.current;
  } : -1));
  const componentRef = React15.useRef(null);
  const ref = React15.useCallback((node) => {
    componentRef.current = node;
    if (index !== -1 && node !== null) {
      elementsRef.current[index] = node;
      if (labelsRef) {
        const isLabelDefined = label !== void 0;
        labelsRef.current[index] = isLabelDefined ? label : textRef?.current?.textContent ?? node.textContent;
      }
    }
  }, [index, elementsRef, labelsRef, label, textRef]);
  useIsoLayoutEffect(() => {
    if (externalIndex != null) {
      return void 0;
    }
    const node = componentRef.current;
    if (node) {
      register(node, metadata);
      return () => {
        unregister(node);
      };
    }
    return void 0;
  }, [externalIndex, register, unregister, metadata]);
  useIsoLayoutEffect(() => {
    if (externalIndex != null) {
      return void 0;
    }
    return subscribeMapChange((map) => {
      const i = componentRef.current ? map.get(componentRef.current)?.index : null;
      if (i != null) {
        setIndex(i);
      }
    });
  }, [externalIndex, subscribeMapChange, setIndex]);
  return React15.useMemo(() => ({
    ref,
    index
  }), [index, ref]);
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/isElementDisabled.js
function isElementDisabled(element) {
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/use-button/useButton.js
var React18 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/root/CompositeRootContext.js
var React16 = __toESM(require_react(), 1);
var CompositeRootContext = /* @__PURE__ */ React16.createContext(void 0);
if (true) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
  const context = React16.useContext(CompositeRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage_default(16));
  }
  return context;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js
var React17 = __toESM(require_react(), 1);
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled: disabled2,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = React17.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled2 && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled2) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled2) {
      additionalProps["aria-disabled"] = disabled2;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled2;
    }
    return additionalProps;
  }, [composite, disabled2, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/use-button/useButton.js
function useButton(parameters = {}) {
  const {
    disabled: disabled2 = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = React18.useRef(null);
  const compositeRootContext = useCompositeRootContext(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled: disabled2,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  if (true) {
    React18.useEffect(() => {
      if (!elementRef.current) {
        return;
      }
      const isButtonTag = isButtonElement(elementRef.current);
      if (isNativeButton) {
        if (!isButtonTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message = "A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the `render` prop, or set `nativeButton` to `false`.";
          error(`${message}${ownerStackMessage}`);
        }
      } else if (isButtonTag) {
        const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
        const message = "A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set `nativeButton` to `true`.";
        error(`${message}${ownerStackMessage}`);
      }
    }, [isNativeButton]);
  }
  const updateDisabled = React18.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled2 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled2, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = React18.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    const type = isNativeButton ? "button" : void 0;
    return mergeProps({
      type,
      onClick(event) {
        if (disabled2) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled2) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (disabled2) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyDown?.(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        const role = currentTarget.getAttribute("role");
        const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();
          if (isLink || isNativeButton && isButton) {
            currentTarget.click();
            event.preventBaseUIHandler();
          } else if (shouldClick) {
            externalOnClick?.(event);
            event.preventBaseUIHandler();
          }
          return;
        }
        if (shouldClick) {
          if (!isNativeButton && (isSpaceKey || isEnterKey)) {
            event.preventDefault();
          }
          if (!isNativeButton && isEnterKey) {
            externalOnClick?.(event);
          }
        }
      },
      onKeyUp(event) {
        if (disabled2) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyUp?.(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === " ") {
          externalOnClick?.(event);
        }
      },
      onPointerDown(event) {
        if (disabled2) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, !isNativeButton ? {
      role: "button"
    } : void 0, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled2, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
  return Boolean(elem?.tagName === "A" && elem?.href);
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/shadowDom.js
function activeElement(doc) {
  let element = doc.activeElement;
  while (element?.shadowRoot?.activeElement != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode?.();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// ../../../node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var round = Math.round;
var floor = Math.floor;

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/floating-ui-react/utils/composite.js
function isDifferentGridRow(index, cols, prevRow) {
  return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfListBounds(list, index) {
  return index < 0 || index >= list.length;
}
function getMinListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    disabledIndices
  });
}
function getMaxListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledListIndex(list, {
  startingIndex = -1,
  decrement = false,
  disabledIndices,
  amount = 1
} = {}) {
  let index = startingIndex;
  do {
    index += decrement ? -amount : amount;
  } while (index >= 0 && index <= list.length - 1 && isListIndexDisabled(list, index, disabledIndices));
  return index;
}
function getGridNavigatedIndex(list, {
  event,
  orientation,
  loopFocus,
  onLoop,
  rtl,
  cols,
  disabledIndices,
  minIndex,
  maxIndex,
  prevIndex,
  stopEvent: stop = false
}) {
  let nextIndex = prevIndex;
  let verticalDirection;
  if (event.key === ARROW_UP) {
    verticalDirection = "up";
  } else if (event.key === ARROW_DOWN) {
    verticalDirection = "down";
  }
  if (verticalDirection) {
    const rows = [];
    const rowIndexMap = [];
    let hasRoleRow = false;
    let visibleItemCount = 0;
    {
      let currentRowEl = null;
      let currentRowIndex = -1;
      list.forEach((el, idx) => {
        if (el == null) {
          return;
        }
        visibleItemCount += 1;
        const rowEl = el.closest('[role="row"]');
        if (rowEl) {
          hasRoleRow = true;
        }
        if (rowEl !== currentRowEl || currentRowIndex === -1) {
          currentRowEl = rowEl;
          currentRowIndex += 1;
          rows[currentRowIndex] = [];
        }
        rows[currentRowIndex].push(idx);
        rowIndexMap[idx] = currentRowIndex;
      });
    }
    let hasDomRows = false;
    let inferredDomCols = 0;
    if (hasRoleRow) {
      for (const row of rows) {
        const rowLength = row.length;
        if (rowLength > inferredDomCols) {
          inferredDomCols = rowLength;
        }
        if (rowLength !== cols) {
          hasDomRows = true;
        }
      }
    }
    const hasVirtualizedGaps = hasDomRows && visibleItemCount < list.length;
    const verticalCols = inferredDomCols || cols;
    const navigateVertically = (direction) => {
      if (!hasDomRows || prevIndex === -1) {
        return void 0;
      }
      const currentRow = rowIndexMap[prevIndex];
      if (currentRow == null) {
        return void 0;
      }
      const colInRow = rows[currentRow].indexOf(prevIndex);
      const step = direction === "up" ? -1 : 1;
      for (let nextRow = currentRow + step, i = 0; i < rows.length; i += 1, nextRow += step) {
        if (nextRow < 0 || nextRow >= rows.length) {
          if (!loopFocus || hasVirtualizedGaps) {
            return void 0;
          }
          nextRow = nextRow < 0 ? rows.length - 1 : 0;
          if (onLoop) {
            const clampedCol = Math.min(colInRow, rows[nextRow].length - 1);
            const targetItemIndex = rows[nextRow][clampedCol] ?? rows[nextRow][0];
            const returnedItemIndex = onLoop(event, prevIndex, targetItemIndex);
            nextRow = rowIndexMap[returnedItemIndex] ?? nextRow;
          }
        }
        const targetRow = rows[nextRow];
        for (let col = Math.min(colInRow, targetRow.length - 1); col >= 0; col -= 1) {
          const candidate = targetRow[col];
          if (!isListIndexDisabled(list, candidate, disabledIndices)) {
            return candidate;
          }
        }
      }
      return void 0;
    };
    const navigateVerticallyWithInferredRows = (direction) => {
      if (!hasVirtualizedGaps || prevIndex === -1) {
        return void 0;
      }
      const colInRow = prevIndex % verticalCols;
      const rowStep = direction === "up" ? -verticalCols : verticalCols;
      const lastRowStart = maxIndex - maxIndex % verticalCols;
      const rowCount = floor(maxIndex / verticalCols) + 1;
      for (let rowStart = prevIndex - colInRow + rowStep, i = 0; i < rowCount; i += 1, rowStart += rowStep) {
        if (rowStart < 0 || rowStart > maxIndex) {
          if (!loopFocus) {
            return void 0;
          }
          rowStart = rowStart < 0 ? lastRowStart : 0;
        }
        const rowEnd = Math.min(rowStart + verticalCols - 1, maxIndex);
        for (let candidate = Math.min(rowStart + colInRow, rowEnd); candidate >= rowStart; candidate -= 1) {
          if (!isListIndexDisabled(list, candidate, disabledIndices)) {
            return candidate;
          }
        }
      }
      return void 0;
    };
    if (stop) {
      stopEvent(event);
    }
    const verticalCandidate = navigateVertically(verticalDirection) ?? navigateVerticallyWithInferredRows(verticalDirection);
    if (verticalCandidate !== void 0) {
      nextIndex = verticalCandidate;
    } else if (prevIndex === -1) {
      nextIndex = verticalDirection === "up" ? maxIndex : minIndex;
    } else {
      nextIndex = findNonDisabledListIndex(list, {
        startingIndex: prevIndex,
        amount: verticalCols,
        decrement: verticalDirection === "up",
        disabledIndices
      });
      if (loopFocus) {
        if (verticalDirection === "up" && (prevIndex - verticalCols < minIndex || nextIndex < 0)) {
          const col = prevIndex % verticalCols;
          const maxCol = maxIndex % verticalCols;
          const offset = maxIndex - (maxCol - col);
          if (maxCol === col) {
            nextIndex = maxIndex;
          } else {
            nextIndex = maxCol > col ? offset : offset - verticalCols;
          }
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
        if (verticalDirection === "down" && prevIndex + verticalCols > maxIndex) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex % verticalCols - verticalCols,
            amount: verticalCols,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      }
    }
    if (isIndexOutOfListBounds(list, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === (rtl ? ARROW_LEFT : ARROW_RIGHT)) {
      if (stop) {
        stopEvent(event);
      }
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      } else if (loopFocus) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      }
      if (isDifferentGridRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT)) {
      if (stop) {
        stopEvent(event);
      }
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      } else if (loopFocus) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      }
      if (isDifferentGridRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfListBounds(list, nextIndex)) {
      if (loopFocus && lastRow) {
        nextIndex = event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT) ? maxIndex : findNonDisabledListIndex(list, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function createGridCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach(({
    width,
    height
  }, index) => {
    if (width > cols) {
      if (true) {
        throw new Error(`[Floating UI]: Invalid grid - item width at index ${index} is greater than grid columns`);
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i = 0; i < width; i += 1) {
        for (let j = 0; j < height; j += 1) {
          targetCells.push(startIndex + i + j * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index;
        });
        itemPlaced = true;
      } else {
        startIndex += 1;
      }
    }
  });
  return [...cellMap];
}
function getGridCellIndexOfCorner(index, sizes, cellMap, cols, corner) {
  if (index === -1) {
    return -1;
  }
  const firstCellIndex = cellMap.indexOf(index);
  const sizeItem = sizes[index];
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case "bl":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index);
    default:
      return -1;
  }
}
function getGridCellIndices(indices, cellMap) {
  return cellMap.flatMap((index, cellIndex) => indices.includes(index) ? [cellIndex] : []);
}
function isListIndexDisabled(list, index, disabledIndices) {
  const isExplicitlyDisabled = typeof disabledIndices === "function" ? disabledIndices(index) : disabledIndices?.includes(index) ?? false;
  if (isExplicitlyDisabled) {
    return true;
  }
  const element = list[index];
  if (!element) {
    return false;
  }
  if (!isElementVisible(element)) {
    return true;
  }
  return !disabledIndices && (element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true");
}
function isHiddenByStyles(styles) {
  return styles.visibility === "hidden" || styles.visibility === "collapse";
}
function isElementVisible(element, styles = element ? getComputedStyle2(element) : null) {
  if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
    return false;
  }
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  return styles.display !== "none" && styles.display !== "contents";
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/owner.js
function ownerDocument(node) {
  return node?.ownerDocument || document;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/composite.js
var ARROW_UP2 = "ArrowUp";
var ARROW_DOWN2 = "ArrowDown";
var ARROW_LEFT2 = "ArrowLeft";
var ARROW_RIGHT2 = "ArrowRight";
var HOME = "Home";
var END = "End";
var HORIZONTAL_KEYS = /* @__PURE__ */ new Set([ARROW_LEFT2, ARROW_RIGHT2]);
var HORIZONTAL_KEYS_WITH_EXTRA_KEYS = /* @__PURE__ */ new Set([ARROW_LEFT2, ARROW_RIGHT2, HOME, END]);
var VERTICAL_KEYS = /* @__PURE__ */ new Set([ARROW_UP2, ARROW_DOWN2]);
var VERTICAL_KEYS_WITH_EXTRA_KEYS = /* @__PURE__ */ new Set([ARROW_UP2, ARROW_DOWN2, HOME, END]);
var ARROW_KEYS = /* @__PURE__ */ new Set([...HORIZONTAL_KEYS, ...VERTICAL_KEYS]);
var ALL_KEYS = /* @__PURE__ */ new Set([...ARROW_KEYS, HOME, END]);
var SHIFT = "Shift";
var CONTROL = "Control";
var ALT = "Alt";
var META = "Meta";
var MODIFIER_KEYS = /* @__PURE__ */ new Set([SHIFT, CONTROL, ALT, META]);
function isInputElement(element) {
  return isHTMLElement(element) && element.tagName === "INPUT";
}
function isNativeInput(element) {
  if (isInputElement(element) && element.selectionStart != null) {
    return true;
  }
  if (isHTMLElement(element) && element.tagName === "TEXTAREA") {
    return true;
  }
  return false;
}
function scrollIntoViewIfNeeded(scrollContainer, element, direction, orientation) {
  if (!scrollContainer || !element || !element.scrollTo) {
    return;
  }
  let targetX = scrollContainer.scrollLeft;
  let targetY = scrollContainer.scrollTop;
  const isOverflowingX = scrollContainer.clientWidth < scrollContainer.scrollWidth;
  const isOverflowingY = scrollContainer.clientHeight < scrollContainer.scrollHeight;
  if (isOverflowingX && orientation !== "vertical") {
    const elementOffsetLeft = getOffset(scrollContainer, element, "left");
    const containerStyles = getStyles(scrollContainer);
    const elementStyles = getStyles(element);
    if (direction === "ltr") {
      if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
        targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
      } else if (elementOffsetLeft - elementStyles.scrollMarginLeft < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
        targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
      }
    }
    if (direction === "rtl") {
      if (elementOffsetLeft - elementStyles.scrollMarginRight < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
        targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
      } else if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
        targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
      }
    }
  }
  if (isOverflowingY && orientation !== "horizontal") {
    const elementOffsetTop = getOffset(scrollContainer, element, "top");
    const containerStyles = getStyles(scrollContainer);
    const elementStyles = getStyles(element);
    if (elementOffsetTop - elementStyles.scrollMarginTop < scrollContainer.scrollTop + containerStyles.scrollPaddingTop) {
      targetY = elementOffsetTop - elementStyles.scrollMarginTop - containerStyles.scrollPaddingTop;
    } else if (elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom > scrollContainer.scrollTop + scrollContainer.clientHeight - containerStyles.scrollPaddingBottom) {
      targetY = elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom - scrollContainer.clientHeight + containerStyles.scrollPaddingBottom;
    }
  }
  scrollContainer.scrollTo({
    left: targetX,
    top: targetY,
    behavior: "auto"
  });
}
function getOffset(ancestor, element, side) {
  const propName = side === "left" ? "offsetLeft" : "offsetTop";
  let result = 0;
  while (element.offsetParent) {
    result += element[propName];
    if (element.offsetParent === ancestor) {
      break;
    }
    element = element.offsetParent;
  }
  return result;
}
function getStyles(element) {
  const styles = getComputedStyle(element);
  return {
    scrollMarginTop: parseFloat(styles.scrollMarginTop) || 0,
    scrollMarginRight: parseFloat(styles.scrollMarginRight) || 0,
    scrollMarginBottom: parseFloat(styles.scrollMarginBottom) || 0,
    scrollMarginLeft: parseFloat(styles.scrollMarginLeft) || 0,
    scrollPaddingTop: parseFloat(styles.scrollPaddingTop) || 0,
    scrollPaddingRight: parseFloat(styles.scrollPaddingRight) || 0,
    scrollPaddingBottom: parseFloat(styles.scrollPaddingBottom) || 0,
    scrollPaddingLeft: parseFloat(styles.scrollPaddingLeft) || 0
  };
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js
var React19 = __toESM(require_react(), 1);
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
  React19.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/useForcedRerendering.js
var React20 = __toESM(require_react(), 1);
function useForcedRerendering() {
  const [, setState] = React20.useState({});
  return React20.useCallback(() => {
    setState({});
  }, []);
}

// ../../../node_modules/.pnpm/@base-ui+utils@0.2.8_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/esm/inertValue.js
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : void 0;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/item/useCompositeItem.js
var React21 = __toESM(require_react(), 1);
function useCompositeItem(params = {}) {
  const {
    highlightItemOnHover,
    highlightedIndex,
    onHighlightedIndexChange
  } = useCompositeRootContext();
  const {
    ref,
    index
  } = useCompositeListItem(params);
  const isHighlighted = highlightedIndex === index;
  const itemRef = React21.useRef(null);
  const mergedRef = useMergedRefs(ref, itemRef);
  const compositeProps = React21.useMemo(() => ({
    tabIndex: isHighlighted ? 0 : -1,
    onFocus() {
      onHighlightedIndexChange(index);
    },
    onMouseMove() {
      const item = itemRef.current;
      if (!highlightItemOnHover || !item) {
        return;
      }
      const disabled2 = item.hasAttribute("disabled") || item.ariaDisabled === "true";
      if (!isHighlighted && !disabled2) {
        item.focus();
      }
    }
  }), [isHighlighted, onHighlightedIndexChange, index, highlightItemOnHover]);
  return {
    compositeProps,
    compositeRef: mergedRef,
    index
  };
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/utils/getCssDimensions.js
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height
  };
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/csp-provider/CSPContext.js
var React22 = __toESM(require_react(), 1);
var CSPContext = /* @__PURE__ */ React22.createContext(void 0);
if (true) CSPContext.displayName = "CSPContext";
var DEFAULT_CSP_CONTEXT_VALUE = {
  disableStyleElements: false
};
function useCSPContext() {
  return React22.useContext(CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/root/CompositeRoot.js
var React24 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/root/useCompositeRoot.js
var React23 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/constants.js
var ACTIVE_COMPOSITE_ITEM = "data-composite-item-active";

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/root/useCompositeRoot.js
var EMPTY_ARRAY2 = [];
function useCompositeRoot(params) {
  const {
    itemSizes,
    cols = 1,
    loopFocus = true,
    onLoop,
    dense = false,
    orientation = "both",
    direction,
    highlightedIndex: externalHighlightedIndex,
    onHighlightedIndexChange: externalSetHighlightedIndex,
    rootRef: externalRef,
    enableHomeAndEndKeys = false,
    stopEventPropagation = false,
    disabledIndices,
    modifierKeys = EMPTY_ARRAY2
  } = params;
  const [internalHighlightedIndex, internalSetHighlightedIndex] = React23.useState(0);
  const isGrid = cols > 1;
  const rootRef = React23.useRef(null);
  const mergedRef = useMergedRefs(rootRef, externalRef);
  const elementsRef = React23.useRef([]);
  const hasSetDefaultIndexRef = React23.useRef(false);
  const highlightedIndex = externalHighlightedIndex ?? internalHighlightedIndex;
  const onHighlightedIndexChange = useStableCallback((index, shouldScrollIntoView = false) => {
    (externalSetHighlightedIndex ?? internalSetHighlightedIndex)(index);
    if (shouldScrollIntoView) {
      const newActiveItem = elementsRef.current[index];
      scrollIntoViewIfNeeded(rootRef.current, newActiveItem, direction, orientation);
    }
  });
  const onMapChange = useStableCallback((map) => {
    if (map.size === 0 || hasSetDefaultIndexRef.current) {
      return;
    }
    hasSetDefaultIndexRef.current = true;
    const sortedElements = Array.from(map.keys());
    const activeItem = sortedElements.find((compositeElement) => compositeElement?.hasAttribute(ACTIVE_COMPOSITE_ITEM)) ?? null;
    const activeIndex = activeItem ? sortedElements.indexOf(activeItem) : -1;
    if (activeIndex !== -1) {
      onHighlightedIndexChange(activeIndex);
    }
    scrollIntoViewIfNeeded(rootRef.current, activeItem, direction, orientation);
  });
  const wrappedOnLoop = useStableCallback((event, prevIndex, nextIndex) => {
    if (!onLoop) {
      return nextIndex;
    }
    return onLoop?.(event, prevIndex, nextIndex, elementsRef);
  });
  const props = React23.useMemo(() => ({
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    ref: mergedRef,
    onFocus(event) {
      const element = rootRef.current;
      const target = getTarget(event.nativeEvent);
      if (!element || target == null || !isNativeInput(target)) {
        return;
      }
      target.setSelectionRange(0, target.value.length ?? 0);
    },
    onKeyDown(event) {
      const RELEVANT_KEYS = enableHomeAndEndKeys ? ALL_KEYS : ARROW_KEYS;
      if (!RELEVANT_KEYS.has(event.key)) {
        return;
      }
      if (isModifierKeySet(event, modifierKeys)) {
        return;
      }
      const element = rootRef.current;
      if (!element) {
        return;
      }
      const isRtl = direction === "rtl";
      const horizontalForwardKey = isRtl ? ARROW_LEFT2 : ARROW_RIGHT2;
      const forwardKey = {
        horizontal: horizontalForwardKey,
        vertical: ARROW_DOWN2,
        both: horizontalForwardKey
      }[orientation];
      const horizontalBackwardKey = isRtl ? ARROW_RIGHT2 : ARROW_LEFT2;
      const backwardKey = {
        horizontal: horizontalBackwardKey,
        vertical: ARROW_UP2,
        both: horizontalBackwardKey
      }[orientation];
      const target = getTarget(event.nativeEvent);
      if (target != null && isNativeInput(target) && !isElementDisabled(target)) {
        const selectionStart = target.selectionStart;
        const selectionEnd = target.selectionEnd;
        const textContent = target.value ?? "";
        if (selectionStart == null || event.shiftKey || selectionStart !== selectionEnd) {
          return;
        }
        if (event.key !== backwardKey && selectionStart < textContent.length) {
          return;
        }
        if (event.key !== forwardKey && selectionStart > 0) {
          return;
        }
      }
      let nextIndex = highlightedIndex;
      const minIndex = getMinListIndex(elementsRef, disabledIndices);
      const maxIndex = getMaxListIndex(elementsRef, disabledIndices);
      if (isGrid) {
        const sizes = itemSizes || Array.from({
          length: elementsRef.current.length
        }, () => ({
          width: 1,
          height: 1
        }));
        const cellMap = createGridCellMap(sizes, cols, dense);
        const minGridIndex = cellMap.findIndex((index) => index != null && !isListIndexDisabled(elementsRef.current, index, disabledIndices));
        const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex) => index != null && !isListIndexDisabled(elementsRef.current, index, disabledIndices) ? cellIndex : foundIndex, -1);
        nextIndex = cellMap[getGridNavigatedIndex(cellMap.map((itemIndex) => itemIndex != null ? elementsRef.current[itemIndex] : null), {
          event,
          orientation,
          loopFocus,
          onLoop: wrappedOnLoop,
          cols,
          // treat undefined (empty grid spaces) as disabled indices so we
          // don't end up in them
          disabledIndices: getGridCellIndices([...disabledIndices || elementsRef.current.map((_, index) => isListIndexDisabled(elementsRef.current, index) ? index : void 0), void 0], cellMap),
          minIndex: minGridIndex,
          maxIndex: maxGridIndex,
          prevIndex: getGridCellIndexOfCorner(
            highlightedIndex > maxIndex ? minIndex : highlightedIndex,
            sizes,
            cellMap,
            cols,
            // use a corner matching the edge closest to the direction we're
            // moving in so we don't end up in the same item. Prefer
            // top/left over bottom/right.
            // eslint-disable-next-line no-nested-ternary
            event.key === ARROW_DOWN2 ? "bl" : event.key === ARROW_RIGHT2 ? "tr" : "tl"
          ),
          rtl: isRtl
        })];
      }
      const forwardKeys = {
        horizontal: [horizontalForwardKey],
        vertical: [ARROW_DOWN2],
        both: [horizontalForwardKey, ARROW_DOWN2]
      }[orientation];
      const backwardKeys = {
        horizontal: [horizontalBackwardKey],
        vertical: [ARROW_UP2],
        both: [horizontalBackwardKey, ARROW_UP2]
      }[orientation];
      const preventedKeys = isGrid ? RELEVANT_KEYS : {
        horizontal: enableHomeAndEndKeys ? HORIZONTAL_KEYS_WITH_EXTRA_KEYS : HORIZONTAL_KEYS,
        vertical: enableHomeAndEndKeys ? VERTICAL_KEYS_WITH_EXTRA_KEYS : VERTICAL_KEYS,
        both: RELEVANT_KEYS
      }[orientation];
      if (enableHomeAndEndKeys) {
        if (event.key === HOME) {
          nextIndex = minIndex;
        } else if (event.key === END) {
          nextIndex = maxIndex;
        }
      }
      if (nextIndex === highlightedIndex && (forwardKeys.includes(event.key) || backwardKeys.includes(event.key))) {
        if (loopFocus && nextIndex === maxIndex && forwardKeys.includes(event.key)) {
          nextIndex = minIndex;
          if (onLoop) {
            nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
          }
        } else if (loopFocus && nextIndex === minIndex && backwardKeys.includes(event.key)) {
          nextIndex = maxIndex;
          if (onLoop) {
            nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
          }
        } else {
          nextIndex = findNonDisabledListIndex(elementsRef.current, {
            startingIndex: nextIndex,
            decrement: backwardKeys.includes(event.key),
            disabledIndices
          });
        }
      }
      if (nextIndex !== highlightedIndex && !isIndexOutOfListBounds(elementsRef.current, nextIndex)) {
        if (stopEventPropagation) {
          event.stopPropagation();
        }
        if (preventedKeys.has(event.key)) {
          event.preventDefault();
        }
        onHighlightedIndexChange(nextIndex, true);
        queueMicrotask(() => {
          elementsRef.current[nextIndex]?.focus();
        });
      }
    }
  }), [cols, dense, direction, disabledIndices, elementsRef, enableHomeAndEndKeys, highlightedIndex, isGrid, itemSizes, loopFocus, onLoop, wrappedOnLoop, mergedRef, modifierKeys, onHighlightedIndexChange, orientation, stopEventPropagation]);
  return React23.useMemo(() => ({
    props,
    highlightedIndex,
    onHighlightedIndexChange,
    elementsRef,
    disabledIndices,
    onMapChange,
    relayKeyboardEvent: props.onKeyDown
  }), [props, highlightedIndex, onHighlightedIndexChange, elementsRef, disabledIndices, onMapChange]);
}
function isModifierKeySet(event, ignoredModifierKeys) {
  for (const key of MODIFIER_KEYS.values()) {
    if (ignoredModifierKeys.includes(key)) {
      continue;
    }
    if (event.getModifierState(key)) {
      return true;
    }
  }
  return false;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/internals/composite/root/CompositeRoot.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function CompositeRoot(componentProps) {
  const {
    render,
    className,
    style,
    refs = EMPTY_ARRAY,
    props = EMPTY_ARRAY,
    state = EMPTY_OBJECT,
    stateAttributesMapping: stateAttributesMapping3,
    highlightedIndex: highlightedIndexProp,
    onHighlightedIndexChange: onHighlightedIndexChangeProp,
    orientation,
    dense,
    itemSizes,
    loopFocus,
    onLoop,
    cols,
    enableHomeAndEndKeys,
    onMapChange: onMapChangeProp,
    stopEventPropagation = true,
    rootRef,
    disabledIndices,
    modifierKeys,
    highlightItemOnHover = false,
    tag = "div",
    ...elementProps
  } = componentProps;
  const direction = useDirection();
  const {
    props: defaultProps,
    highlightedIndex,
    onHighlightedIndexChange,
    elementsRef,
    onMapChange: onMapChangeUnwrapped,
    relayKeyboardEvent
  } = useCompositeRoot({
    itemSizes,
    cols,
    loopFocus,
    onLoop,
    dense,
    orientation,
    highlightedIndex: highlightedIndexProp,
    onHighlightedIndexChange: onHighlightedIndexChangeProp,
    rootRef,
    stopEventPropagation,
    enableHomeAndEndKeys,
    direction,
    disabledIndices,
    modifierKeys
  });
  const element = useRenderElement(tag, componentProps, {
    state,
    ref: refs,
    props: [defaultProps, ...props, elementProps],
    stateAttributesMapping: stateAttributesMapping3
  });
  const contextValue = React24.useMemo(() => ({
    highlightedIndex,
    onHighlightedIndexChange,
    highlightItemOnHover,
    relayKeyboardEvent
  }), [highlightedIndex, onHighlightedIndexChange, highlightItemOnHover, relayKeyboardEvent]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CompositeRootContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CompositeList, {
      elementsRef,
      onMapChange: (newMap) => {
        onMapChangeProp?.(newMap);
        onMapChangeUnwrapped(newMap);
      },
      children: element
    })
  });
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/utils/useIsHydrating.js
var import_shim = __toESM(require_shim(), 1);
function subscribe() {
  return NOOP;
}
function getSnapshot() {
  return false;
}
function getServerSnapshot() {
  return true;
}
function useIsHydrating() {
  return (0, import_shim.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/index.parts.js
var index_parts_exports = {};
__export(index_parts_exports, {
  Indicator: () => TabsIndicator,
  List: () => TabsList,
  Panel: () => TabsPanel,
  Root: () => TabsRoot,
  Tab: () => TabsTab
});

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/root/TabsRoot.js
var React26 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/root/TabsRootContext.js
var React25 = __toESM(require_react(), 1);
var TabsRootContext = /* @__PURE__ */ React25.createContext(void 0);
if (true) TabsRootContext.displayName = "TabsRootContext";
function useTabsRootContext() {
  const context = React25.useContext(TabsRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: TabsRootContext is missing. Tabs parts must be placed within <Tabs.Root>." : formatErrorMessage_default(64));
  }
  return context;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/root/TabsRootDataAttributes.js
var TabsRootDataAttributes = /* @__PURE__ */ (function(TabsRootDataAttributes2) {
  TabsRootDataAttributes2["activationDirection"] = "data-activation-direction";
  TabsRootDataAttributes2["orientation"] = "data-orientation";
  return TabsRootDataAttributes2;
})({});

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/root/stateAttributesMapping.js
var tabsStateAttributesMapping = {
  tabActivationDirection: (dir) => ({
    [TabsRootDataAttributes.activationDirection]: dir
  })
};

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/root/TabsRoot.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var TabsRoot = /* @__PURE__ */ React26.forwardRef(function TabsRoot2(componentProps, forwardedRef) {
  const {
    className,
    defaultValue: defaultValueProp = 0,
    onValueChange: onValueChangeProp,
    orientation = "horizontal",
    render,
    value: valueProp,
    style,
    ...elementProps
  } = componentProps;
  const hasExplicitDefaultValueProp = Object.hasOwn(componentProps, "defaultValue");
  const tabPanelRefs = React26.useRef([]);
  const [mountedTabPanels, setMountedTabPanels] = React26.useState(() => /* @__PURE__ */ new Map());
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValueProp,
    name: "Tabs",
    state: "value"
  });
  const isControlled = valueProp !== void 0;
  const [tabMap, setTabMap] = React26.useState(() => /* @__PURE__ */ new Map());
  const getTabElementBySelectedValue = React26.useCallback((selectedValue) => {
    if (selectedValue === void 0) {
      return null;
    }
    for (const [tabElement, tabMetadata] of tabMap.entries()) {
      if (tabMetadata != null && selectedValue === (tabMetadata.value ?? tabMetadata.index)) {
        return tabElement;
      }
    }
    return null;
  }, [tabMap]);
  const [activationDirectionState, setActivationDirectionState] = React26.useState(() => ({
    previousValue: value,
    tabActivationDirection: "none"
  }));
  const {
    previousValue,
    tabActivationDirection: committedTabActivationDirection
  } = activationDirectionState;
  let tabActivationDirection = committedTabActivationDirection;
  let directionComputationIncomplete = false;
  if (previousValue !== value) {
    tabActivationDirection = computeActivationDirection(previousValue, value, orientation, tabMap);
    directionComputationIncomplete = previousValue != null && value != null && getTabElementBySelectedValue(value) == null;
  }
  const nextPreviousValue = directionComputationIncomplete ? previousValue : value;
  const shouldSyncActivationDirectionState = previousValue !== nextPreviousValue || committedTabActivationDirection !== tabActivationDirection;
  useIsoLayoutEffect(() => {
    if (!shouldSyncActivationDirectionState) {
      return;
    }
    setActivationDirectionState({
      previousValue: nextPreviousValue,
      tabActivationDirection
    });
  }, [nextPreviousValue, shouldSyncActivationDirectionState, tabActivationDirection]);
  const onValueChange = useStableCallback((newValue, eventDetails) => {
    const activationDirection = computeActivationDirection(value, newValue, orientation, tabMap);
    eventDetails.activationDirection = activationDirection;
    onValueChangeProp?.(newValue, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setValue(newValue);
  });
  const registerMountedTabPanel = useStableCallback((panelValue, panelId) => {
    setMountedTabPanels((prev) => {
      if (prev.get(panelValue) === panelId) {
        return prev;
      }
      const next = new Map(prev);
      next.set(panelValue, panelId);
      return next;
    });
  });
  const unregisterMountedTabPanel = useStableCallback((panelValue, panelId) => {
    setMountedTabPanels((prev) => {
      if (!prev.has(panelValue) || prev.get(panelValue) !== panelId) {
        return prev;
      }
      const next = new Map(prev);
      next.delete(panelValue);
      return next;
    });
  });
  const getTabPanelIdByValue = React26.useCallback((tabValue) => {
    return mountedTabPanels.get(tabValue);
  }, [mountedTabPanels]);
  const getTabIdByPanelValue = React26.useCallback((tabPanelValue) => {
    for (const tabMetadata of tabMap.values()) {
      if (tabPanelValue === tabMetadata?.value) {
        return tabMetadata?.id;
      }
    }
    return void 0;
  }, [tabMap]);
  const tabsContextValue = React26.useMemo(() => ({
    getTabElementBySelectedValue,
    getTabIdByPanelValue,
    getTabPanelIdByValue,
    onValueChange,
    orientation,
    registerMountedTabPanel,
    setTabMap,
    unregisterMountedTabPanel,
    tabActivationDirection,
    value
  }), [getTabElementBySelectedValue, getTabIdByPanelValue, getTabPanelIdByValue, onValueChange, orientation, registerMountedTabPanel, setTabMap, unregisterMountedTabPanel, tabActivationDirection, value]);
  const selectedTabMetadata = React26.useMemo(() => {
    for (const tabMetadata of tabMap.values()) {
      if (tabMetadata != null && tabMetadata.value === value) {
        return tabMetadata;
      }
    }
    return void 0;
  }, [tabMap, value]);
  const firstEnabledTabValue = React26.useMemo(() => {
    for (const tabMetadata of tabMap.values()) {
      if (tabMetadata != null && !tabMetadata.disabled) {
        return tabMetadata.value;
      }
    }
    return void 0;
  }, [tabMap]);
  useIsoLayoutEffect(() => {
    if (isControlled || tabMap.size === 0) {
      return;
    }
    const selectionIsDisabled = selectedTabMetadata?.disabled;
    const selectionIsMissing = selectedTabMetadata == null && value !== null;
    const shouldHonorExplicitDefaultSelection = hasExplicitDefaultValueProp && selectionIsDisabled && value === defaultValueProp;
    if (shouldHonorExplicitDefaultSelection) {
      return;
    }
    if (!selectionIsDisabled && !selectionIsMissing) {
      return;
    }
    const fallbackValue = firstEnabledTabValue ?? null;
    if (value === fallbackValue) {
      return;
    }
    setValue(fallbackValue);
    setActivationDirectionState((prev) => {
      if (prev.tabActivationDirection === "none") {
        return prev;
      }
      return {
        ...prev,
        tabActivationDirection: "none"
      };
    });
  }, [defaultValueProp, firstEnabledTabValue, hasExplicitDefaultValueProp, isControlled, selectedTabMetadata, setValue, tabMap, value]);
  const state = {
    orientation,
    tabActivationDirection
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: tabsStateAttributesMapping
  });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TabsRootContext.Provider, {
    value: tabsContextValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CompositeList, {
      elementsRef: tabPanelRefs,
      children: element
    })
  });
});
if (true) TabsRoot.displayName = "TabsRoot";
function computeActivationDirection(oldValue, newValue, orientation, tabMap) {
  if (oldValue == null || newValue == null) {
    return "none";
  }
  let oldTab = null;
  let newTab = null;
  for (const [tabElement, tabMetadata] of tabMap.entries()) {
    if (tabMetadata == null) {
      continue;
    }
    const tabValue = tabMetadata.value ?? tabMetadata.index;
    if (oldValue === tabValue) {
      oldTab = tabElement;
    }
    if (newValue === tabValue) {
      newTab = tabElement;
    }
    if (oldTab != null && newTab != null) {
      break;
    }
  }
  if (oldTab == null || newTab == null) {
    if (oldTab !== newTab && (typeof oldValue === "number" || typeof oldValue === "string") && typeof oldValue === typeof newValue) {
      if (orientation === "horizontal") {
        return newValue > oldValue ? "right" : "left";
      }
      return newValue > oldValue ? "down" : "up";
    }
    return "none";
  }
  const oldRect = oldTab.getBoundingClientRect();
  const newRect = newTab.getBoundingClientRect();
  if (orientation === "horizontal") {
    if (newRect.left < oldRect.left) {
      return "left";
    }
    if (newRect.left > oldRect.left) {
      return "right";
    }
  } else {
    if (newRect.top < oldRect.top) {
      return "up";
    }
    if (newRect.top > oldRect.top) {
      return "down";
    }
  }
  return "none";
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/tab/TabsTab.js
var React28 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/list/TabsListContext.js
var React27 = __toESM(require_react(), 1);
var TabsListContext = /* @__PURE__ */ React27.createContext(void 0);
if (true) TabsListContext.displayName = "TabsListContext";
function useTabsListContext() {
  const context = React27.useContext(TabsListContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: TabsListContext is missing. TabsList parts must be placed within <Tabs.List>." : formatErrorMessage_default(65));
  }
  return context;
}

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/tab/TabsTab.js
var TabsTab = /* @__PURE__ */ React28.forwardRef(function TabsTab2(componentProps, forwardedRef) {
  const {
    className,
    disabled: disabled2 = false,
    render,
    value,
    id: idProp,
    nativeButton = true,
    style,
    ...elementProps
  } = componentProps;
  const {
    value: activeTabValue,
    getTabPanelIdByValue,
    orientation
  } = useTabsRootContext();
  const {
    activateOnFocus,
    highlightedTabIndex,
    onTabActivation,
    registerTabResizeObserverElement,
    setHighlightedTabIndex,
    tabsListElement
  } = useTabsListContext();
  const id = useBaseUiId(idProp);
  const tabMetadata = React28.useMemo(() => ({
    disabled: disabled2,
    id,
    value
  }), [disabled2, id, value]);
  const {
    compositeProps,
    compositeRef,
    index
    // hook is used instead of the CompositeItem component
    // because the index is needed for Tab internals
  } = useCompositeItem({
    metadata: tabMetadata
  });
  const active = value === activeTabValue;
  const isNavigatingRef = React28.useRef(false);
  const tabElementRef = React28.useRef(null);
  React28.useEffect(() => {
    const tabElement = tabElementRef.current;
    if (!tabElement) {
      return void 0;
    }
    return registerTabResizeObserverElement(tabElement);
  }, [registerTabResizeObserverElement]);
  useIsoLayoutEffect(() => {
    if (isNavigatingRef.current) {
      isNavigatingRef.current = false;
      return;
    }
    if (!(active && index > -1 && highlightedTabIndex !== index)) {
      return;
    }
    const listElement = tabsListElement;
    if (listElement != null) {
      const activeEl = activeElement(ownerDocument(listElement));
      if (activeEl && contains(listElement, activeEl)) {
        return;
      }
    }
    if (!disabled2) {
      setHighlightedTabIndex(index);
    }
  }, [active, index, highlightedTabIndex, setHighlightedTabIndex, disabled2, tabsListElement]);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled: disabled2,
    native: nativeButton,
    focusableWhenDisabled: true
  });
  const tabPanelId = getTabPanelIdByValue(value);
  const isPressingRef = React28.useRef(false);
  const isMainButtonRef = React28.useRef(false);
  function onClick(event) {
    if (active || disabled2) {
      return;
    }
    onTabActivation(value, createChangeEventDetails(reason_parts_exports.none, event.nativeEvent, void 0, {
      activationDirection: "none"
    }));
  }
  function onFocus(event) {
    if (active) {
      return;
    }
    if (index > -1 && !disabled2) {
      setHighlightedTabIndex(index);
    }
    if (disabled2) {
      return;
    }
    if (activateOnFocus && (!isPressingRef.current || // keyboard or touch focus
    isPressingRef.current && isMainButtonRef.current)) {
      onTabActivation(value, createChangeEventDetails(reason_parts_exports.none, event.nativeEvent, void 0, {
        activationDirection: "none"
      }));
    }
  }
  function onPointerDown(event) {
    if (active || disabled2) {
      return;
    }
    isPressingRef.current = true;
    function handlePointerUp() {
      isPressingRef.current = false;
      isMainButtonRef.current = false;
    }
    if (!event.button || event.button === 0) {
      isMainButtonRef.current = true;
      const doc = ownerDocument(event.currentTarget);
      doc.addEventListener("pointerup", handlePointerUp, {
        once: true
      });
    }
  }
  const state = {
    disabled: disabled2,
    active,
    orientation
  };
  const element = useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef, compositeRef, tabElementRef],
    props: [compositeProps, {
      role: "tab",
      "aria-controls": tabPanelId,
      "aria-selected": active,
      id,
      onClick,
      onFocus,
      onPointerDown,
      [ACTIVE_COMPOSITE_ITEM]: active ? "" : void 0,
      onKeyDownCapture() {
        isNavigatingRef.current = true;
      }
    }, elementProps, getButtonProps]
  });
  return element;
});
if (true) TabsTab.displayName = "TabsTab";

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/indicator/TabsIndicator.js
var React29 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/indicator/prehydrationScript.min.js
var script = '!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-active]");if(!i)return;if(0===i.offsetWidth||0===e.offsetWidth)return;let o=0,n=0,h=0,l=0,r=0,f=0;function s(t){const e=getComputedStyle(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;return(Math.round(i)!==t.offsetWidth||Math.round(o)!==t.offsetHeight)&&(i=t.offsetWidth,o=t.offsetHeight),{width:i,height:o}}if(null!=i&&null!=e){const{width:t,height:c}=s(i),{width:u,height:d}=s(e),a=i.getBoundingClientRect(),g=e.getBoundingClientRect(),p=u>0?g.width/u:1,b=d>0?g.height/d:1;if(Math.abs(p)>Number.EPSILON&&Math.abs(b)>Number.EPSILON){const t=a.left-g.left,i=a.top-g.top;o=t/p+e.scrollLeft-e.clientLeft,h=i/b+e.scrollTop-e.clientTop}else o=i.offsetLeft,h=i.offsetTop;r=t,f=c,n=e.scrollWidth-o-r,l=e.scrollHeight-h-f}function c(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}c("left",o),c("right",n),c("top",h),c("bottom",l),c("width",r),c("height",f),r>0&&f>0&&t.removeAttribute("hidden")}();';

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/indicator/TabsIndicatorCssVars.js
var TabsIndicatorCssVars = /* @__PURE__ */ (function(TabsIndicatorCssVars2) {
  TabsIndicatorCssVars2["activeTabLeft"] = "--active-tab-left";
  TabsIndicatorCssVars2["activeTabRight"] = "--active-tab-right";
  TabsIndicatorCssVars2["activeTabTop"] = "--active-tab-top";
  TabsIndicatorCssVars2["activeTabBottom"] = "--active-tab-bottom";
  TabsIndicatorCssVars2["activeTabWidth"] = "--active-tab-width";
  TabsIndicatorCssVars2["activeTabHeight"] = "--active-tab-height";
  return TabsIndicatorCssVars2;
})({});

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/indicator/TabsIndicator.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var stateAttributesMapping = {
  ...tabsStateAttributesMapping,
  activeTabPosition: () => null,
  activeTabSize: () => null
};
var TabsIndicator = /* @__PURE__ */ React29.forwardRef(function TabIndicator(componentProps, forwardedRef) {
  const {
    className,
    render,
    renderBeforeHydration = false,
    style: styleProp,
    ...elementProps
  } = componentProps;
  const {
    nonce
  } = useCSPContext();
  const {
    getTabElementBySelectedValue,
    orientation,
    tabActivationDirection,
    value
  } = useTabsRootContext();
  const {
    tabsListElement,
    registerIndicatorUpdateListener
  } = useTabsListContext();
  const isHydrating = useIsHydrating();
  const rerender = useForcedRerendering();
  React29.useEffect(() => {
    return registerIndicatorUpdateListener(rerender);
  }, [registerIndicatorUpdateListener, rerender]);
  let left = 0;
  let right = 0;
  let top = 0;
  let bottom = 0;
  let width = 0;
  let height = 0;
  let isTabSelected = false;
  if (value != null && tabsListElement != null) {
    const activeTab = getTabElementBySelectedValue(value);
    isTabSelected = true;
    if (activeTab != null) {
      const {
        width: computedWidth,
        height: computedHeight
      } = getCssDimensions(activeTab);
      const {
        width: tabListWidth,
        height: tabListHeight
      } = getCssDimensions(tabsListElement);
      const tabRect = activeTab.getBoundingClientRect();
      const tabsListRect = tabsListElement.getBoundingClientRect();
      const scaleX = tabListWidth > 0 ? tabsListRect.width / tabListWidth : 1;
      const scaleY = tabListHeight > 0 ? tabsListRect.height / tabListHeight : 1;
      const hasNonZeroScale = Math.abs(scaleX) > Number.EPSILON && Math.abs(scaleY) > Number.EPSILON;
      if (hasNonZeroScale) {
        const tabLeftDelta = tabRect.left - tabsListRect.left;
        const tabTopDelta = tabRect.top - tabsListRect.top;
        left = tabLeftDelta / scaleX + tabsListElement.scrollLeft - tabsListElement.clientLeft;
        top = tabTopDelta / scaleY + tabsListElement.scrollTop - tabsListElement.clientTop;
      } else {
        left = activeTab.offsetLeft;
        top = activeTab.offsetTop;
      }
      width = computedWidth;
      height = computedHeight;
      right = tabsListElement.scrollWidth - left - width;
      bottom = tabsListElement.scrollHeight - top - height;
    }
  }
  const activeTabPosition = React29.useMemo(() => isTabSelected ? {
    left,
    right,
    top,
    bottom
  } : null, [left, right, top, bottom, isTabSelected]);
  const activeTabSize = React29.useMemo(() => isTabSelected ? {
    width,
    height
  } : null, [width, height, isTabSelected]);
  const style = React29.useMemo(() => {
    if (!isTabSelected) {
      return void 0;
    }
    return {
      [TabsIndicatorCssVars.activeTabLeft]: `${left}px`,
      [TabsIndicatorCssVars.activeTabRight]: `${right}px`,
      [TabsIndicatorCssVars.activeTabTop]: `${top}px`,
      [TabsIndicatorCssVars.activeTabBottom]: `${bottom}px`,
      [TabsIndicatorCssVars.activeTabWidth]: `${width}px`,
      [TabsIndicatorCssVars.activeTabHeight]: `${height}px`
    };
  }, [left, right, top, bottom, width, height, isTabSelected]);
  const displayIndicator = isTabSelected && width > 0 && height > 0;
  const state = {
    orientation,
    activeTabPosition,
    activeTabSize,
    tabActivationDirection
  };
  const element = useRenderElement("span", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      role: "presentation",
      style,
      hidden: !displayIndicator
      // do not display the indicator before the layout is settled
    }, elementProps, {
      suppressHydrationWarning: true
    }],
    stateAttributesMapping
  });
  if (value == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(React29.Fragment, {
    children: [element, isHydrating && renderBeforeHydration && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("script", {
      nonce,
      dangerouslySetInnerHTML: {
        __html: script
      },
      suppressHydrationWarning: true
    })]
  });
});
if (true) TabsIndicator.displayName = "TabsIndicator";

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/panel/TabsPanel.js
var React30 = __toESM(require_react(), 1);

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/panel/TabsPanelDataAttributes.js
var TabsPanelDataAttributes = (function(TabsPanelDataAttributes2) {
  TabsPanelDataAttributes2["index"] = "data-index";
  TabsPanelDataAttributes2["activationDirection"] = "data-activation-direction";
  TabsPanelDataAttributes2["orientation"] = "data-orientation";
  TabsPanelDataAttributes2["hidden"] = "data-hidden";
  TabsPanelDataAttributes2[TabsPanelDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
  TabsPanelDataAttributes2[TabsPanelDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
  return TabsPanelDataAttributes2;
})({});

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/panel/TabsPanel.js
var stateAttributesMapping2 = {
  ...tabsStateAttributesMapping,
  ...transitionStatusMapping
};
var TabsPanel = /* @__PURE__ */ React30.forwardRef(function TabPanel(componentProps, forwardedRef) {
  const {
    className,
    value,
    render,
    keepMounted = false,
    style,
    ...elementProps
  } = componentProps;
  const {
    value: selectedValue,
    getTabIdByPanelValue,
    orientation,
    tabActivationDirection,
    registerMountedTabPanel,
    unregisterMountedTabPanel
  } = useTabsRootContext();
  const id = useBaseUiId();
  const metadata = React30.useMemo(() => ({
    id,
    value
  }), [id, value]);
  const {
    ref: listItemRef,
    index
  } = useCompositeListItem({
    metadata
  });
  const open = value === selectedValue;
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(open);
  const hidden = !mounted;
  const correspondingTabId = getTabIdByPanelValue(value);
  const state = {
    hidden,
    orientation,
    tabActivationDirection,
    transitionStatus
  };
  const panelRef = React30.useRef(null);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, listItemRef, panelRef],
    props: [{
      "aria-labelledby": correspondingTabId,
      hidden,
      id,
      role: "tabpanel",
      tabIndex: open ? 0 : -1,
      inert: inertValue(!open),
      [TabsPanelDataAttributes.index]: index
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping2
  });
  useOpenChangeComplete({
    open,
    ref: panelRef,
    onComplete() {
      if (!open) {
        setMounted(false);
      }
    }
  });
  useIsoLayoutEffect(() => {
    if (hidden && !keepMounted) {
      return void 0;
    }
    if (id == null) {
      return void 0;
    }
    registerMountedTabPanel(value, id);
    return () => {
      unregisterMountedTabPanel(value, id);
    };
  }, [hidden, keepMounted, value, id, registerMountedTabPanel, unregisterMountedTabPanel]);
  const shouldRender = keepMounted || mounted;
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) TabsPanel.displayName = "TabsPanel";

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/tabs/list/TabsList.js
var React31 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var TabsList = /* @__PURE__ */ React31.forwardRef(function TabsList2(componentProps, forwardedRef) {
  const {
    activateOnFocus = false,
    className,
    loopFocus = true,
    render,
    style,
    ...elementProps
  } = componentProps;
  const {
    onValueChange,
    orientation,
    value,
    setTabMap,
    tabActivationDirection
  } = useTabsRootContext();
  const [highlightedTabIndex, setHighlightedTabIndex] = React31.useState(0);
  const [tabsListElement, setTabsListElement] = React31.useState(null);
  const indicatorUpdateListenersRef = React31.useRef(/* @__PURE__ */ new Set());
  const tabResizeObserverElementsRef = React31.useRef(/* @__PURE__ */ new Set());
  const resizeObserverRef = React31.useRef(null);
  const notifyIndicatorUpdateListeners = useStableCallback(() => {
    indicatorUpdateListenersRef.current.forEach((listener) => {
      listener();
    });
  });
  React31.useEffect(() => {
    if (typeof ResizeObserver === "undefined") {
      return void 0;
    }
    const resizeObserver = new ResizeObserver(() => {
      if (!indicatorUpdateListenersRef.current.size) {
        return;
      }
      notifyIndicatorUpdateListeners();
    });
    resizeObserverRef.current = resizeObserver;
    if (tabsListElement) {
      resizeObserver.observe(tabsListElement);
    }
    tabResizeObserverElementsRef.current.forEach((element) => {
      resizeObserver.observe(element);
    });
    return () => {
      resizeObserver.disconnect();
      resizeObserverRef.current = null;
    };
  }, [tabsListElement, notifyIndicatorUpdateListeners]);
  const registerIndicatorUpdateListener = useStableCallback((listener) => {
    indicatorUpdateListenersRef.current.add(listener);
    return () => {
      indicatorUpdateListenersRef.current.delete(listener);
    };
  });
  const registerTabResizeObserverElement = useStableCallback((element) => {
    tabResizeObserverElementsRef.current.add(element);
    resizeObserverRef.current?.observe(element);
    return () => {
      tabResizeObserverElementsRef.current.delete(element);
      resizeObserverRef.current?.unobserve(element);
    };
  });
  const onTabActivation = useStableCallback((newValue, eventDetails) => {
    if (newValue !== value) {
      onValueChange(newValue, eventDetails);
    }
  });
  const state = {
    orientation,
    tabActivationDirection
  };
  const defaultProps = {
    "aria-orientation": orientation === "vertical" ? "vertical" : void 0,
    role: "tablist"
  };
  const tabsListContextValue = React31.useMemo(() => ({
    activateOnFocus,
    highlightedTabIndex,
    registerIndicatorUpdateListener,
    registerTabResizeObserverElement,
    onTabActivation,
    setHighlightedTabIndex,
    tabsListElement
  }), [activateOnFocus, highlightedTabIndex, registerIndicatorUpdateListener, registerTabResizeObserverElement, onTabActivation, setHighlightedTabIndex, tabsListElement]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TabsListContext.Provider, {
    value: tabsListContextValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CompositeRoot, {
      render,
      className,
      style,
      state,
      refs: [forwardedRef, setTabsListElement],
      props: [defaultProps, elementProps],
      stateAttributesMapping: tabsStateAttributesMapping,
      highlightedIndex: highlightedTabIndex,
      enableHomeAndEndKeys: true,
      loopFocus,
      orientation,
      onHighlightedIndexChange: setHighlightedTabIndex,
      onMapChange: setTabMap,
      disabledIndices: EMPTY_ARRAY
    })
  });
});
if (true) TabsList.displayName = "TabsList";

// ../../../node_modules/.pnpm/@base-ui+react@1.4.1_@date-fns+tz@1.4.1_@types+react@18.3.28_date-fns@4.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/esm/use-render/useRender.js
function useRender(params) {
  return useRenderElement(params.defaultTagName ?? "div", params, params);
}

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/text/text.mjs
var import_element = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='4130d64bea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "4130d64bea");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._83ed8a8da5dd50ea__text{margin:0}._14437cfb77831647__heading-2xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-2xl,32px);font-size:var(--wpds-typography-font-size-2xl,32px);line-height:var(--wpds-typography-line-height-2xl,40px)}._14437cfb77831647__heading-2xl,._3c78b7fa9b4072dd__heading-xl{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499)}._3c78b7fa9b4072dd__heading-xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-xl,20px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-md,24px)}.aa58f227716bcde2__heading-lg{--_gcd-heading-font-size:var(--wpds-typography-font-size-lg,15px);font-size:var(--wpds-typography-font-size-lg,15px)}.aa58f227716bcde2__heading-lg,.fc4da56d8dfe52c4__heading-md{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-sm,20px)}.fc4da56d8dfe52c4__heading-md{--_gcd-heading-font-size:var(--wpds-typography-font-size-md,13px);font-size:var(--wpds-typography-font-size-md,13px)}.a9b78c7c82e8dff7__heading-sm{--_gcd-heading-font-size:var(--wpds-typography-font-size-xs,11px);font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-xs,16px);text-transform:uppercase}._305ff559e52180d5__body-xl{--_gcd-p-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-p-line-height:var(--wpds-typography-line-height-xl,32px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-xl,32px)}._305ff559e52180d5__body-xl,.ca1aa3fc2029e958__body-lg{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}.ca1aa3fc2029e958__body-lg{--_gcd-p-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-p-line-height:var(--wpds-typography-line-height-md,24px);font-size:var(--wpds-typography-font-size-lg,15px);line-height:var(--wpds-typography-line-height-md,24px)}._131101940be12424__body-md{--_gcd-p-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px)}._0e8d87a42c1f75fa__body-sm,._131101940be12424__body-md{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}._0e8d87a42c1f75fa__body-sm{--_gcd-p-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);font-size:var(--wpds-typography-font-size-sm,12px);line-height:var(--wpds-typography-line-height-xs,16px)}}'));
  document.head.appendChild(style);
}
var style_default = { "text": "_83ed8a8da5dd50ea__text", "heading-2xl": "_14437cfb77831647__heading-2xl", "heading-xl": "_3c78b7fa9b4072dd__heading-xl", "heading-lg": "aa58f227716bcde2__heading-lg", "heading-md": "fc4da56d8dfe52c4__heading-md", "heading-sm": "a9b78c7c82e8dff7__heading-sm", "body-xl": "_305ff559e52180d5__body-xl", "body-lg": "ca1aa3fc2029e958__body-lg", "body-md": "_131101940be12424__body-md", "body-sm": "_0e8d87a42c1f75fa__body-sm" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='1fb29d3a3c']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "1fb29d3a3c");
  style.appendChild(document.createTextNode("._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}"));
  document.head.appendChild(style);
}
var global_css_defense_default = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Text = (0, import_element.forwardRef)(function Text2({ variant = "body-md", render, className, ...props }, ref) {
  const element = useRender({
    render,
    defaultTagName: "span",
    ref,
    props: mergeProps(props, {
      className: clsx_default(
        style_default.text,
        variant.startsWith("heading-") && global_css_defense_default.heading,
        variant.startsWith("body-") && global_css_defense_default.p,
        style_default[variant],
        className
      )
    })
  });
  return element;
});

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/icon/icon.mjs
var import_element2 = __toESM(require_element(), 1);
var import_primitives = __toESM(require_primitives(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var Icon = (0, import_element2.forwardRef)(function Icon2({ icon, size = 24, ...restProps }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_primitives.SVG,
    {
      ref,
      fill: "currentColor",
      ...icon.props,
      ...restProps,
      width: size,
      height: size
    }
  );
});

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/card/index.mjs
var card_exports = {};
__export(card_exports, {
  Content: () => Content,
  FullBleed: () => FullBleed,
  Header: () => Header,
  Root: () => Root,
  Title: () => Title
});

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/card/root.mjs
var import_element3 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default2 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Root = (0, import_element3.forwardRef)(function Card({ render, ...restProps }, ref) {
  const mergedClassName = clsx_default(style_default2.root, resets_default["box-sizing"]);
  const element = useRender({
    defaultTagName: "div",
    render,
    ref,
    props: mergeProps({ className: mergedClassName }, restProps)
  });
  return element;
});

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/card/header.mjs
var import_element4 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default3 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Header = (0, import_element4.forwardRef)(
  function CardHeader({ render, ...props }, ref) {
    const element = useRender({
      defaultTagName: "div",
      render,
      ref,
      props: mergeProps({ className: style_default3.header }, props)
    });
    return element;
  }
);

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/card/content.mjs
var import_element5 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default4 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Content = (0, import_element5.forwardRef)(
  function CardContent({ render, ...props }, ref) {
    const element = useRender({
      defaultTagName: "div",
      render,
      ref,
      props: mergeProps({ className: style_default4.content }, props)
    });
    return element;
  }
);

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/card/full-bleed.mjs
var import_element6 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default5 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var FullBleed = (0, import_element6.forwardRef)(
  function CardFullBleed({ render, ...props }, ref) {
    const element = useRender({
      defaultTagName: "div",
      render,
      ref,
      props: mergeProps(
        { className: style_default5.fullbleed },
        props
      )
    });
    return element;
  }
);

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/card/title.mjs
var import_element7 = __toESM(require_element(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var DEFAULT_TAG = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {});
var Title = (0, import_element7.forwardRef)(
  function CardTitle({ render = DEFAULT_TAG, children, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Text,
      {
        ref,
        variant: "heading-lg",
        render,
        ...props,
        children
      }
    );
  }
);

// ../../../node_modules/.pnpm/@wordpress+icons@12.2.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.mjs
var import_primitives2 = __toESM(require_primitives(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var chevron_right_default = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_primitives2.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_primitives2.Path, { d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z" }) });

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs
var import_element8 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='b51ff41489']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "b51ff41489");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._19ce0419607e1896__stack{display:flex}}"));
  document.head.appendChild(style);
}
var style_default6 = { "stack": "_19ce0419607e1896__stack" };
var gapTokens = {
  xs: "var(--wpds-dimension-gap-xs, 4px)",
  sm: "var(--wpds-dimension-gap-sm, 8px)",
  md: "var(--wpds-dimension-gap-md, 12px)",
  lg: "var(--wpds-dimension-gap-lg, 16px)",
  xl: "var(--wpds-dimension-gap-xl, 24px)",
  "2xl": "var(--wpds-dimension-gap-2xl, 32px)",
  "3xl": "var(--wpds-dimension-gap-3xl, 40px)"
};
var Stack = (0, import_element8.forwardRef)(function Stack2({ direction, gap, align, justify, wrap, render, ...props }, ref) {
  const style = {
    gap: gap && gapTokens[gap],
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap
  };
  const element = useRender({
    render,
    ref,
    props: mergeProps(props, { style, className: style_default6.stack })
  });
  return element;
});

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/link/link.mjs
var import_element9 = __toESM(require_element(), 1);
var import_i18n = __toESM(require_i18n(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default2 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='2a5ab8f3a7']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "2a5ab8f3a7");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._08e8a2e44959f892__outset-ring--focus,._970d04df7376df67__outset-ring--focus-within-except-active,.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible,.cd83dfc2126a0846__outset-ring--focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active,.ecadb9e080e2dfa5__outset-ring--focus-parent-visible{@media not (prefers-reduced-motion){--_gcd-a-transition:outline 0.1s ease-out;transition:outline .1s ease-out}outline:0 solid #0000;outline-offset:1px}._08e8a2e44959f892__outset-ring--focus:focus,._970d04df7376df67__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible:focus-within:has(:focus-visible),.cd83dfc2126a0846__outset-ring--focus-within:focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible:focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active:focus:not(:active),:focus-visible .ecadb9e080e2dfa5__outset-ring--focus-parent-visible{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9))}}"));
  document.head.appendChild(style);
}
var focus_default = { "outset-ring--focus": "_08e8a2e44959f892__outset-ring--focus", "outset-ring--focus-except-active": "e25b2bdd7aa21721__outset-ring--focus-except-active", "outset-ring--focus-visible": "d0541bc9dd9dc7b6__outset-ring--focus-visible", "outset-ring--focus-within": "cd83dfc2126a0846__outset-ring--focus-within", "outset-ring--focus-within-except-active": "_970d04df7376df67__outset-ring--focus-within-except-active", "outset-ring--focus-within-visible": "c5cb3ee4bddaa8e4__outset-ring--focus-within-visible", "outset-ring--focus-parent-visible": "ecadb9e080e2dfa5__outset-ring--focus-parent-visible" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='221f9717dc']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "221f9717dc");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{.d4250949359b05ce__link{text-decoration-thickness:.5px;text-underline-offset:.2em}.c6055659b8e2cd2c__is-brand,.c6055659b8e2cd2c__is-brand:visited{--_gcd-a-color:var(--wpds-color-fg-interactive-brand,var(--wp-admin-theme-color,#3858e9));color:var(--wpds-color-fg-interactive-brand,var(--wp-admin-theme-color,#3858e9))}.c6055659b8e2cd2c__is-brand:active,.c6055659b8e2cd2c__is-brand:hover{--_gcd-a-color:var(--wpds-color-fg-interactive-brand-active,var(--wp-admin-theme-color,#3858e9));color:var(--wpds-color-fg-interactive-brand-active,var(--wp-admin-theme-color,#3858e9))}._92e0dfcaeee15b88__is-neutral,._92e0dfcaeee15b88__is-neutral:visited{--_gcd-a-color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);text-decoration-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d)}._92e0dfcaeee15b88__is-neutral:active,._92e0dfcaeee15b88__is-neutral:hover{--_gcd-a-color:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e);color:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e)}.cf122a9bf1035d42__is-unstyled{--_gcd-a-color:inherit;color:inherit;text-decoration:none}.e6ad7c380ee337fe__has-link-icon{text-decoration:none}._8dc7567f9ff415bf__link-contents{text-decoration:underline;text-decoration-color:inherit;text-decoration-thickness:.5px}._0cb411afac4c86c7__link-icon{font-weight:var(--wpds-typography-font-weight-regular,400);margin-inline-start:var(--wpds-dimension-padding-xs,4px)}._0cb411afac4c86c7__link-icon:after{content:"\\2197"}._0cb411afac4c86c7__link-icon:dir(rtl):after{content:"\\2196"}}'));
  document.head.appendChild(style);
}
var style_default7 = { "link": "d4250949359b05ce__link", "is-brand": "c6055659b8e2cd2c__is-brand", "is-neutral": "_92e0dfcaeee15b88__is-neutral", "is-unstyled": "cf122a9bf1035d42__is-unstyled", "has-link-icon": "e6ad7c380ee337fe__has-link-icon", "link-contents": "_8dc7567f9ff415bf__link-contents", "link-icon": "_0cb411afac4c86c7__link-icon" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='1fb29d3a3c']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "1fb29d3a3c");
  style.appendChild(document.createTextNode("._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}"));
  document.head.appendChild(style);
}
var global_css_defense_default2 = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Link = (0, import_element9.forwardRef)(function Link2({
  children,
  variant = "default",
  tone = "brand",
  openInNewTab = false,
  render,
  className,
  onClick,
  ...props
}, ref) {
  const isInternalAnchor = !!props.href?.startsWith("#");
  const handleClick = (event) => {
    if (openInNewTab && isInternalAnchor) {
      event.preventDefault();
    }
    onClick?.(event);
  };
  const element = useRender({
    render,
    defaultTagName: "a",
    ref,
    props: mergeProps(props, {
      className: clsx_default(
        global_css_defense_default2.a,
        resets_default2["box-sizing"],
        focus_default["outset-ring--focus"],
        variant !== "unstyled" && style_default7.link,
        variant !== "unstyled" && style_default7[`is-${tone}`],
        variant === "unstyled" && style_default7["is-unstyled"],
        openInNewTab && style_default7["has-link-icon"],
        className
      ),
      onClick: handleClick,
      target: openInNewTab ? "_blank" : void 0,
      children: openInNewTab ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: style_default7["link-contents"], children }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "span",
          {
            className: style_default7["link-icon"],
            role: "img",
            "aria-label": (
              /* translators: accessibility text appended to link text */
              (0, import_i18n.__)("(opens in a new tab)")
            )
          }
        )
      ] }) : children
    })
  });
  return element;
});

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/tabs/index.mjs
var tabs_exports = {};
__export(tabs_exports, {
  List: () => List,
  Panel: () => Panel,
  Root: () => Root2,
  Tab: () => Tab
});

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/tabs/list.mjs
var import_element10 = __toESM(require_element(), 1);
var import_compose = __toESM(require_compose(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='8c9d1dfa2f']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "8c9d1dfa2f");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._7313adbc8a112e90__tablist{--direction-factor:1;--direction-start:left;--direction-end:right;align-items:stretch;display:flex;overflow-inline:auto;overscroll-behavior-inline:none;position:relative;&:dir(rtl){--direction-factor:-1;--direction-start:right;--direction-end:left}&[data-orientation=horizontal]{--fade-width:4rem;--fade-gradient-base:#0000 0%,#000 var(--fade-width);--fade-gradient-composed:var(--fade-gradient-base),#000 60%,#0000 50%;width:fit-content;&._9f2ac729c68a735a__is-overflowing-first{mask-image:linear-gradient(to var(--direction-end),var(--fade-gradient-base))}&._81c799c1f3cdd261__is-overflowing-last{mask-image:linear-gradient(to var(--direction-start),var(--fade-gradient-base))}&._9f2ac729c68a735a__is-overflowing-first._81c799c1f3cdd261__is-overflowing-last{mask-image:linear-gradient(to right,var(--fade-gradient-composed)),linear-gradient(to left,var(--fade-gradient-composed))}&._59228b5227f38a99__is-minimal-variant{gap:1rem}}&[data-orientation=vertical]{flex-direction:column}}._1c37dcfaa1ad8cda__indicator{@media not (prefers-reduced-motion){transition-duration:.2s;transition-property:translate,width,height,border-radius,border-block;transition-timing-function:ease-out}outline:2px solid #0000;outline-offset:-1px;pointer-events:none;position:absolute;&[data-orientation=horizontal]{background-color:var(--wpds-color-stroke-interactive-neutral-strong,#6e6e6e);bottom:0;height:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px));left:0;translate:var(--active-tab-left) 0;width:var(--active-tab-width);z-index:1}&[data-orientation=vertical]{background-color:var(--wpds-color-bg-interactive-neutral-weak-active,#ededed);border-radius:var(--wpds-border-radius-sm,2px);height:var(--active-tab-height);left:50%;top:0;translate:-50% var(--active-tab-top);width:100%;z-index:0}._7313adbc8a112e90__tablist[data-select-on-move=true]:has(:focus-visible)\n		&[data-orientation=vertical]{border:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));box-sizing:border-box}}.a5fd8814f195aa5e__tab{align-items:center;background:#0000;border:none;border-radius:0;box-shadow:none;color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);cursor:var(--wpds-cursor-control,pointer);display:flex;flex:1 0 auto;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);font-weight:400;line-height:1.2;outline:none;padding:0;position:relative;white-space:nowrap;z-index:1;&[data-disabled]{color:var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d);cursor:default;@media (forced-colors:active){color:GrayText}}&:not([data-disabled]):is(:hover,:focus-visible){color:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e)}&:after{border-radius:var(--wpds-border-radius-sm,2px);opacity:0;outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));pointer-events:none;position:absolute;z-index:-1;@media not (prefers-reduced-motion){transition:opacity .1s linear}}&:focus-visible:after{opacity:1}[data-orientation=horizontal] &{height:48px;padding-inline:var(--wpds-dimension-padding-lg,16px);scroll-margin:24px;&:after{content:"";inset:var(--wpds-dimension-padding-md,12px)}}._59228b5227f38a99__is-minimal-variant[data-orientation=horizontal] &{padding-inline:0;&:after{inset-inline:round(up,var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)),1px)}}[data-orientation=vertical] &{min-height:40px;padding:var(--wpds-dimension-padding-sm,8px) var(--wpds-dimension-padding-md,12px)}[data-orientation=vertical][data-select-on-move=false] &:after{content:"";inset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}._5dfc77e6edd345d4__tab-children{align-items:center;display:flex;flex-grow:1;[data-orientation=horizontal] &{justify-content:center}[data-orientation=vertical] &{justify-content:start}}._4a20e969d15e5ac1__tab-chevron{flex-shrink:0;margin-inline-end:calc(var(--wpds-dimension-gap-xs, 4px)*-1);opacity:0;[data-orientation=horizontal] &{display:none}[role=tab]:is([aria-selected=true],:focus-visible,:hover) &{opacity:1}@media not (prefers-reduced-motion){[data-select-on-move=true]\n			[role=tab]:is([aria-selected=true])\n			&{transition:opacity .15s linear .15s}}&:dir(rtl){rotate:180deg}}._49f4bf715948892a__tabpanel{&:focus{box-shadow:none;outline:none}&:focus-visible{box-shadow:0 0 0 var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));outline:2px solid #0000;outline-offset:0}}}'));
  document.head.appendChild(style);
}
var style_default8 = { "tablist": "_7313adbc8a112e90__tablist", "is-overflowing-first": "_9f2ac729c68a735a__is-overflowing-first", "is-overflowing-last": "_81c799c1f3cdd261__is-overflowing-last", "is-minimal-variant": "_59228b5227f38a99__is-minimal-variant", "indicator": "_1c37dcfaa1ad8cda__indicator", "tab": "a5fd8814f195aa5e__tab", "tab-children": "_5dfc77e6edd345d4__tab-children", "tab-chevron": "_4a20e969d15e5ac1__tab-chevron", "tabpanel": "_49f4bf715948892a__tabpanel" };
var SCROLL_EPSILON = 1;
var List = (0, import_element10.forwardRef)(
  function TabList({
    children,
    variant = "default",
    className,
    activateOnFocus,
    ...otherProps
  }, forwardedRef) {
    const [listEl, setListEl] = (0, import_element10.useState)(null);
    const [overflow, setOverflow] = (0, import_element10.useState)({
      first: false,
      last: false,
      isScrolling: false
    });
    (0, import_element10.useEffect)(() => {
      if (!listEl) {
        return;
      }
      const measureOverflow = () => {
        const { scrollWidth, clientWidth, scrollLeft } = listEl;
        const maxScroll = Math.max(scrollWidth - clientWidth, 0);
        const direction = listEl.dir || (typeof window !== "undefined" ? window.getComputedStyle(listEl).direction : "ltr");
        const scrollFromStart = direction === "rtl" && scrollLeft < 0 ? (
          // In RTL layouts, scrollLeft is typically 0 at the visual "start"
          // (right edge) and becomes negative toward the "end" (left edge).
          // Normalize value for correct first/last detection logic.
          -scrollLeft
        ) : scrollLeft;
        setOverflow({
          first: scrollFromStart > SCROLL_EPSILON,
          last: scrollFromStart < maxScroll - SCROLL_EPSILON,
          isScrolling: scrollWidth > clientWidth
        });
      };
      const resizeObserver = new ResizeObserver(measureOverflow);
      resizeObserver.observe(listEl);
      let scrollTick = false;
      const throttleMeasureOverflowOnScroll = () => {
        if (!scrollTick) {
          requestAnimationFrame(() => {
            measureOverflow();
            scrollTick = false;
          });
          scrollTick = true;
        }
      };
      listEl.addEventListener(
        "scroll",
        throttleMeasureOverflowOnScroll,
        { passive: true }
      );
      measureOverflow();
      return () => {
        listEl.removeEventListener(
          "scroll",
          throttleMeasureOverflowOnScroll
        );
        resizeObserver.disconnect();
      };
    }, [listEl]);
    const mergedListRef = (0, import_compose.useMergeRefs)([
      forwardedRef,
      (el) => setListEl(el)
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      index_parts_exports.List,
      {
        ref: mergedListRef,
        activateOnFocus,
        "data-select-on-move": activateOnFocus ? "true" : "false",
        className: clsx_default(
          style_default8.tablist,
          overflow.first && style_default8["is-overflowing-first"],
          overflow.last && style_default8["is-overflowing-last"],
          style_default8[`is-${variant}-variant`],
          className
        ),
        ...otherProps,
        tabIndex: otherProps.tabIndex ?? (overflow.isScrolling ? -1 : void 0),
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(index_parts_exports.Indicator, { className: style_default8.indicator })
        ]
      }
    );
  }
);

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/tabs/panel.mjs
var import_element12 = __toESM(require_element(), 1);

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/tabs/context.mjs
var import_element11 = __toESM(require_element(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var VALIDATION_ENABLED = true;
var TabsValidationContext = VALIDATION_ENABLED ? (0, import_element11.createContext)(null) : null;
function useRegisterTabDev() {
  const context = (0, import_element11.useContext)(TabsValidationContext);
  (0, import_element11.useEffect)(() => {
    if (context) {
      return context.registerTab();
    }
    return void 0;
  }, [context]);
}
function useRegisterTabProd() {
}
var useRegisterTab = VALIDATION_ENABLED ? useRegisterTabDev : useRegisterTabProd;
function useRegisterPanelDev() {
  const context = (0, import_element11.useContext)(TabsValidationContext);
  (0, import_element11.useEffect)(() => {
    if (context) {
      return context.registerPanel();
    }
    return void 0;
  }, [context]);
}
function useRegisterPanelProd() {
}
var useRegisterPanel = VALIDATION_ENABLED ? useRegisterPanelDev : useRegisterPanelProd;
function TabsValidationProviderDev({
  children
}) {
  const tabCountRef = (0, import_element11.useRef)(0);
  const panelCountRef = (0, import_element11.useRef)(0);
  const validationScheduledRef = (0, import_element11.useRef)(null);
  const scheduleValidation = (0, import_element11.useCallback)(() => {
    if (validationScheduledRef.current) {
      clearTimeout(validationScheduledRef.current);
    }
    validationScheduledRef.current = setTimeout(() => {
      const tabCount = tabCountRef.current;
      const panelCount = panelCountRef.current;
      if (tabCount !== panelCount) {
        throw new Error(
          `Tabs: Tab/Panel count mismatch (${tabCount} Tabs, ${panelCount} Panels). Each Tab must be associated with exactly one Panel. Mismatched or missing associations can break screen reader navigation and violate WAI-ARIA Tabs pattern requirements.`
        );
      }
      validationScheduledRef.current = null;
    }, 0);
  }, []);
  const registerTab = (0, import_element11.useCallback)(() => {
    tabCountRef.current += 1;
    scheduleValidation();
    return () => {
      tabCountRef.current -= 1;
      scheduleValidation();
    };
  }, [scheduleValidation]);
  const registerPanel = (0, import_element11.useCallback)(() => {
    panelCountRef.current += 1;
    scheduleValidation();
    return () => {
      panelCountRef.current -= 1;
      scheduleValidation();
    };
  }, [scheduleValidation]);
  (0, import_element11.useEffect)(() => {
    return () => {
      if (validationScheduledRef.current) {
        clearTimeout(validationScheduledRef.current);
      }
    };
  }, []);
  const contextValue = (0, import_element11.useMemo)(
    () => ({
      registerTab,
      registerPanel
    }),
    [registerTab, registerPanel]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TabsValidationContext.Provider, { value: contextValue, children });
}
function TabsValidationProviderProd({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, { children });
}
var TabsValidationProvider = VALIDATION_ENABLED ? TabsValidationProviderDev : TabsValidationProviderProd;

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/tabs/panel.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='8c9d1dfa2f']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "8c9d1dfa2f");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._7313adbc8a112e90__tablist{--direction-factor:1;--direction-start:left;--direction-end:right;align-items:stretch;display:flex;overflow-inline:auto;overscroll-behavior-inline:none;position:relative;&:dir(rtl){--direction-factor:-1;--direction-start:right;--direction-end:left}&[data-orientation=horizontal]{--fade-width:4rem;--fade-gradient-base:#0000 0%,#000 var(--fade-width);--fade-gradient-composed:var(--fade-gradient-base),#000 60%,#0000 50%;width:fit-content;&._9f2ac729c68a735a__is-overflowing-first{mask-image:linear-gradient(to var(--direction-end),var(--fade-gradient-base))}&._81c799c1f3cdd261__is-overflowing-last{mask-image:linear-gradient(to var(--direction-start),var(--fade-gradient-base))}&._9f2ac729c68a735a__is-overflowing-first._81c799c1f3cdd261__is-overflowing-last{mask-image:linear-gradient(to right,var(--fade-gradient-composed)),linear-gradient(to left,var(--fade-gradient-composed))}&._59228b5227f38a99__is-minimal-variant{gap:1rem}}&[data-orientation=vertical]{flex-direction:column}}._1c37dcfaa1ad8cda__indicator{@media not (prefers-reduced-motion){transition-duration:.2s;transition-property:translate,width,height,border-radius,border-block;transition-timing-function:ease-out}outline:2px solid #0000;outline-offset:-1px;pointer-events:none;position:absolute;&[data-orientation=horizontal]{background-color:var(--wpds-color-stroke-interactive-neutral-strong,#6e6e6e);bottom:0;height:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px));left:0;translate:var(--active-tab-left) 0;width:var(--active-tab-width);z-index:1}&[data-orientation=vertical]{background-color:var(--wpds-color-bg-interactive-neutral-weak-active,#ededed);border-radius:var(--wpds-border-radius-sm,2px);height:var(--active-tab-height);left:50%;top:0;translate:-50% var(--active-tab-top);width:100%;z-index:0}._7313adbc8a112e90__tablist[data-select-on-move=true]:has(:focus-visible)\n		&[data-orientation=vertical]{border:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));box-sizing:border-box}}.a5fd8814f195aa5e__tab{align-items:center;background:#0000;border:none;border-radius:0;box-shadow:none;color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);cursor:var(--wpds-cursor-control,pointer);display:flex;flex:1 0 auto;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);font-weight:400;line-height:1.2;outline:none;padding:0;position:relative;white-space:nowrap;z-index:1;&[data-disabled]{color:var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d);cursor:default;@media (forced-colors:active){color:GrayText}}&:not([data-disabled]):is(:hover,:focus-visible){color:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e)}&:after{border-radius:var(--wpds-border-radius-sm,2px);opacity:0;outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));pointer-events:none;position:absolute;z-index:-1;@media not (prefers-reduced-motion){transition:opacity .1s linear}}&:focus-visible:after{opacity:1}[data-orientation=horizontal] &{height:48px;padding-inline:var(--wpds-dimension-padding-lg,16px);scroll-margin:24px;&:after{content:"";inset:var(--wpds-dimension-padding-md,12px)}}._59228b5227f38a99__is-minimal-variant[data-orientation=horizontal] &{padding-inline:0;&:after{inset-inline:round(up,var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)),1px)}}[data-orientation=vertical] &{min-height:40px;padding:var(--wpds-dimension-padding-sm,8px) var(--wpds-dimension-padding-md,12px)}[data-orientation=vertical][data-select-on-move=false] &:after{content:"";inset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}._5dfc77e6edd345d4__tab-children{align-items:center;display:flex;flex-grow:1;[data-orientation=horizontal] &{justify-content:center}[data-orientation=vertical] &{justify-content:start}}._4a20e969d15e5ac1__tab-chevron{flex-shrink:0;margin-inline-end:calc(var(--wpds-dimension-gap-xs, 4px)*-1);opacity:0;[data-orientation=horizontal] &{display:none}[role=tab]:is([aria-selected=true],:focus-visible,:hover) &{opacity:1}@media not (prefers-reduced-motion){[data-select-on-move=true]\n			[role=tab]:is([aria-selected=true])\n			&{transition:opacity .15s linear .15s}}&:dir(rtl){rotate:180deg}}._49f4bf715948892a__tabpanel{&:focus{box-shadow:none;outline:none}&:focus-visible{box-shadow:0 0 0 var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));outline:2px solid #0000;outline-offset:0}}}'));
  document.head.appendChild(style);
}
var style_default9 = { "tablist": "_7313adbc8a112e90__tablist", "is-overflowing-first": "_9f2ac729c68a735a__is-overflowing-first", "is-overflowing-last": "_81c799c1f3cdd261__is-overflowing-last", "is-minimal-variant": "_59228b5227f38a99__is-minimal-variant", "indicator": "_1c37dcfaa1ad8cda__indicator", "tab": "a5fd8814f195aa5e__tab", "tab-children": "_5dfc77e6edd345d4__tab-children", "tab-chevron": "_4a20e969d15e5ac1__tab-chevron", "tabpanel": "_49f4bf715948892a__tabpanel" };
var Panel = (0, import_element12.forwardRef)(
  function TabPanel2({ className, ...otherProps }, forwardedRef) {
    useRegisterPanel();
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      index_parts_exports.Panel,
      {
        ref: forwardedRef,
        className: clsx_default(style_default9.tabpanel, className),
        ...otherProps
      }
    );
  }
);

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/tabs/root.mjs
var import_element13 = __toESM(require_element(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var Root2 = (0, import_element13.forwardRef)(
  function TabsRoot3({ ...otherProps }, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TabsValidationProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(index_parts_exports.Root, { ref: forwardedRef, ...otherProps }) });
  }
);

// ../../../node_modules/.pnpm/@wordpress+ui@0.11.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/tabs/tab.mjs
var import_element14 = __toESM(require_element(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='8c9d1dfa2f']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "8c9d1dfa2f");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._7313adbc8a112e90__tablist{--direction-factor:1;--direction-start:left;--direction-end:right;align-items:stretch;display:flex;overflow-inline:auto;overscroll-behavior-inline:none;position:relative;&:dir(rtl){--direction-factor:-1;--direction-start:right;--direction-end:left}&[data-orientation=horizontal]{--fade-width:4rem;--fade-gradient-base:#0000 0%,#000 var(--fade-width);--fade-gradient-composed:var(--fade-gradient-base),#000 60%,#0000 50%;width:fit-content;&._9f2ac729c68a735a__is-overflowing-first{mask-image:linear-gradient(to var(--direction-end),var(--fade-gradient-base))}&._81c799c1f3cdd261__is-overflowing-last{mask-image:linear-gradient(to var(--direction-start),var(--fade-gradient-base))}&._9f2ac729c68a735a__is-overflowing-first._81c799c1f3cdd261__is-overflowing-last{mask-image:linear-gradient(to right,var(--fade-gradient-composed)),linear-gradient(to left,var(--fade-gradient-composed))}&._59228b5227f38a99__is-minimal-variant{gap:1rem}}&[data-orientation=vertical]{flex-direction:column}}._1c37dcfaa1ad8cda__indicator{@media not (prefers-reduced-motion){transition-duration:.2s;transition-property:translate,width,height,border-radius,border-block;transition-timing-function:ease-out}outline:2px solid #0000;outline-offset:-1px;pointer-events:none;position:absolute;&[data-orientation=horizontal]{background-color:var(--wpds-color-stroke-interactive-neutral-strong,#6e6e6e);bottom:0;height:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px));left:0;translate:var(--active-tab-left) 0;width:var(--active-tab-width);z-index:1}&[data-orientation=vertical]{background-color:var(--wpds-color-bg-interactive-neutral-weak-active,#ededed);border-radius:var(--wpds-border-radius-sm,2px);height:var(--active-tab-height);left:50%;top:0;translate:-50% var(--active-tab-top);width:100%;z-index:0}._7313adbc8a112e90__tablist[data-select-on-move=true]:has(:focus-visible)\n		&[data-orientation=vertical]{border:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));box-sizing:border-box}}.a5fd8814f195aa5e__tab{align-items:center;background:#0000;border:none;border-radius:0;box-shadow:none;color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);cursor:var(--wpds-cursor-control,pointer);display:flex;flex:1 0 auto;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);font-weight:400;line-height:1.2;outline:none;padding:0;position:relative;white-space:nowrap;z-index:1;&[data-disabled]{color:var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d);cursor:default;@media (forced-colors:active){color:GrayText}}&:not([data-disabled]):is(:hover,:focus-visible){color:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e)}&:after{border-radius:var(--wpds-border-radius-sm,2px);opacity:0;outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));pointer-events:none;position:absolute;z-index:-1;@media not (prefers-reduced-motion){transition:opacity .1s linear}}&:focus-visible:after{opacity:1}[data-orientation=horizontal] &{height:48px;padding-inline:var(--wpds-dimension-padding-lg,16px);scroll-margin:24px;&:after{content:"";inset:var(--wpds-dimension-padding-md,12px)}}._59228b5227f38a99__is-minimal-variant[data-orientation=horizontal] &{padding-inline:0;&:after{inset-inline:round(up,var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)),1px)}}[data-orientation=vertical] &{min-height:40px;padding:var(--wpds-dimension-padding-sm,8px) var(--wpds-dimension-padding-md,12px)}[data-orientation=vertical][data-select-on-move=false] &:after{content:"";inset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}._5dfc77e6edd345d4__tab-children{align-items:center;display:flex;flex-grow:1;[data-orientation=horizontal] &{justify-content:center}[data-orientation=vertical] &{justify-content:start}}._4a20e969d15e5ac1__tab-chevron{flex-shrink:0;margin-inline-end:calc(var(--wpds-dimension-gap-xs, 4px)*-1);opacity:0;[data-orientation=horizontal] &{display:none}[role=tab]:is([aria-selected=true],:focus-visible,:hover) &{opacity:1}@media not (prefers-reduced-motion){[data-select-on-move=true]\n			[role=tab]:is([aria-selected=true])\n			&{transition:opacity .15s linear .15s}}&:dir(rtl){rotate:180deg}}._49f4bf715948892a__tabpanel{&:focus{box-shadow:none;outline:none}&:focus-visible{box-shadow:0 0 0 var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));outline:2px solid #0000;outline-offset:0}}}'));
  document.head.appendChild(style);
}
var style_default10 = { "tablist": "_7313adbc8a112e90__tablist", "is-overflowing-first": "_9f2ac729c68a735a__is-overflowing-first", "is-overflowing-last": "_81c799c1f3cdd261__is-overflowing-last", "is-minimal-variant": "_59228b5227f38a99__is-minimal-variant", "indicator": "_1c37dcfaa1ad8cda__indicator", "tab": "a5fd8814f195aa5e__tab", "tab-children": "_5dfc77e6edd345d4__tab-children", "tab-chevron": "_4a20e969d15e5ac1__tab-chevron", "tabpanel": "_49f4bf715948892a__tabpanel" };
var Tab = (0, import_element14.forwardRef)(function Tab2({ className, children, ...otherProps }, forwardedRef) {
  useRegisterTab();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    index_parts_exports.Tab,
    {
      ref: forwardedRef,
      className: clsx_default(style_default10.tab, className),
      ...otherProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: style_default10["tab-children"], children }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Icon, { icon: chevron_right_default, className: style_default10["tab-chevron"] })
      ]
    }
  );
});

// routes/settings/stage.tsx
var import_react14 = __toESM(require_react());

// ../../js-packages/components/build/components/admin-page/index.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);

// ../../js-packages/api/index.jsx
var import_jetpack_config = __toESM(require_src(), 1);
var import_url = __toESM(require_url(), 1);
function createCustomError(name) {
  class CustomError extends Error {
    constructor(...args) {
      super(...args);
      this.name = name;
    }
  }
  return CustomError;
}
var JsonParseError = createCustomError("JsonParseError");
var JsonParseAfterRedirectError = createCustomError("JsonParseAfterRedirectError");
var Api404Error = createCustomError("Api404Error");
var Api404AfterRedirectError = createCustomError("Api404AfterRedirectError");
var FetchNetworkError = createCustomError("FetchNetworkError");
function JetpackRestApiClient(root, nonce) {
  let apiRoot = root, wpcomOriginApiUrl = root, headers = {
    "X-WP-Nonce": nonce
  }, getParams = {
    credentials: "same-origin",
    headers
  }, postParams = {
    method: "post",
    credentials: "same-origin",
    headers: Object.assign({}, headers, {
      "Content-type": "application/json"
    })
  }, cacheBusterCallback = addCacheBuster;
  const methods = {
    setApiRoot(newRoot) {
      apiRoot = newRoot;
    },
    /**
     * Sets API root for search endpoints.
     * They are routed through wpcom API for wpcom simple sites,
     * so we add `/wp-json/wpcom-origin/` to this path on wpcom.
     * For non-wpcom sites, this is the same as apiRoot.
     *
     * @param {string} newRoot - API root for search endpoints.
     */
    setWpcomOriginApiUrl(newRoot) {
      wpcomOriginApiUrl = newRoot;
    },
    setApiNonce(newNonce) {
      headers = {
        "X-WP-Nonce": newNonce
      };
      getParams = {
        credentials: "same-origin",
        headers
      };
      postParams = {
        method: "post",
        credentials: "same-origin",
        headers: Object.assign({}, headers, {
          "Content-type": "application/json"
        })
      };
    },
    setCacheBusterCallback: (callback) => {
      cacheBusterCallback = callback;
    },
    registerSite: (deprecated, redirectUri, from) => {
      const params = {};
      if ((0, import_jetpack_config.jetpackConfigHas)("consumer_slug")) {
        params.plugin_slug = (0, import_jetpack_config.jetpackConfigGet)("consumer_slug");
      }
      if (null !== redirectUri) {
        params.redirect_uri = redirectUri;
      }
      if (from) {
        params.from = from;
      }
      return postRequest(`${apiRoot}jetpack/v4/connection/register`, postParams, {
        body: JSON.stringify(params)
      }).then(checkStatus).then(parseJsonResponse);
    },
    fetchAuthorizationUrl: (redirectUri) => getRequest(
      (0, import_url.addQueryArgs)(`${apiRoot}jetpack/v4/connection/authorize_url`, {
        no_iframe: "1",
        redirect_uri: redirectUri
      }),
      getParams
    ).then(checkStatus).then(parseJsonResponse),
    fetchSiteConnectionData: () => getRequest(`${apiRoot}jetpack/v4/connection/data`, getParams).then(parseJsonResponse),
    fetchSiteConnectionStatus: () => getRequest(`${apiRoot}jetpack/v4/connection`, getParams).then(parseJsonResponse),
    fetchSiteConnectionTest: () => getRequest(`${apiRoot}jetpack/v4/connection/test`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchUserConnectionData: () => getRequest(`${apiRoot}jetpack/v4/connection/data`, getParams).then(parseJsonResponse),
    fetchUserTrackingSettings: () => getRequest(`${apiRoot}jetpack/v4/tracking/settings`, getParams).then(checkStatus).then(parseJsonResponse),
    updateUserTrackingSettings: (newSettings) => postRequest(`${apiRoot}jetpack/v4/tracking/settings`, postParams, {
      body: JSON.stringify(newSettings)
    }).then(checkStatus).then(parseJsonResponse),
    disconnectSite: () => postRequest(`${apiRoot}jetpack/v4/connection`, postParams, {
      body: JSON.stringify({ isActive: false })
    }).then(checkStatus).then(parseJsonResponse),
    fetchConnectUrl: () => getRequest(`${apiRoot}jetpack/v4/connection/url`, getParams).then(checkStatus).then(parseJsonResponse),
    unlinkUser: (force = false, options = {}) => {
      const params = {
        linked: false,
        force: !!force
      };
      if (options.disconnectAllUsers) {
        params["disconnect-all-users"] = true;
      }
      return postRequest(`${apiRoot}jetpack/v4/connection/user`, postParams, {
        body: JSON.stringify(params)
      }).then(checkStatus).then(parseJsonResponse);
    },
    reconnect: () => postRequest(`${apiRoot}jetpack/v4/connection/reconnect`, postParams).then(checkStatus).then(parseJsonResponse),
    fetchConnectedPlugins: () => getRequest(`${apiRoot}jetpack/v4/connection/plugins`, getParams).then(checkStatus).then(parseJsonResponse),
    setHasSeenWCConnectionModal: () => postRequest(`${apiRoot}jetpack/v4/seen-wc-connection-modal`, postParams).then(checkStatus).then(parseJsonResponse),
    fetchModules: () => getRequest(`${apiRoot}jetpack/v4/module/all`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchModule: (slug) => getRequest(`${apiRoot}jetpack/v4/module/${slug}`, getParams).then(checkStatus).then(parseJsonResponse),
    activateModule: (slug) => postRequest(`${apiRoot}jetpack/v4/module/${slug}/active`, postParams, {
      body: JSON.stringify({ active: true })
    }).then(checkStatus).then(parseJsonResponse),
    deactivateModule: (slug) => postRequest(`${apiRoot}jetpack/v4/module/${slug}/active`, postParams, {
      body: JSON.stringify({ active: false })
    }),
    updateModuleOptions: (slug, newOptionValues) => postRequest(`${apiRoot}jetpack/v4/module/${slug}`, postParams, {
      body: JSON.stringify(newOptionValues)
    }).then(checkStatus).then(parseJsonResponse),
    updateSettings: (newOptionValues) => postRequest(`${apiRoot}jetpack/v4/settings`, postParams, {
      body: JSON.stringify(newOptionValues)
    }).then(checkStatus).then(parseJsonResponse),
    getProtectCount: () => getRequest(`${apiRoot}jetpack/v4/module/protect/data`, getParams).then(checkStatus).then(parseJsonResponse),
    resetOptions: (options) => postRequest(`${apiRoot}jetpack/v4/options/${options}`, postParams, {
      body: JSON.stringify({ reset: true })
    }).then(checkStatus).then(parseJsonResponse),
    activateVaultPress: () => postRequest(`${apiRoot}jetpack/v4/plugins`, postParams, {
      body: JSON.stringify({ slug: "vaultpress", status: "active" })
    }).then(checkStatus).then(parseJsonResponse),
    getVaultPressData: () => getRequest(`${apiRoot}jetpack/v4/module/vaultpress/data`, getParams).then(checkStatus).then(parseJsonResponse),
    installPlugin: (slug, source) => {
      const props = { slug, status: "active" };
      if (source) {
        props.source = source;
      }
      return postRequest(`${apiRoot}jetpack/v4/plugins`, postParams, {
        body: JSON.stringify(props)
      }).then(checkStatus).then(parseJsonResponse);
    },
    activateAkismet: () => postRequest(`${apiRoot}jetpack/v4/plugins`, postParams, {
      body: JSON.stringify({ slug: "akismet", status: "active" })
    }).then(checkStatus).then(parseJsonResponse),
    getAkismetData: () => getRequest(`${apiRoot}jetpack/v4/module/akismet/data`, getParams).then(checkStatus).then(parseJsonResponse),
    checkAkismetKey: () => getRequest(`${apiRoot}jetpack/v4/module/akismet/key/check`, getParams).then(checkStatus).then(parseJsonResponse),
    checkAkismetKeyTyped: (apiKey) => postRequest(`${apiRoot}jetpack/v4/module/akismet/key/check`, postParams, {
      body: JSON.stringify({ api_key: apiKey })
    }).then(checkStatus).then(parseJsonResponse),
    getFeatureTypeStatus: (customContentType) => getRequest(`${apiRoot}jetpack/v4/feature/${customContentType}`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchStatsData: (range) => getRequest(statsDataUrl(range), getParams).then(checkStatus).then(parseJsonResponse).then(handleStatsResponseError),
    getPluginUpdates: () => getRequest(`${apiRoot}jetpack/v4/updates/plugins`, getParams).then(checkStatus).then(parseJsonResponse),
    getPlans: () => getRequest(`${apiRoot}jetpack/v4/plans`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchSettings: () => getRequest(`${apiRoot}jetpack/v4/settings`, getParams).then(checkStatus).then(parseJsonResponse),
    updateSetting: (updatedSetting) => postRequest(`${apiRoot}jetpack/v4/settings`, postParams, {
      body: JSON.stringify(updatedSetting)
    }).then(checkStatus).then(parseJsonResponse),
    fetchSiteData: () => getRequest(`${apiRoot}jetpack/v4/site`, getParams).then(checkStatus).then(parseJsonResponse).then((body) => JSON.parse(body.data)),
    fetchSiteFeatures: () => getRequest(`${apiRoot}jetpack/v4/site/features`, getParams).then(checkStatus).then(parseJsonResponse).then((body) => JSON.parse(body.data)),
    fetchSiteProducts: () => getRequest(`${apiRoot}jetpack/v4/site/products`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchSitePurchases: () => getRequest(`${apiRoot}jetpack/v4/site/purchases`, getParams).then(checkStatus).then(parseJsonResponse).then((body) => JSON.parse(body.data)),
    fetchSiteBenefits: () => getRequest(`${apiRoot}jetpack/v4/site/benefits`, getParams).then(checkStatus).then(parseJsonResponse).then((body) => JSON.parse(body.data)),
    fetchSiteDiscount: () => getRequest(`${apiRoot}jetpack/v4/site/discount`, getParams).then(checkStatus).then(parseJsonResponse).then((body) => body.data),
    fetchSetupQuestionnaire: () => getRequest(`${apiRoot}jetpack/v4/setup/questionnaire`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsData: () => getRequest(`${apiRoot}jetpack/v4/recommendations/data`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsProductSuggestions: () => getRequest(`${apiRoot}jetpack/v4/recommendations/product-suggestions`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsUpsell: () => getRequest(`${apiRoot}jetpack/v4/recommendations/upsell`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsConditional: () => getRequest(`${apiRoot}jetpack/v4/recommendations/conditional`, getParams).then(checkStatus).then(parseJsonResponse),
    saveRecommendationsData: (data) => postRequest(`${apiRoot}jetpack/v4/recommendations/data`, postParams, {
      body: JSON.stringify({ data })
    }).then(checkStatus),
    fetchProducts: () => getRequest(`${apiRoot}jetpack/v4/products`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRewindStatus: () => getRequest(`${apiRoot}jetpack/v4/rewind`, getParams).then(checkStatus).then(parseJsonResponse).then((body) => JSON.parse(body.data)),
    fetchScanStatus: () => getRequest(`${apiRoot}jetpack/v4/scan`, getParams).then(checkStatus).then(parseJsonResponse).then((body) => JSON.parse(body.data)),
    dismissJetpackNotice: (notice) => postRequest(`${apiRoot}jetpack/v4/notice/${notice}`, postParams, {
      body: JSON.stringify({ dismissed: true })
    }).then(checkStatus).then(parseJsonResponse),
    fetchPluginsData: () => getRequest(`${apiRoot}jetpack/v4/plugins`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchIntroOffers: () => getRequest(`${apiRoot}jetpack/v4/intro-offers`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchVerifySiteGoogleStatus: (keyringId) => {
      const request = keyringId !== null ? getRequest(`${apiRoot}jetpack/v4/verify-site/google/${keyringId}`, getParams) : getRequest(`${apiRoot}jetpack/v4/verify-site/google`, getParams);
      return request.then(checkStatus).then(parseJsonResponse);
    },
    verifySiteGoogle: (keyringId) => postRequest(`${apiRoot}jetpack/v4/verify-site/google`, postParams, {
      body: JSON.stringify({ keyring_id: keyringId })
    }).then(checkStatus).then(parseJsonResponse),
    submitSurvey: (surveyResponse) => postRequest(`${apiRoot}jetpack/v4/marketing/survey`, postParams, {
      body: JSON.stringify(surveyResponse)
    }).then(checkStatus).then(parseJsonResponse),
    saveSetupQuestionnaire: (props) => postRequest(`${apiRoot}jetpack/v4/setup/questionnaire`, postParams, {
      body: JSON.stringify(props)
    }).then(checkStatus).then(parseJsonResponse),
    updateLicensingError: (props) => postRequest(`${apiRoot}jetpack/v4/licensing/error`, postParams, {
      body: JSON.stringify(props)
    }).then(checkStatus).then(parseJsonResponse),
    updateLicenseKey: (license) => postRequest(`${apiRoot}jetpack/v4/licensing/set-license`, postParams, {
      body: JSON.stringify({ license })
    }).then(checkStatus).then(parseJsonResponse),
    getUserLicensesCounts: () => getRequest(`${apiRoot}jetpack/v4/licensing/user/counts`, getParams).then(checkStatus).then(parseJsonResponse),
    getUserLicenses: () => getRequest(`${apiRoot}jetpack/v4/licensing/user/licenses`, getParams).then(checkStatus).then(parseJsonResponse),
    updateLicensingActivationNoticeDismiss: (lastDetachedCount) => postRequest(`${apiRoot}jetpack/v4/licensing/user/activation-notice-dismiss`, postParams, {
      body: JSON.stringify({ last_detached_count: lastDetachedCount })
    }).then(checkStatus).then(parseJsonResponse),
    updateRecommendationsStep: (step) => postRequest(`${apiRoot}jetpack/v4/recommendations/step`, postParams, {
      body: JSON.stringify({ step })
    }).then(checkStatus),
    confirmIDCSafeMode: () => postRequest(`${apiRoot}jetpack/v4/identity-crisis/confirm-safe-mode`, postParams).then(
      checkStatus
    ),
    startIDCFresh: (redirectUri) => postRequest(`${apiRoot}jetpack/v4/identity-crisis/start-fresh`, postParams, {
      body: JSON.stringify({ redirect_uri: redirectUri })
    }).then(checkStatus).then(parseJsonResponse),
    migrateIDC: () => postRequest(`${apiRoot}jetpack/v4/identity-crisis/migrate`, postParams).then(
      checkStatus
    ),
    attachLicenses: (licenses) => postRequest(`${apiRoot}jetpack/v4/licensing/attach-licenses`, postParams, {
      body: JSON.stringify({ licenses })
    }).then(checkStatus).then(parseJsonResponse),
    fetchSearchPlanInfo: () => getRequest(`${wpcomOriginApiUrl}jetpack/v4/search/plan`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchSearchSettings: () => getRequest(`${wpcomOriginApiUrl}jetpack/v4/search/settings`, getParams).then(checkStatus).then(parseJsonResponse),
    updateSearchSettings: (newSettings) => postRequest(`${wpcomOriginApiUrl}jetpack/v4/search/settings`, postParams, {
      body: JSON.stringify(newSettings)
    }).then(checkStatus).then(parseJsonResponse),
    fetchSearchStats: () => getRequest(`${wpcomOriginApiUrl}jetpack/v4/search/stats`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchWafSettings: () => getRequest(`${apiRoot}jetpack/v4/waf`, getParams).then(checkStatus).then(parseJsonResponse),
    updateWafSettings: (newSettings) => postRequest(`${apiRoot}jetpack/v4/waf`, postParams, {
      body: JSON.stringify(newSettings)
    }).then(checkStatus).then(parseJsonResponse),
    fetchWordAdsSettings: () => getRequest(`${apiRoot}jetpack/v4/wordads/settings`, getParams).then(checkStatus).then(parseJsonResponse),
    updateWordAdsSettings: (newSettings) => postRequest(`${apiRoot}jetpack/v4/wordads/settings`, postParams, {
      body: JSON.stringify(newSettings)
    }),
    fetchSearchPricing: () => getRequest(`${wpcomOriginApiUrl}jetpack/v4/search/pricing`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchMigrationStatus: () => getRequest(`${apiRoot}jetpack/v4/migration/status`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchBackupUndoEvent: () => getRequest(`${apiRoot}jetpack/v4/site/backup/undo-event`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchBackupPreflightStatus: () => getRequest(`${apiRoot}jetpack/v4/site/backup/preflight`, getParams).then(checkStatus).then(parseJsonResponse)
  };
  function addCacheBuster(route) {
    const parts = route.split("?"), query = parts.length > 1 ? parts[1] : "", args = query.length ? query.split("&") : [];
    args.push("_cacheBuster=" + (/* @__PURE__ */ new Date()).getTime());
    return parts[0] + "?" + args.join("&");
  }
  function getRequest(route, params) {
    return fetch(cacheBusterCallback(route), params);
  }
  function postRequest(route, params, body) {
    return fetch(route, Object.assign({}, params, body)).catch(catchNetworkErrors);
  }
  function statsDataUrl(range) {
    let url = `${apiRoot}jetpack/v4/module/stats/data`;
    if (url.indexOf("?") !== -1) {
      url = url + `&range=${encodeURIComponent(range)}`;
    } else {
      url = url + `?range=${encodeURIComponent(range)}`;
    }
    return url;
  }
  function handleStatsResponseError(statsData) {
    const responseOk = statsData.general && statsData.general.response === void 0 || statsData.week && statsData.week.response === void 0 || statsData.month && statsData.month.response === void 0;
    return responseOk ? statsData : {};
  }
  Object.assign(this, methods);
}
var restApi = new JetpackRestApiClient();
var api_default = restApi;
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 404) {
    return new Promise(() => {
      const err = response.redirected ? new Api404AfterRedirectError(response.redirected) : new Api404Error();
      throw err;
    });
  }
  return response.json().catch((e) => catchJsonParseError(e)).then((json) => {
    const error2 = new Error(`${json.message} (Status ${response.status})`);
    error2.response = json;
    error2.name = "ApiError";
    throw error2;
  });
}
function parseJsonResponse(response) {
  return response.json().catch((e) => catchJsonParseError(e, response.redirected, response.url));
}
function catchJsonParseError(e, redirected, url) {
  const err = redirected ? new JsonParseAfterRedirectError(url) : new JsonParseError();
  throw err;
}
function catchNetworkErrors() {
  throw new FetchNetworkError();
}

// ../../../node_modules/.pnpm/@wordpress+ui@0.12.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/text/text.mjs
var import_element15 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='4130d64bea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "4130d64bea");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._83ed8a8da5dd50ea__text{margin:0}._14437cfb77831647__heading-2xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-2xl,32px);font-size:var(--wpds-typography-font-size-2xl,32px);line-height:var(--wpds-typography-line-height-2xl,40px)}._14437cfb77831647__heading-2xl,._3c78b7fa9b4072dd__heading-xl{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499)}._3c78b7fa9b4072dd__heading-xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-xl,20px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-md,24px)}.aa58f227716bcde2__heading-lg{--_gcd-heading-font-size:var(--wpds-typography-font-size-lg,15px);font-size:var(--wpds-typography-font-size-lg,15px)}.aa58f227716bcde2__heading-lg,.fc4da56d8dfe52c4__heading-md{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-sm,20px)}.fc4da56d8dfe52c4__heading-md{--_gcd-heading-font-size:var(--wpds-typography-font-size-md,13px);font-size:var(--wpds-typography-font-size-md,13px)}.a9b78c7c82e8dff7__heading-sm{--_gcd-heading-font-size:var(--wpds-typography-font-size-xs,11px);font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-xs,16px);text-transform:uppercase}._305ff559e52180d5__body-xl{--_gcd-p-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-p-line-height:var(--wpds-typography-line-height-xl,32px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-xl,32px)}._305ff559e52180d5__body-xl,.ca1aa3fc2029e958__body-lg{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}.ca1aa3fc2029e958__body-lg{--_gcd-p-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-p-line-height:var(--wpds-typography-line-height-md,24px);font-size:var(--wpds-typography-font-size-lg,15px);line-height:var(--wpds-typography-line-height-md,24px)}._131101940be12424__body-md{--_gcd-p-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px)}._0e8d87a42c1f75fa__body-sm,._131101940be12424__body-md{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}._0e8d87a42c1f75fa__body-sm{--_gcd-p-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);font-size:var(--wpds-typography-font-size-sm,12px);line-height:var(--wpds-typography-line-height-xs,16px)}}'));
  document.head.appendChild(style);
}
var style_default11 = { "text": "_83ed8a8da5dd50ea__text", "heading-2xl": "_14437cfb77831647__heading-2xl", "heading-xl": "_3c78b7fa9b4072dd__heading-xl", "heading-lg": "aa58f227716bcde2__heading-lg", "heading-md": "fc4da56d8dfe52c4__heading-md", "heading-sm": "a9b78c7c82e8dff7__heading-sm", "body-xl": "_305ff559e52180d5__body-xl", "body-lg": "ca1aa3fc2029e958__body-lg", "body-md": "_131101940be12424__body-md", "body-sm": "_0e8d87a42c1f75fa__body-sm" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='1fb29d3a3c']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "1fb29d3a3c");
  style.appendChild(document.createTextNode("._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}"));
  document.head.appendChild(style);
}
var global_css_defense_default3 = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Text3 = (0, import_element15.forwardRef)(function Text22({ variant = "body-md", render, className, ...props }, ref) {
  const element = useRender({
    render,
    defaultTagName: "span",
    ref,
    props: mergeProps(props, {
      className: clsx_default(
        style_default11.text,
        global_css_defense_default3.heading,
        global_css_defense_default3.p,
        style_default11[variant],
        className
      )
    })
  });
  return element;
});

// ../../../node_modules/.pnpm/@wordpress+ui@0.12.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs
var import_element16 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='b51ff41489']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "b51ff41489");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._19ce0419607e1896__stack{display:flex}}"));
  document.head.appendChild(style);
}
var style_default12 = { "stack": "_19ce0419607e1896__stack" };
var gapTokens2 = {
  xs: "var(--wpds-dimension-gap-xs, 4px)",
  sm: "var(--wpds-dimension-gap-sm, 8px)",
  md: "var(--wpds-dimension-gap-md, 12px)",
  lg: "var(--wpds-dimension-gap-lg, 16px)",
  xl: "var(--wpds-dimension-gap-xl, 24px)",
  "2xl": "var(--wpds-dimension-gap-2xl, 32px)",
  "3xl": "var(--wpds-dimension-gap-3xl, 40px)"
};
var Stack3 = (0, import_element16.forwardRef)(function Stack22({ direction, gap, align, justify, wrap, render, ...props }, ref) {
  const style = {
    gap: gap && gapTokens2[gap],
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap
  };
  const element = useRender({
    render,
    ref,
    props: mergeProps(props, { style, className: style_default12.stack })
  });
  return element;
});

// ../../../node_modules/.pnpm/@wordpress+admin-ui@2.0.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/admin-ui/build-module/navigable-region/index.mjs
var import_element17 = __toESM(require_element(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var NavigableRegion = (0, import_element17.forwardRef)(
  ({ children, className, ariaLabel, as: Tag = "div", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      Tag,
      {
        ref,
        className: clsx_default("admin-ui-navigable-region", className),
        "aria-label": ariaLabel,
        role: "region",
        tabIndex: "-1",
        ...props,
        children
      }
    );
  }
);
NavigableRegion.displayName = "NavigableRegion";
var navigable_region_default = NavigableRegion;

// ../../../node_modules/.pnpm/@wordpress+admin-ui@2.0.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/admin-ui/build-module/page/sidebar-toggle-slot.mjs
var import_components = __toESM(require_components(), 1);
var { Fill: SidebarToggleFill, Slot: SidebarToggleSlot } = (0, import_components.createSlotFill)("SidebarToggle");

// ../../../node_modules/.pnpm/@wordpress+admin-ui@2.0.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/admin-ui/build-module/page/header.mjs
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='aa9c241ccc']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "aa9c241ccc");
  style.appendChild(document.createTextNode("._956b6df0898efed0__page{text-wrap:pretty;background-color:var(--wpds-color-bg-surface-neutral,#fcfcfc);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-flow:column;height:100%;position:relative;z-index:1}._0625b55e82a0d93d__header{background:var(--wpds-color-bg-surface-neutral-strong,#fff);border-block-end:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);inset-block-start:0;padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px);position:sticky;z-index:1}.a43c44d5ae28b2e8__header-content{min-height:calc(var(--wpds-dimension-base, 4px)*8)}.b7cb5b9daf3a3b25__header-actions{flex-shrink:0}._8113be94e7caf73c__header-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._9a776c7f70996f61__header-visual{display:grid;flex-shrink:0;grid-template-columns:1fr;grid-template-rows:1fr;height:calc(var(--wpds-dimension-base, 4px)*6);width:calc(var(--wpds-dimension-base, 4px)*6);>*{grid-column:1/-1;grid-row:1/-1;max-height:100%;max-width:100%}}.d5e0920cd15d35bc__sidebar-toggle-slot:empty{display:none}._60fea2f6bf5319cd__header-subtitle{color:var(--wpds-color-fg-content-neutral-weak,#707070);padding-block-end:var(--wpds-dimension-padding-xs,4px)}.be5e57d029ec4036__content{display:flex;flex-direction:column;flex-grow:1;overflow:auto;&._128806d0b26e3a50__has-padding{padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px)}}"));
  document.head.appendChild(style);
}
var style_default13 = { "page": "_956b6df0898efed0__page", "header": "_0625b55e82a0d93d__header", "header-content": "a43c44d5ae28b2e8__header-content", "header-actions": "b7cb5b9daf3a3b25__header-actions", "header-title": "_8113be94e7caf73c__header-title", "header-visual": "_9a776c7f70996f61__header-visual", "sidebar-toggle-slot": "d5e0920cd15d35bc__sidebar-toggle-slot", "header-subtitle": "_60fea2f6bf5319cd__header-subtitle", "content": "be5e57d029ec4036__content", "has-padding": "_128806d0b26e3a50__has-padding" };
function Header2({
  headingLevel = 1,
  breadcrumbs,
  badges,
  visual,
  title,
  subTitle,
  actions,
  showSidebarToggle = true
}) {
  const HeadingTag = `h${headingLevel}`;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    Stack3,
    {
      direction: "column",
      className: style_default13.header,
      render: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("header", {}),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          Stack3,
          {
            className: style_default13["header-content"],
            direction: "row",
            gap: "sm",
            justify: "space-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Stack3, { direction: "row", gap: "sm", align: "center", justify: "start", children: [
                showSidebarToggle && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  SidebarToggleSlot,
                  {
                    bubblesVirtually: true,
                    className: style_default13["sidebar-toggle-slot"]
                  }
                ),
                visual && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "div",
                  {
                    className: style_default13["header-visual"],
                    "aria-hidden": "true",
                    children: visual
                  }
                ),
                title && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  Text3,
                  {
                    className: style_default13["header-title"],
                    render: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(HeadingTag, {}),
                    variant: "heading-lg",
                    children: title
                  }
                ),
                breadcrumbs,
                badges
              ] }),
              actions && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                Stack3,
                {
                  align: "center",
                  className: style_default13["header-actions"],
                  direction: "row",
                  gap: "sm",
                  children: actions
                }
              )
            ]
          }
        ),
        subTitle && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          Text3,
          {
            render: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", {}),
            variant: "body-md",
            className: style_default13["header-subtitle"],
            children: subTitle
          }
        )
      ]
    }
  );
}

// ../../../node_modules/.pnpm/@wordpress+admin-ui@2.0.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/admin-ui/build-module/page/index.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='aa9c241ccc']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "aa9c241ccc");
  style.appendChild(document.createTextNode("._956b6df0898efed0__page{text-wrap:pretty;background-color:var(--wpds-color-bg-surface-neutral,#fcfcfc);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-flow:column;height:100%;position:relative;z-index:1}._0625b55e82a0d93d__header{background:var(--wpds-color-bg-surface-neutral-strong,#fff);border-block-end:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);inset-block-start:0;padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px);position:sticky;z-index:1}.a43c44d5ae28b2e8__header-content{min-height:calc(var(--wpds-dimension-base, 4px)*8)}.b7cb5b9daf3a3b25__header-actions{flex-shrink:0}._8113be94e7caf73c__header-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._9a776c7f70996f61__header-visual{display:grid;flex-shrink:0;grid-template-columns:1fr;grid-template-rows:1fr;height:calc(var(--wpds-dimension-base, 4px)*6);width:calc(var(--wpds-dimension-base, 4px)*6);>*{grid-column:1/-1;grid-row:1/-1;max-height:100%;max-width:100%}}.d5e0920cd15d35bc__sidebar-toggle-slot:empty{display:none}._60fea2f6bf5319cd__header-subtitle{color:var(--wpds-color-fg-content-neutral-weak,#707070);padding-block-end:var(--wpds-dimension-padding-xs,4px)}.be5e57d029ec4036__content{display:flex;flex-direction:column;flex-grow:1;overflow:auto;&._128806d0b26e3a50__has-padding{padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px)}}"));
  document.head.appendChild(style);
}
var style_default14 = { "page": "_956b6df0898efed0__page", "header": "_0625b55e82a0d93d__header", "header-content": "a43c44d5ae28b2e8__header-content", "header-actions": "b7cb5b9daf3a3b25__header-actions", "header-title": "_8113be94e7caf73c__header-title", "header-visual": "_9a776c7f70996f61__header-visual", "sidebar-toggle-slot": "d5e0920cd15d35bc__sidebar-toggle-slot", "header-subtitle": "_60fea2f6bf5319cd__header-subtitle", "content": "be5e57d029ec4036__content", "has-padding": "_128806d0b26e3a50__has-padding" };
function Page({
  headingLevel,
  breadcrumbs,
  badges,
  visual,
  title,
  subTitle,
  children,
  className,
  actions,
  ariaLabel,
  hasPadding = false,
  showSidebarToggle = true
}) {
  const classes = clsx_default(style_default14.page, className);
  const effectiveAriaLabel = ariaLabel ?? (typeof title === "string" ? title : "");
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(navigable_region_default, { className: classes, ariaLabel: effectiveAriaLabel, children: [
    (title || breadcrumbs || badges || actions || visual) && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      Header2,
      {
        headingLevel,
        breadcrumbs,
        badges,
        visual,
        title,
        subTitle,
        actions,
        showSidebarToggle
      }
    ),
    hasPadding ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      {
        className: clsx_default(
          style_default14.content,
          style_default14["has-padding"]
        ),
        children
      }
    ) : children
  ] });
}
Page.SidebarToggleFill = SidebarToggleFill;
var page_default = Page;

// ../../js-packages/components/build/components/admin-page/index.js
var import_i18n5 = __toESM(require_i18n(), 1);
var import_react13 = __toESM(require_react(), 1);

// ../../js-packages/components/build/components/jetpack-footer/index.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);

// ../../js-packages/script-data/src/utils.ts
function getScriptData() {
  return window.JetpackScriptData;
}
function getAdminUrl(path = "") {
  return `${getScriptData()?.site.admin_url}${path}`;
}
function isWpcomPlatformSite() {
  return getScriptData()?.site?.is_wpcom_platform;
}

// ../../js-packages/components/build/components/jetpack-footer/index.js
var import_i18n4 = __toESM(require_i18n(), 1);

// ../../js-packages/components/build/components/jetpack-logo/index.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var import_i18n2 = __toESM(require_i18n(), 1);
var JetpackLogo = ({ logoColor = "#069e08", showText = true, className, height = 32, title, ...otherProps }) => {
  const viewBox = showText ? "0 0 118 32" : "0 0 32 32";
  const logoTitle = title ?? (0, import_i18n2.__)("Jetpack Logo", "jetpack-components");
  return (0, import_jsx_runtime18.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox,
    className: clsx_default("jetpack-logo", className),
    "aria-labelledby": "jetpack-logo-title",
    height,
    ...otherProps,
    // role="img" is required to prevent VoiceOver on Safari reading the content of the SVG
    role: "img",
    children: [
      (0, import_jsx_runtime18.jsx)("title", { id: "jetpack-logo-title", children: logoTitle }),
      (0, import_jsx_runtime18.jsx)("path", { fill: logoColor, d: "M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z" }),
      showText && (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
        (0, import_jsx_runtime18.jsx)("path", { d: "M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z" }),
        (0, import_jsx_runtime18.jsx)("path", { d: "M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z" }),
        (0, import_jsx_runtime18.jsx)("path", { d: "M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z" }),
        (0, import_jsx_runtime18.jsx)("path", { d: "M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z" }),
        (0, import_jsx_runtime18.jsx)("path", { d: "M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z" }),
        (0, import_jsx_runtime18.jsx)("path", { d: "M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z" }),
        (0, import_jsx_runtime18.jsx)("path", { d: "M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z" })
      ] })
    ]
  });
};
var jetpack_logo_default = JetpackLogo;

// ../../js-packages/components/build/tools/jp-redirect/index.js
function getRedirectUrl(source, args = {}) {
  const queryVars = {};
  let calypsoEnv;
  if (typeof window !== "undefined") {
    calypsoEnv = window?.JP_CONNECTION_INITIAL_STATE?.calypsoEnv;
  }
  if (source.search("https://") === 0) {
    const parsedUrl = new URL(source);
    source = `https://${parsedUrl.host}${parsedUrl.pathname}`;
    queryVars.url = encodeURIComponent(source);
  } else {
    queryVars.source = encodeURIComponent(source);
  }
  for (const argName in args) {
    queryVars[argName] = encodeURIComponent(args[argName]);
  }
  if (!Object.keys(queryVars).includes("site") && typeof jetpack_redirects !== "undefined" && Object.hasOwn(jetpack_redirects, "currentSiteRawUrl")) {
    queryVars.site = jetpack_redirects.currentBlogID ?? jetpack_redirects.currentSiteRawUrl;
  }
  if (calypsoEnv) {
    queryVars.calypso_env = calypsoEnv;
  }
  const queryString = Object.keys(queryVars).map((key) => key + "=" + queryVars[key]).join("&");
  return `https://jetpack.com/redirect/?` + queryString;
}

// ../../js-packages/components/build/components/automattic-byline-logo/index.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var import_i18n3 = __toESM(require_i18n(), 1);
var AutomatticBylineLogo = ({ title = (0, import_i18n3.__)("An Automattic Airline", "jetpack-components"), height = 7, className, ...otherProps }) => {
  return (0, import_jsx_runtime19.jsxs)("svg", { role: "img", x: "0", y: "0", viewBox: "0 0 935 38.2", enableBackground: "new 0 0 935 38.2", "aria-labelledby": "jp-automattic-byline-logo-title", height, className: clsx_default("jp-automattic-byline-logo", className), ...otherProps, children: [
    (0, import_jsx_runtime19.jsx)("desc", { id: "jp-automattic-byline-logo-title", children: title }),
    (0, import_jsx_runtime19.jsx)("path", { d: "M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z" }),
    (0, import_jsx_runtime19.jsx)("path", { d: "M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z" }),
    (0, import_jsx_runtime19.jsx)("path", { d: "M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z" })
  ] });
};
var automattic_byline_logo_default = AutomatticBylineLogo;

// ../../js-packages/components/build/components/layout/col/index.js
var import_react11 = __toESM(require_react(), 1);

// ../../js-packages/components/build/components/layout/col/style.module.scss
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='ca8d4354b2']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "ca8d4354b2");
  style.appendChild(document.createTextNode("@media (max-width:599px){._4ba5bd2b2f2b5576__col-sm-1{grid-column-end:span 1}._6601aeff7267b980__col-sm-1-start{grid-column-start:1}._5bb1b7c7c72a9aa6__col-sm-1-end{grid-column-end:2}.e3136223bc700634__col-sm-2{grid-column-end:span 2}.dbfa2617b17217b5__col-sm-2-start{grid-column-start:2}._7b2e3fcdbfd3f4a8__col-sm-2-end{grid-column-end:3}.fc29c562d5d68a53__col-sm-3{grid-column-end:span 3}._17b487ffaa90e203__col-sm-3-start{grid-column-start:3}.e202a4faf688b14a__col-sm-3-end{grid-column-end:4}.db735f94e6c07cdf__col-sm-4{grid-column-end:span 4}._5f188ed0ae3495f1__col-sm-4-start{grid-column-start:4}._1c1add806915f00b__col-sm-4-end{grid-column-end:5}}@media (min-width:600px) and (max-width:959px){._8a55498aa5ba1c68__col-md-1{grid-column-end:span 1}._1bb08dd9a4c8a05b__col-md-1-start{grid-column-start:1}._75f4b3edce3a3a7f__col-md-1-end{grid-column-end:2}._7d58c248693ee3da__col-md-2{grid-column-end:span 2}._9c758f342194a44b__col-md-2-start{grid-column-start:2}.d4fb859f9e402b49__col-md-2-end{grid-column-end:3}._36ecb0dc0e03b5cd__col-md-3{grid-column-end:span 3}.ecb6729408474cb0__col-md-3-start{grid-column-start:3}.f60c0b2e1de7f4d2__col-md-3-end{grid-column-end:4}.e83e8aab951ceafd__col-md-4{grid-column-end:span 4}._3ff393d18d24a6f9__col-md-4-start{grid-column-start:4}._8c916f820edf5c9a__col-md-4-end{grid-column-end:5}.add50d906e810cd7__col-md-5{grid-column-end:span 5}.eaee1d459d6c65a8__col-md-5-start{grid-column-start:5}._52b91e5acc7c0fb5__col-md-5-end{grid-column-end:6}.bdb2e2163d3f48b2__col-md-6{grid-column-end:span 6}.d162ed88c5243a25__col-md-6-start{grid-column-start:6}._56f06ff30ae4b667__col-md-6-end{grid-column-end:7}._7055975e64b5bc1c__col-md-7{grid-column-end:span 7}.b7a632e515cc02c3__col-md-7-start{grid-column-start:7}._2702ed2ffdd972f0__col-md-7-end{grid-column-end:8}.e112942946664bff__col-md-8{grid-column-end:span 8}._74f8b3c9df668ee1__col-md-8-start{grid-column-start:8}._02744f2fa412f1a5__col-md-8-end{grid-column-end:9}}@media (min-width:960px){._7492d6b66adf6525__col-lg-1{grid-column-end:span 1}._3052910ee63aa98c__col-lg-1-start{grid-column-start:1}._55c16f94f6225f6f__col-lg-1-end{grid-column-end:2}._2357b031a5c2367f__col-lg-2{grid-column-end:span 2}._58d48a9b5eac52c5__col-lg-2-start{grid-column-start:2}._13fe4aadaa45f8b6__col-lg-2-end{grid-column-end:3}._2d63faaef1635ae6__col-lg-3{grid-column-end:span 3}._7af735b2e21c9981__col-lg-3-start{grid-column-start:3}.eb14b434c4c2ce6b__col-lg-3-end{grid-column-end:4}._343bb33d58ec6261__col-lg-4{grid-column-end:span 4}._86610dd2e0590160__col-lg-4-start{grid-column-start:4}._59214f7888e4835f__col-lg-4-end{grid-column-end:5}._1b19570740cd5dd1__col-lg-5{grid-column-end:span 5}.c4cdc96581539d20__col-lg-5-start{grid-column-start:5}.b6f0a397f5d7b50e__col-lg-5-end{grid-column-end:6}._858f6c0679958dcc__col-lg-6{grid-column-end:span 6}._3e2c9d7329d847d8__col-lg-6-start{grid-column-start:6}._2fab0036d233adb8__col-lg-6-end{grid-column-end:7}.ea6fe8fce1a5b610__col-lg-7{grid-column-end:span 7}.e26bac844795a5b0__col-lg-7-start{grid-column-start:7}._3563f215b9315308__col-lg-7-end{grid-column-end:8}.bc54f8285d7491b3__col-lg-8{grid-column-end:span 8}.d266537f7cb842bb__col-lg-8-start{grid-column-start:8}.ac61c6f494f96a7f__col-lg-8-end{grid-column-end:9}.b70f1bde7c8fbb85__col-lg-9{grid-column-end:span 9}._9fb65645e14c0ff5__col-lg-9-start{grid-column-start:9}.d9cc3dbafa543391__col-lg-9-end{grid-column-end:10}.fa751d8b986a2731__col-lg-10{grid-column-end:span 10}._4bd1c6041a9d66c9__col-lg-10-start{grid-column-start:10}.a01f9529575f2f73__col-lg-10-end{grid-column-end:11}._59eecee10f639ece__col-lg-11{grid-column-end:span 11}.ecb646b1d30d4f4c__col-lg-11-start{grid-column-start:11}._776b4cdf8d377756__col-lg-11-end{grid-column-end:12}._3ec2a04de1c8625d__col-lg-12{grid-column-end:span 12}._1bd28a89dd7e4200__col-lg-12-start{grid-column-start:12}.dad15fd540d98df8__col-lg-12-end{grid-column-end:13}}"));
  document.head.appendChild(style);
}
var style_module_default = { "sm": "(max-width: 599px)", "md": "(min-width: 600px) and (max-width: 959px)", "lg": "(min-width: 960px)", "smcols": "4", "mdcols": "8", "lgcols": "12", "col-sm-1": "_4ba5bd2b2f2b5576__col-sm-1", "col-sm-1-start": "_6601aeff7267b980__col-sm-1-start", "col-sm-1-end": "_5bb1b7c7c72a9aa6__col-sm-1-end", "col-sm-2": "e3136223bc700634__col-sm-2", "col-sm-2-start": "dbfa2617b17217b5__col-sm-2-start", "col-sm-2-end": "_7b2e3fcdbfd3f4a8__col-sm-2-end", "col-sm-3": "fc29c562d5d68a53__col-sm-3", "col-sm-3-start": "_17b487ffaa90e203__col-sm-3-start", "col-sm-3-end": "e202a4faf688b14a__col-sm-3-end", "col-sm-4": "db735f94e6c07cdf__col-sm-4", "col-sm-4-start": "_5f188ed0ae3495f1__col-sm-4-start", "col-sm-4-end": "_1c1add806915f00b__col-sm-4-end", "col-md-1": "_8a55498aa5ba1c68__col-md-1", "col-md-1-start": "_1bb08dd9a4c8a05b__col-md-1-start", "col-md-1-end": "_75f4b3edce3a3a7f__col-md-1-end", "col-md-2": "_7d58c248693ee3da__col-md-2", "col-md-2-start": "_9c758f342194a44b__col-md-2-start", "col-md-2-end": "d4fb859f9e402b49__col-md-2-end", "col-md-3": "_36ecb0dc0e03b5cd__col-md-3", "col-md-3-start": "ecb6729408474cb0__col-md-3-start", "col-md-3-end": "f60c0b2e1de7f4d2__col-md-3-end", "col-md-4": "e83e8aab951ceafd__col-md-4", "col-md-4-start": "_3ff393d18d24a6f9__col-md-4-start", "col-md-4-end": "_8c916f820edf5c9a__col-md-4-end", "col-md-5": "add50d906e810cd7__col-md-5", "col-md-5-start": "eaee1d459d6c65a8__col-md-5-start", "col-md-5-end": "_52b91e5acc7c0fb5__col-md-5-end", "col-md-6": "bdb2e2163d3f48b2__col-md-6", "col-md-6-start": "d162ed88c5243a25__col-md-6-start", "col-md-6-end": "_56f06ff30ae4b667__col-md-6-end", "col-md-7": "_7055975e64b5bc1c__col-md-7", "col-md-7-start": "b7a632e515cc02c3__col-md-7-start", "col-md-7-end": "_2702ed2ffdd972f0__col-md-7-end", "col-md-8": "e112942946664bff__col-md-8", "col-md-8-start": "_74f8b3c9df668ee1__col-md-8-start", "col-md-8-end": "_02744f2fa412f1a5__col-md-8-end", "col-lg-1": "_7492d6b66adf6525__col-lg-1", "col-lg-1-start": "_3052910ee63aa98c__col-lg-1-start", "col-lg-1-end": "_55c16f94f6225f6f__col-lg-1-end", "col-lg-2": "_2357b031a5c2367f__col-lg-2", "col-lg-2-start": "_58d48a9b5eac52c5__col-lg-2-start", "col-lg-2-end": "_13fe4aadaa45f8b6__col-lg-2-end", "col-lg-3": "_2d63faaef1635ae6__col-lg-3", "col-lg-3-start": "_7af735b2e21c9981__col-lg-3-start", "col-lg-3-end": "eb14b434c4c2ce6b__col-lg-3-end", "col-lg-4": "_343bb33d58ec6261__col-lg-4", "col-lg-4-start": "_86610dd2e0590160__col-lg-4-start", "col-lg-4-end": "_59214f7888e4835f__col-lg-4-end", "col-lg-5": "_1b19570740cd5dd1__col-lg-5", "col-lg-5-start": "c4cdc96581539d20__col-lg-5-start", "col-lg-5-end": "b6f0a397f5d7b50e__col-lg-5-end", "col-lg-6": "_858f6c0679958dcc__col-lg-6", "col-lg-6-start": "_3e2c9d7329d847d8__col-lg-6-start", "col-lg-6-end": "_2fab0036d233adb8__col-lg-6-end", "col-lg-7": "ea6fe8fce1a5b610__col-lg-7", "col-lg-7-start": "e26bac844795a5b0__col-lg-7-start", "col-lg-7-end": "_3563f215b9315308__col-lg-7-end", "col-lg-8": "bc54f8285d7491b3__col-lg-8", "col-lg-8-start": "d266537f7cb842bb__col-lg-8-start", "col-lg-8-end": "ac61c6f494f96a7f__col-lg-8-end", "col-lg-9": "b70f1bde7c8fbb85__col-lg-9", "col-lg-9-start": "_9fb65645e14c0ff5__col-lg-9-start", "col-lg-9-end": "d9cc3dbafa543391__col-lg-9-end", "col-lg-10": "fa751d8b986a2731__col-lg-10", "col-lg-10-start": "_4bd1c6041a9d66c9__col-lg-10-start", "col-lg-10-end": "a01f9529575f2f73__col-lg-10-end", "col-lg-11": "_59eecee10f639ece__col-lg-11", "col-lg-11-start": "ecb646b1d30d4f4c__col-lg-11-start", "col-lg-11-end": "_776b4cdf8d377756__col-lg-11-end", "col-lg-12": "_3ec2a04de1c8625d__col-lg-12", "col-lg-12-start": "_1bd28a89dd7e4200__col-lg-12-start", "col-lg-12-end": "dad15fd540d98df8__col-lg-12-end" };

// ../../js-packages/components/build/components/layout/col/index.js
var smCols = Number(style_module_default.smcols);
var mdCols = Number(style_module_default.mdcols);
var lgCols = Number(style_module_default.lgcols);
var Col = (props) => {
  const { children, tagName = "div", className } = props;
  const sm = Math.min(smCols, typeof props.sm === "number" ? props.sm : smCols);
  const smStart = Math.min(smCols, typeof props.sm === "object" ? props.sm.start : 0);
  const smEnd = Math.min(smCols, typeof props.sm === "object" ? props.sm.end : 0);
  const md = Math.min(mdCols, typeof props.md === "number" ? props.md : mdCols);
  const mdStart = Math.min(mdCols, typeof props.md === "object" ? props.md.start : 0);
  const mdEnd = Math.min(mdCols, typeof props.md === "object" ? props.md.end : 0);
  const lg = Math.min(lgCols, typeof props.lg === "number" ? props.lg : lgCols);
  const lgStart = Math.min(lgCols, typeof props.lg === "object" ? props.lg.start : 0);
  const lgEnd = Math.min(lgCols, typeof props.lg === "object" ? props.lg.end : 0);
  const colClassName = clsx_default(className, {
    // SM
    [style_module_default[`col-sm-${sm}`]]: !(smStart && smEnd),
    [style_module_default[`col-sm-${smStart}-start`]]: smStart > 0,
    [style_module_default[`col-sm-${smEnd}-end`]]: smEnd > 0,
    // MD
    [style_module_default[`col-md-${md}`]]: !(mdStart && mdEnd),
    [style_module_default[`col-md-${mdStart}-start`]]: mdStart > 0,
    [style_module_default[`col-md-${mdEnd}-end`]]: mdEnd > 0,
    // LG
    [style_module_default[`col-lg-${lg}`]]: !(lgStart && lgEnd),
    [style_module_default[`col-lg-${lgStart}-start`]]: lgStart > 0,
    [style_module_default[`col-lg-${lgEnd}-end`]]: lgEnd > 0
  });
  return (0, import_react11.createElement)(tagName, {
    className: colClassName
  }, children);
};
var col_default = Col;

// ../../js-packages/components/build/components/layout/container/index.js
var import_react12 = __toESM(require_react(), 1);

// ../../js-packages/components/build/components/layout/container/style.module.scss
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='58647a5875']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "58647a5875");
  style.appendChild(document.createTextNode(".a7346e2a366ff62a__container{--max-container-width:1040px;--vertical-gutter:24px;--horizontal-spacing:8px;column-gap:var(--vertical-gutter);display:grid;margin:0 auto;width:100%}@media (max-width:599px){.a7346e2a366ff62a__container{grid-template-columns:repeat(4,minmax(0,1fr));max-width:calc(var(--max-container-width) + 32px);padding:0 16px}}@media (min-width:600px) and (max-width:959px){.a7346e2a366ff62a__container{grid-template-columns:repeat(8,minmax(0,1fr));max-width:calc(var(--max-container-width) + 36px);padding:0 18px}}@media (min-width:960px){.a7346e2a366ff62a__container{grid-template-columns:repeat(12,minmax(0,1fr));max-width:calc(var(--max-container-width) + 48px);padding:0 24px}}.a7346e2a366ff62a__container._14c87126b79195d3__fluid{max-width:none;padding:unset}"));
  document.head.appendChild(style);
}
var style_module_default2 = { "sm": "(max-width: 599px)", "md": "(min-width: 600px) and (max-width: 959px)", "lg": "(min-width: 960px)", "container": "a7346e2a366ff62a__container", "fluid": "_14c87126b79195d3__fluid" };

// ../../js-packages/components/build/components/layout/container/index.js
var Container = ({ children, fluid = false, tagName = "div", className, horizontalGap = 1, horizontalSpacing = 1 }, ref) => {
  const containerStyle = (0, import_react12.useMemo)(() => {
    const padding = `calc( var(--horizontal-spacing) * ${horizontalSpacing} )`;
    const rowGap = `calc( var(--horizontal-spacing) * ${horizontalGap} )`;
    return {
      paddingTop: padding,
      paddingBottom: padding,
      rowGap
    };
  }, [horizontalGap, horizontalSpacing]);
  const containerClassName = clsx_default(className, style_module_default2.container, {
    [style_module_default2.fluid]: fluid
  });
  return (0, import_react12.createElement)(tagName, {
    className: containerClassName,
    style: containerStyle,
    ref
  }, children);
};
var container_default = (0, import_react12.forwardRef)(Container);

// ../../js-packages/components/build/components/jetpack-footer/style.scss
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='4f2b158f89']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "4f2b158f89");
  style.appendChild(document.createTextNode(':root{--wpds-border-radius-lg:8px;--wpds-border-radius-md:4px;--wpds-border-radius-sm:2px;--wpds-border-radius-xs:1px;--wpds-border-width-focus:2px;--wpds-border-width-lg:8px;--wpds-border-width-md:4px;--wpds-border-width-sm:2px;--wpds-border-width-xs:1px;--wpds-color-bg-interactive-brand-strong:#3858e9;--wpds-color-bg-interactive-brand-strong-active:#2e49d9;--wpds-color-bg-interactive-brand-weak:#0000;--wpds-color-bg-interactive-brand-weak-active:#e6eaf4;--wpds-color-bg-interactive-error:#0000;--wpds-color-bg-interactive-error-active:#fff6f5;--wpds-color-bg-interactive-error-strong:#cc1818;--wpds-color-bg-interactive-error-strong-active:#b90000;--wpds-color-bg-interactive-error-weak:#0000;--wpds-color-bg-interactive-error-weak-active:#f6e6e3;--wpds-color-bg-interactive-neutral-strong:#2d2d2d;--wpds-color-bg-interactive-neutral-strong-active:#1e1e1e;--wpds-color-bg-interactive-neutral-strong-disabled:#e6e6e6;--wpds-color-bg-interactive-neutral-weak:#0000;--wpds-color-bg-interactive-neutral-weak-active:#ededed;--wpds-color-bg-interactive-neutral-weak-disabled:#0000;--wpds-color-bg-surface-brand:#ecf0fa;--wpds-color-bg-surface-caution:#fee995;--wpds-color-bg-surface-caution-weak:#fff9ca;--wpds-color-bg-surface-error:#f6e6e3;--wpds-color-bg-surface-error-weak:#fff6f5;--wpds-color-bg-surface-info:#deebfa;--wpds-color-bg-surface-info-weak:#f3f9ff;--wpds-color-bg-surface-neutral:#fcfcfc;--wpds-color-bg-surface-neutral-strong:#fff;--wpds-color-bg-surface-neutral-weak:#f4f4f4;--wpds-color-bg-surface-success:#c6f7cd;--wpds-color-bg-surface-success-weak:#ebffed;--wpds-color-bg-surface-warning:#fde6be;--wpds-color-bg-surface-warning-weak:#fff7e1;--wpds-color-bg-thumb-brand:#3858e9;--wpds-color-bg-thumb-brand-active:#3858e9;--wpds-color-bg-thumb-neutral-disabled:#dbdbdb;--wpds-color-bg-thumb-neutral-weak:#8d8d8d;--wpds-color-bg-thumb-neutral-weak-active:#6e6e6e;--wpds-color-bg-track-neutral:#dbdbdb;--wpds-color-bg-track-neutral-weak:#e4e4e4;--wpds-color-fg-content-caution:#281d00;--wpds-color-fg-content-caution-weak:#826a00;--wpds-color-fg-content-error:#470000;--wpds-color-fg-content-error-weak:#cc1818;--wpds-color-fg-content-info:#001b4f;--wpds-color-fg-content-info-weak:#006bd7;--wpds-color-fg-content-neutral:#1e1e1e;--wpds-color-fg-content-neutral-weak:#707070;--wpds-color-fg-content-success:#002900;--wpds-color-fg-content-success-weak:#008030;--wpds-color-fg-content-warning:#2e1900;--wpds-color-fg-content-warning-weak:#926300;--wpds-color-fg-interactive-brand:#3858e9;--wpds-color-fg-interactive-brand-active:#3858e9;--wpds-color-fg-interactive-brand-strong:#eff0f2;--wpds-color-fg-interactive-brand-strong-active:#eff0f2;--wpds-color-fg-interactive-error:#cc1818;--wpds-color-fg-interactive-error-active:#cc1818;--wpds-color-fg-interactive-error-strong:#f2efef;--wpds-color-fg-interactive-error-strong-active:#f2efef;--wpds-color-fg-interactive-neutral:#1e1e1e;--wpds-color-fg-interactive-neutral-active:#1e1e1e;--wpds-color-fg-interactive-neutral-disabled:#8d8d8d;--wpds-color-fg-interactive-neutral-strong:#f0f0f0;--wpds-color-fg-interactive-neutral-strong-active:#f0f0f0;--wpds-color-fg-interactive-neutral-strong-disabled:#8d8d8d;--wpds-color-fg-interactive-neutral-weak:#707070;--wpds-color-fg-interactive-neutral-weak-disabled:#8d8d8d;--wpds-color-stroke-focus-brand:#3858e9;--wpds-color-stroke-interactive-brand:#3858e9;--wpds-color-stroke-interactive-brand-active:#2337c8;--wpds-color-stroke-interactive-error:#cc1818;--wpds-color-stroke-interactive-error-active:#9d0000;--wpds-color-stroke-interactive-error-strong:#cc1818;--wpds-color-stroke-interactive-neutral:#8d8d8d;--wpds-color-stroke-interactive-neutral-active:#6e6e6e;--wpds-color-stroke-interactive-neutral-disabled:#dbdbdb;--wpds-color-stroke-interactive-neutral-strong:#6e6e6e;--wpds-color-stroke-surface-brand:#a3b1d4;--wpds-color-stroke-surface-brand-strong:#3858e9;--wpds-color-stroke-surface-error:#daa39b;--wpds-color-stroke-surface-error-strong:#cc1818;--wpds-color-stroke-surface-info:#9fbcdc;--wpds-color-stroke-surface-info-strong:#006bd7;--wpds-color-stroke-surface-neutral:#dbdbdb;--wpds-color-stroke-surface-neutral-strong:#8d8d8d;--wpds-color-stroke-surface-neutral-weak:#e4e4e4;--wpds-color-stroke-surface-success:#8ac894;--wpds-color-stroke-surface-success-strong:#008030;--wpds-color-stroke-surface-warning:#d0b481;--wpds-color-stroke-surface-warning-strong:#926300;--wpds-cursor-control:pointer;--wpds-dimension-base:4px;--wpds-dimension-gap-2xl:32px;--wpds-dimension-gap-3xl:40px;--wpds-dimension-gap-lg:16px;--wpds-dimension-gap-md:12px;--wpds-dimension-gap-sm:8px;--wpds-dimension-gap-xl:24px;--wpds-dimension-gap-xs:4px;--wpds-dimension-padding-2xl:24px;--wpds-dimension-padding-3xl:32px;--wpds-dimension-padding-lg:16px;--wpds-dimension-padding-md:12px;--wpds-dimension-padding-sm:8px;--wpds-dimension-padding-xl:20px;--wpds-dimension-padding-xs:4px;--wpds-dimension-surface-width-2xl:960px;--wpds-dimension-surface-width-lg:560px;--wpds-dimension-surface-width-md:400px;--wpds-dimension-surface-width-sm:320px;--wpds-dimension-surface-width-xl:720px;--wpds-dimension-surface-width-xs:240px;--wpds-elevation-lg:0 5px 15px 0 #00000014,0 15px 27px 0 #00000012,0 30px 36px 0 #0000000a,0 50px 43px 0 #00000005;--wpds-elevation-md:0 2px 3px 0 #0000000d,0 4px 5px 0 #0000000a,0 12px 12px 0 #00000008,0 16px 16px 0 #00000005;--wpds-elevation-sm:0 1px 2px 0 #0000000d,0 2px 3px 0 #0000000a,0 6px 6px 0 #00000008,0 8px 8px 0 #00000005;--wpds-elevation-xs:0 1px 1px 0 #00000008,0 1px 2px 0 #00000005,0 3px 3px 0 #00000005,0 4px 4px 0 #00000003;--wpds-typography-font-family-body:-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;--wpds-typography-font-family-heading:-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;--wpds-typography-font-family-mono:"Menlo","Consolas",monaco,monospace;--wpds-typography-font-size-2xl:32px;--wpds-typography-font-size-lg:15px;--wpds-typography-font-size-md:13px;--wpds-typography-font-size-sm:12px;--wpds-typography-font-size-xl:20px;--wpds-typography-font-size-xs:11px;--wpds-typography-font-weight-medium:499;--wpds-typography-font-weight-regular:400;--wpds-typography-line-height-2xl:40px;--wpds-typography-line-height-lg:28px;--wpds-typography-line-height-md:24px;--wpds-typography-line-height-sm:20px;--wpds-typography-line-height-xl:32px;--wpds-typography-line-height-xs:16px}[data-wpds-theme-provider-id][data-wpds-density=compact]{--wpds-dimension-gap-2xl:24px;--wpds-dimension-gap-3xl:32px;--wpds-dimension-gap-lg:12px;--wpds-dimension-gap-md:8px;--wpds-dimension-gap-sm:4px;--wpds-dimension-gap-xl:20px;--wpds-dimension-gap-xs:4px;--wpds-dimension-padding-2xl:20px;--wpds-dimension-padding-3xl:24px;--wpds-dimension-padding-lg:12px;--wpds-dimension-padding-md:8px;--wpds-dimension-padding-sm:4px;--wpds-dimension-padding-xl:16px;--wpds-dimension-padding-xs:4px}[data-wpds-theme-provider-id][data-wpds-density=comfortable]{--wpds-dimension-gap-2xl:40px;--wpds-dimension-gap-3xl:48px;--wpds-dimension-gap-lg:20px;--wpds-dimension-gap-md:16px;--wpds-dimension-gap-sm:12px;--wpds-dimension-gap-xl:32px;--wpds-dimension-gap-xs:8px;--wpds-dimension-padding-2xl:32px;--wpds-dimension-padding-3xl:40px;--wpds-dimension-padding-lg:20px;--wpds-dimension-padding-md:16px;--wpds-dimension-padding-sm:12px;--wpds-dimension-padding-xl:24px;--wpds-dimension-padding-xs:8px}[data-wpds-theme-provider-id][data-wpds-density=default]{--wpds-dimension-base:4px;--wpds-dimension-gap-2xl:32px;--wpds-dimension-gap-3xl:40px;--wpds-dimension-gap-lg:16px;--wpds-dimension-gap-md:12px;--wpds-dimension-gap-sm:8px;--wpds-dimension-gap-xl:24px;--wpds-dimension-gap-xs:4px;--wpds-dimension-padding-2xl:24px;--wpds-dimension-padding-3xl:32px;--wpds-dimension-padding-lg:16px;--wpds-dimension-padding-md:12px;--wpds-dimension-padding-sm:8px;--wpds-dimension-padding-xl:20px;--wpds-dimension-padding-xs:4px;--wpds-dimension-surface-width-2xl:960px;--wpds-dimension-surface-width-lg:560px;--wpds-dimension-surface-width-md:400px;--wpds-dimension-surface-width-sm:320px;--wpds-dimension-surface-width-xl:720px;--wpds-dimension-surface-width-xs:240px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){:root{--wpds-border-width-focus:1.5px}}.jetpack-footer{border-top:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral-weak,#e0e0e0);box-sizing:border-box;font-size:var(--wpds-typography-font-size-md,13px);padding:var(--wpds-dimension-padding-xl,20px) var(--wpds-dimension-padding-2xl,24px);width:100%}.jetpack-footer .jetpack-footer__menu-item:any-link,.jetpack-footer .jetpack-footer__menu-item[role=button]{color:var(--wpds-color-fg-interactive-neutral-weak,#707070);cursor:pointer;text-decoration:none}.jetpack-footer .jetpack-footer__menu-item:hover{text-decoration:underline}.jetpack-footer>ul{list-style:none;margin:0;padding:0}.jetpack-footer>ul>li{margin:0}.jetpack-footer__logo{flex-shrink:0}@media (min-width:480px){a.jetpack-footer__a8c{margin-inline-start:auto}}a.jetpack-footer__a8c svg{fill:var(--wpds-color-fg-interactive-neutral-weak,#707070)}'));
  document.head.appendChild(style);
}

// ../../js-packages/components/build/components/jetpack-footer/index.js
var JetpackFooter = ({ className, menu, ...otherProps }) => {
  let items = [];
  if (!isWpcomPlatformSite() && !window?.JetpackNetworkAdminData) {
    items = [
      {
        label: (0, import_i18n4.__)("Products", "jetpack-components"),
        href: getAdminUrl("admin.php?page=my-jetpack#/products")
      },
      {
        label: (0, import_i18n4.__)("Help", "jetpack-components"),
        href: getAdminUrl("admin.php?page=my-jetpack#/help")
      },
      ...items
    ];
  }
  if (menu) {
    items = [...items, ...menu];
  }
  return (0, import_jsx_runtime20.jsxs)(Stack, { render: (0, import_jsx_runtime20.jsx)("footer", {}), className: clsx_default("jetpack-footer", className), "aria-label": (0, import_i18n4.__)("Jetpack", "jetpack-components"), role: "contentinfo", direction: "row", justify: "flex-start", align: "center", wrap: "wrap", gap: "xl", ...otherProps, children: [
    (0, import_jsx_runtime20.jsxs)(Stack, { className: "jetpack-footer__logo", direction: "row", gap: "sm", align: "center", children: [
      (0, import_jsx_runtime20.jsx)(jetpack_logo_default, { showText: false, height: 16, "aria-hidden": "true" }),
      (0, import_jsx_runtime20.jsx)(Text, { variant: "body-md", children: "Jetpack" })
    ] }),
    (0, import_jsx_runtime20.jsx)(Stack, { render: (0, import_jsx_runtime20.jsx)("ul", {}), direction: "row", gap: "lg", wrap: "wrap", children: items.map((item) => {
      const isButton = item.role === "button";
      return (0, import_jsx_runtime20.jsx)("li", { children: (0, import_jsx_runtime20.jsx)(Text, { variant: "body-md", className: "jetpack-footer__menu-item", render: isButton ? (0, import_jsx_runtime20.jsx)(Link, { render: (0, import_jsx_runtime20.jsx)("span", {}), tone: "neutral", variant: "default", role: item.role, tabIndex: 0, onClick: item.onClick || void 0, onKeyDown: item.onKeyDown || void 0 }) : (0, import_jsx_runtime20.jsx)(Link, { tone: "neutral", variant: "default", href: item.href || "", title: item.title || "", role: item.role, onClick: item.onClick || void 0, onKeyDown: item.onKeyDown || void 0 }), children: item.label }) }, item.label);
    }) }),
    (0, import_jsx_runtime20.jsx)("a", { className: "jetpack-footer__a8c", href: getRedirectUrl("a8c-about"), rel: "noopener noreferrer", target: "_blank", children: (0, import_jsx_runtime20.jsx)(automattic_byline_logo_default, { height: 8 }) })
  ] });
};
var jetpack_footer_default = JetpackFooter;

// ../../js-packages/components/build/components/admin-page/style.module.scss
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='af1a0361f9']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "af1a0361f9");
  style.appendChild(document.createTextNode("._3576fd25ffa54499__admin-page{margin-left:-20px}@media (max-width:782px){._3576fd25ffa54499__admin-page{margin-left:-10px}}._3576fd25ffa54499__admin-page.cdf2fab8060d83ed__background{background-color:var(--jp-white)}._3576fd25ffa54499__admin-page.eb848a1bf79d4668__without-bottom-border .jp-admin-page__page>header{border-bottom:none}._3576fd25ffa54499__admin-page .jp-admin-page__page>header{position:relative;z-index:1}._3576fd25ffa54499__admin-page .jp-admin-page__page{clear:both}._3576fd25ffa54499__admin-page .jp-admin-page__page>header [aria-hidden=true]{place-items:center}._3576fd25ffa54499__admin-page ._075579478b1a25d8__admin-page-header{align-items:center;display:flex;gap:8px}._3576fd25ffa54499__admin-page ._4d34c6d280829167__admin-page-footer{box-sizing:border-box}._3576fd25ffa54499__admin-page ._83a64a19225dc9f1__sandbox-domain-badge{background:#d63638;color:#fff;cursor:pointer;font-size:9px;font-weight:700;letter-spacing:.2em;text-shadow:none;text-transform:uppercase}.jetpack-admin-page #dolly{background-color:#fff}"));
  document.head.appendChild(style);
}
var style_module_default3 = { "admin-page": "_3576fd25ffa54499__admin-page", "background": "cdf2fab8060d83ed__background", "without-bottom-border": "eb848a1bf79d4668__without-bottom-border", "admin-page-header": "_075579478b1a25d8__admin-page-header", "admin-page-footer": "_4d34c6d280829167__admin-page-footer", "sandbox-domain-badge": "_83a64a19225dc9f1__sandbox-domain-badge" };

// ../../js-packages/components/build/components/admin-page/index.js
var AdminPage = ({ children, className, showHeader = true, showFooter = true, showBackground = true, sandboxedDomain = "", apiRoot = "", apiNonce = "", optionalMenuItems, header, title, subTitle, logo, actions, breadcrumbs, tabs, showBottomBorder = true, unwrapped = false }) => {
  (0, import_react13.useEffect)(() => {
    api_default.setApiRoot(apiRoot);
    api_default.setApiNonce(apiNonce);
  }, [apiRoot, apiNonce]);
  const rootClassName = clsx_default(style_module_default3["admin-page"], "jp-admin-page", className, {
    [style_module_default3.background]: showBackground,
    [style_module_default3["without-bottom-border"]]: tabs || !showBottomBorder
  });
  const testConnection = (0, import_react13.useCallback)(async () => {
    try {
      const connectionTest = await api_default.fetchSiteConnectionTest();
      window.alert(connectionTest.message);
    } catch (error2) {
      window.alert((0, import_i18n5.sprintf)(
        /* translators: %s: an error message. */
        (0, import_i18n5.__)("There was an error testing Jetpack. Error: %s", "jetpack-components"),
        error2.message
      ));
    }
  }, []);
  if (showHeader && (title || breadcrumbs)) {
    return (0, import_jsx_runtime21.jsx)("div", { className: rootClassName, children: (0, import_jsx_runtime21.jsxs)(page_default, { className: "jp-admin-page__page", visual: logo || (0, import_jsx_runtime21.jsx)(jetpack_logo_default, { showText: false, height: 20 }), breadcrumbs, title, subTitle, actions, showSidebarToggle: false, children: [tabs, unwrapped ? children : (0, import_jsx_runtime21.jsx)(container_default, { fluid: true, horizontalSpacing: 0, children: (0, import_jsx_runtime21.jsx)(col_default, { children }) }), showFooter && (0, import_jsx_runtime21.jsx)(jetpack_footer_default, { menu: optionalMenuItems })] }) });
  }
  return (0, import_jsx_runtime21.jsxs)("div", { className: rootClassName, children: [showHeader && (0, import_jsx_runtime21.jsx)(container_default, { horizontalSpacing: 5, children: (0, import_jsx_runtime21.jsxs)(col_default, { className: clsx_default(style_module_default3["admin-page-header"], "jp-admin-page-header"), children: [header ? header : (0, import_jsx_runtime21.jsx)(jetpack_logo_default, {}), sandboxedDomain && (0, import_jsx_runtime21.jsx)("code", {
    className: style_module_default3["sandbox-domain-badge"],
    onClick: testConnection,
    onKeyDown: testConnection,
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    role: "button",
    tabIndex: 0,
    title: `Sandboxing via ${sandboxedDomain}. Click to test connection.`,
    children: "API Sandboxed"
  })] }) }), (0, import_jsx_runtime21.jsx)(container_default, { fluid: true, horizontalSpacing: 0, children: (0, import_jsx_runtime21.jsx)(col_default, { children }) }), showFooter && (0, import_jsx_runtime21.jsx)(jetpack_footer_default, { menu: optionalMenuItems })] });
};
var admin_page_default = AdminPage;

// src/dashboard/components/DashboardLayout/index.tsx
var import_element18 = __toESM(require_element());
var import_i18n7 = __toESM(require_i18n());
import { useNavigate } from "@wordpress/route";

// src/dashboard/components/DashboardTabs/index.tsx
var import_i18n6 = __toESM(require_i18n());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var TAB_PATHS = {
  overview: "/",
  library: "/library",
  settings: "/settings"
};
function DashboardTabs() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "jp-admin-page-tabs", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(tabs_exports.List, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(tabs_exports.Tab, { value: "overview", children: (0, import_i18n6.__)("Overview", "jetpack-videopress-pkg") }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(tabs_exports.Tab, { value: "library", children: (0, import_i18n6.__)("Library", "jetpack-videopress-pkg") }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(tabs_exports.Tab, { value: "settings", children: (0, import_i18n6.__)("Settings", "jetpack-videopress-pkg") })
  ] }) });
}

// src/dashboard/components/DashboardLayout/style.scss
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e41fc09c45']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e41fc09c45");
  style.appendChild(document.createTextNode("body.jetpack_page_jetpack-videopress #wpcontent{padding-left:0}body.jetpack_page_jetpack-videopress #screen-meta-links,body.jetpack_page_jetpack-videopress #wpfooter{display:none}body.jetpack_page_jetpack-videopress #wpbody-content{bottom:0;box-sizing:border-box;display:flex;flex-direction:column;left:160px;overflow:hidden;padding-bottom:0;position:fixed;right:0;top:var(--wp-admin-bar-height,32px);width:auto}body.jetpack_page_jetpack-videopress.folded #wpbody-content{left:36px}@media (max-width:960px){body.jetpack_page_jetpack-videopress.auto-fold #wpbody-content{left:36px}}@media (min-width:961px){body.jetpack_page_jetpack-videopress.is-nav-unification:not(.folded) #wpbody-content{left:272px}}body.jetpack_page_jetpack-videopress #wpbody-content :has(.jp-admin-page){display:flex;flex:1 1 auto;flex-direction:column;min-height:0;min-width:0}body.jetpack_page_jetpack-videopress .jp-admin-page{display:flex;flex:1 1 auto;flex-direction:column;margin-left:0;min-height:0;min-width:0;overflow:visible}body.jetpack_page_jetpack-videopress .jp-admin-page__page{display:flex;flex:1 1 auto;flex-direction:column;min-height:0;min-width:0}body.jetpack_page_jetpack-videopress .jp-admin-page__page>header{flex-shrink:0}body.jetpack_page_jetpack-videopress .jp-admin-page__page:has(.jp-admin-page-tabs)>header{border-bottom:none;padding-bottom:0}body.jetpack_page_jetpack-videopress .jp-admin-page__page>:not(header):not(.jetpack-footer){display:flex;flex:1 1 auto;flex-direction:column;min-height:0;min-width:0;overflow:auto}body.jetpack_page_jetpack-videopress .jp-admin-page__page>:not(header):not(.jetpack-footer)>*{display:flex;flex:1 1 auto;flex-direction:column;min-height:0;min-width:0}body.jetpack_page_jetpack-videopress .jetpack-footer{flex-shrink:0}body.jetpack_page_jetpack-videopress .jp-admin-page-tabs{background:var(--wpds-color-bg-surface-neutral-strong,#fff);border-bottom:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);position:sticky;top:0;z-index:10}body.jetpack_page_jetpack-videopress .jp-admin-page-tabs [role=tab]{padding-inline:var(--wpds-dimension-padding-2xl,24px)}@media (max-width:782px){body.jetpack_page_jetpack-videopress #wpbody-content,body.jetpack_page_jetpack-videopress.auto-fold #wpbody-content,body.jetpack_page_jetpack-videopress.folded #wpbody-content{left:0;top:var(--wp-admin-bar-height,46px)}body.jetpack_page_jetpack-videopress .jp-admin-page{margin-left:0}}body.jetpack_page_jetpack-videopress :has(>[role=tabpanel]){display:flex;flex:1 1 0;flex-direction:column;min-height:0}body.jetpack_page_jetpack-videopress [role=tabpanel]{display:flex;flex:1 1 0;flex-direction:column;min-height:0}body.jetpack_page_jetpack-videopress .jp-admin-page-tabs [role=tablist]{padding-inline-start:8px}body.jetpack_page_jetpack-videopress .jp-admin-page-tabs [role=tab]{padding-inline:var(--wpds-dimension-padding-lg,16px)}"));
  document.head.appendChild(style);
}

// src/dashboard/components/DashboardLayout/index.tsx
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var TAB_VALUES = ["overview", "library", "settings"];
function DashboardLayout({ activeTab, children, actions, hideFooter }) {
  const navigate = useNavigate();
  const onValueChange = (0, import_element18.useCallback)(
    (next) => {
      const target = TAB_PATHS[next];
      if (target) {
        navigate({ href: target });
      }
    },
    [navigate]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    admin_page_default,
    {
      title: "VideoPress",
      subTitle: (0, import_i18n7.__)("Professional quality, ad-free video hosting.", "jetpack-videopress-pkg"),
      actions,
      showFooter: !hideFooter,
      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(tabs_exports.Root, { value: activeTab, onValueChange, children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(DashboardTabs, {}),
        TAB_VALUES.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(tabs_exports.Panel, { value: tab, children: activeTab === tab ? children : null }, tab))
      ] })
    }
  );
}

// routes/settings/style.scss
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='8de46fc804']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "8de46fc804");
  style.appendChild(document.createTextNode(".jp-videopress-settings{margin-inline:auto;max-width:660px;padding-block:32px}.jp-videopress-settings>*{width:100%}"));
  document.head.appendChild(style);
}

// routes/settings/stage.tsx
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var Stage = () => {
  const [restrict, setRestrict] = (0, import_react14.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DashboardLayout, { activeTab: "settings", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "jp-videopress-settings", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(card_exports.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(card_exports.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(card_exports.Title, { children: (0, import_i18n8.__)("Restrict video access", "jetpack-videopress-pkg") }) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(card_exports.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      import_components2.ToggleControl,
      {
        __nextHasNoMarginBottom: true,
        label: (0, import_i18n8.__)("Only logged-in users can play your videos", "jetpack-videopress-pkg"),
        checked: restrict,
        onChange: setRestrict
      }
    ) })
  ] }) }) });
};
export {
  Stage as stage
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
