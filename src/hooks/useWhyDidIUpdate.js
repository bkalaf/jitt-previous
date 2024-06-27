"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWhyDidIUpdate = exports.useLogger = void 0;
const remote_1 = require("@electron/remote");
const react_1 = require("react");
function useLogger() {
    const log = (0, react_1.useCallback)((...args) => {
        console.log(...args);
        remote_1.process.stdout.write(args.join(','));
    }, []);
    return log;
}
exports.useLogger = useLogger;
function useWhyDidIUpdate(name, props) {
    // Get a mutable ref object where we can store props ...
    // ... for comparison next time this hook runs.
    const previousProps = (0, react_1.useRef)({});
    (0, react_1.useEffect)(() => {
        if (previousProps.current) {
            // Get all keys from previous and current props
            const allKeys = Object.keys(Object.assign(Object.assign({}, previousProps.current), props));
            // Use this object to keep track of changed props
            const changesObj = {};
            allKeys.forEach((key) => {
                // If previous is different from current
                if (previousProps.current[key] !== props[key]) {
                    // Add to changesObj
                    changesObj[key] = {
                        from: previousProps.current[key],
                        to: props[key]
                    };
                }
            });
            if (Object.keys(changesObj).length) {
                // process.stdout.write(name);
                // process.stdout.write(JSON.stringify(changesObj, null, '\t'));
                // console.log('[why-did-you-update]', name, changesObj)
            }
        }
        previousProps.current = props;
    });
}
exports.useWhyDidIUpdate = useWhyDidIUpdate;
//# sourceMappingURL=useWhyDidIUpdate.js.map