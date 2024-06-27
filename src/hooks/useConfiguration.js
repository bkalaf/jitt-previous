"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfiguration = void 0;
const Configuration_1 = require("../contexts/Configuration");
const useContxt_1 = require("./useContxt");
function useConfiguration() {
    return (0, useContxt_1.useContxt)('ConfigurationContext', Configuration_1.ConfigurationContext);
}
exports.useConfiguration = useConfiguration;
//# sourceMappingURL=useConfiguration.js.map