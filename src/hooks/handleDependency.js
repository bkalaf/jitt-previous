"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDependency = void 0;
function handleDependency(dependency) {
    if ('isNull' in dependency) {
        return (value) => value == null;
    }
    else if ('isEmpty' in dependency) {
        return (value) => (Array.isArray(value) ? value.length === 0 : false);
    }
    else if ('hasOneOf' in dependency) {
        const { hasOneOf } = dependency;
        return (value) => value != null ?
            Array.isArray(value) ?
                value.some((x) => hasOneOf.includes(x))
                : hasOneOf.includes(value)
            : false;
    }
    else if ('equalTo' in dependency) {
        const { equalTo } = dependency;
        return (value) => value === equalTo;
    }
    else if ('in' in dependency) {
        const { in: $in } = dependency;
        return (value) => $in.includes(value);
    }
    else if (dependency.length === 2) {
        const [kind, $dependency] = dependency;
        switch (kind) {
            case 'not':
                return (value) => !handleDependency($dependency)(value);
            case null:
                return (value) => handleDependency($dependency)(value);
        }
    }
    const [kind, left, right] = dependency;
    switch (kind) {
        case 'and':
            return (value) => (handleDependency(left)(value) ? handleDependency(right)(value) : false);
        case 'or':
            return (value) => (handleDependency(left)(value) ? true : handleDependency(right)(value));
    }
}
exports.handleDependency = handleDependency;
//# sourceMappingURL=handleDependency.js.map