# ctrlc-exit [![Build Status](https://travis-ci.org/vadimdemedes/ctrlc-exit.svg?branch=master)](https://travis-ci.org/vadimdemedes/ctrlc-exit)

> Exit the process when <kbd>Ctrl</kbd>+<kbd>C</kbd> is pressed

Useful for CLI tools when default behavior to exit is disabled (e.g. raw mode is enabled).


## Install

```
$ npm install ctrlc-exit
```


## Usage

```js
const ctrlcExit = require('ctrlc-exit');

ctrlcExit();
```


## API

Using this prevents the process from exiting normally.

There are multiple ways you can handle this:

- Call `ctrlcExit.done()` when you're done listening. It will then let the process exit normally.
- Use `process.stdin.unref()` if you don't intend to use `process.stdin` afterwards. It will let the process exit normally.
- Call `process.exit()` to exit the process directly.


## Related

- [esc-exit](https://github.com/sindresorhus/esc-exit) - Exit the process using <kbd>Esc</kbd>.


## License

MIT © [Vadim Demedes](https://github.com/vadimdemedes)
