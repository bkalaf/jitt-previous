"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStopAndPrevent = void 0;
const react_1 = require("react");
function useStopAndPrevent(func) {
    return (0, react_1.useCallback)((ev) => {
        console.warn('event stopped and prevented', ev);
        ev.stopPropagation();
        ev.preventDefault();
        func(ev);
    }, [func]);
}
exports.useStopAndPrevent = useStopAndPrevent;
//# sourceMappingURL=useStopAndPrevent.js.map