const os = require('node:os')

console.log({ Platform: os.platform(), Arch: os.arch() });
