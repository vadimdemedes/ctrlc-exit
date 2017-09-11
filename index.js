'use strict';

let wasAlreadyRaw = false;

const onData = data => {
	if (data.toString() === '\u0003') {
		process.exit(); // eslint-disable-line unicorn/no-process-exit
	}
};

module.exports = () => {
	wasAlreadyRaw = process.stdin.isRaw;

	if (!wasAlreadyRaw) {
		process.stdin.setRawMode(true);
		process.stdin.resume();
	}

	process.stdin.on('data', onData);
};

module.exports.done = () => {
	process.stdin.removeListener('data', onData);

	if (!wasAlreadyRaw) {
		process.stdin.setRawMode(false);
		process.stdin.pause();
	}
};
