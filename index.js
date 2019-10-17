const FS = require('fs');
const Path = require('path');

// Load .eslintrc and remove comments
const config = FS.readFileSync(Path.join(__dirname, '.eslintrc'))
	.toString()
	.split('\n')
	.map(l => l.replace(/^\s*\/\/.+$/gm, ''))
	.join('\n');

module.exports = JSON.parse(config);
