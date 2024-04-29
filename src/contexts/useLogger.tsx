import { useCallback, useMemo } from 'react';
import { useEnv } from '../hooks/useEnv';

export const logLevels = {
    none: -1,
    log: 0,
    info: 1,
    warn: 2,
    error: 3
};

export function useLogger() {
    const { LOG_LEVEL } = useEnv();
    const shouldLog = useCallback((testFor: ConsoleLoggingLevel) => {
        const logLevelNum = logLevels[LOG_LEVEL];
        return logLevelNum <= logLevels[testFor];
    }, [LOG_LEVEL]);
    const logInfo = useCallback((...args: Parameters<typeof console.info>) => {
        if (shouldLog('info')) console.info(...args);
    }, [shouldLog]);
    const logVerbose = useCallback((...args: Parameters<typeof console.log>) => {
        if (shouldLog('log')) console.log(...args);
    }, [shouldLog]);
    const logWarning = useCallback((...args: Parameters<typeof console.warn>) => {
        if (shouldLog('warn')) console.warn(...args);
    }, [shouldLog]);
    const logError = useCallback((...args: Parameters<typeof console.error>) => {
        if (shouldLog('error')) console.error(...args);
    }, [shouldLog]);
    const logException = useCallback((error: Error) => {
        logError([`ERROR: ${error.name}`, error.message].join('\n'));
    }, [logError]);
    return useMemo(() => ({
        verbose: logVerbose,
        info: logInfo,
        warning: logWarning,
        error: logError,
        exception: logException
    }), [logError, logException, logInfo, logVerbose, logWarning]);
}
