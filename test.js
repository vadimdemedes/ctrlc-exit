'use strict';

const ctrlcExit = require('.');

ctrlcExit();
process.stdin.emit('data', '\u0003');
