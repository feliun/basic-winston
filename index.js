var winston = require("winston")

var gflLogger = {}

function configure(options) {
    configureFileOptions()
    configureConsoleOptions()
    configureLoggerMethods()

    return gflLogger

    function configureFileOptions() {
        try { winston.remove(winston.transports.File) } catch(e) {}
        if (options.file && options.file.enabled) {
            winston.add(winston.transports.File, {
                maxsize: 1024 * 1024 * 5, // 5M files
                maxFiles: 10,
                level: options.file.level,
                timestamp: options.file.timestamp,
                colorize: false,
                filename: options.file.filepath
            })
        }
    }

    function configureConsoleOptions() {
        try { winston.remove(winston.transports.Console) } catch(e) {}
        if (options.console && options.console.enabled) {
            winston.add(winston.transports.Console, {
                level: options.console.level,
                timestamp: options.console.timestamp,
                colorize: options.console.colorize,
                handleExceptions: true,
            })
        }
    }

    function configureLoggerMethods() {
        gflLogger.silly = winston.silly
        gflLogger.verbose = winston.verbose
        gflLogger.log = winston.info
        gflLogger.info = winston.info
        gflLogger.debug = winston.debug
        gflLogger.warn = winston.warn
        gflLogger.error = winston.error
        gflLogger.die = function(msg, status) {
            gflLogger.error(msg)
            process.exit(status != undefined ? status : 1)
        }
    }
}

function logger() {
    return gflLogger
}

module.exports = {
    configure: configure,
    logger: logger
}