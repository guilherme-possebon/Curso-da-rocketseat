const getFlagValue = require('./getFlags')

console.log(`Oi ${getFlagValue('--name')}, ${getFlagValue('--greeting')}`);

