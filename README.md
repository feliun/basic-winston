# basic-winston
A basic wrapper for winston

It will set up for you the file and console options.

Initialise it for the first time with this line:

```
var logger = require('basic-winston').configure(config.logging)
```
The options are these:

```
{
    file: {
        enabled: <true/false>,
        level: <logger_level>,
        timestamp: <true/false>,
        filepath: <as_it_sounds>,
    },
    console: {
        enabled: <true/false>,
        level:, <logger_level>,
        timestamp: <true/false>,
        colorize: <true/false>
    }
}
```

If you don't specify any of the above, the defaults settings will apply. Check out [winston](https://github.com/winstonjs/winston) for reference.

After that, use it anywhere in your code like this:

```
var logger = require('basic-winston').logger()
logger.info("I like the sun")
logger.warn("I'm telling you...")
logger.error("Oh, oh...")
```



