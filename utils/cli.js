let meow = require("meow");

let helperText = `
Usage:
  npx suryapratap [--options] <command>

Options:
  social            Print the social information.
  --no-social       Don't print the social information.
  bio               Print the bio information.
  --no-bio          Don't print the bio information.
  -d, --debug       Print debug information if need.
  -v, --version     Print version information.
  -h, --help        Print the help information.

Commands:
  help              Print the help information.

Example:
  npx suryapratap --no-bio
`;


module.exports = meow(helperText, {
    flags: {
        social: {
            type: 'boolean',
            default: true
        },
        bio: {
            type: 'boolean',
            default: true
        },
        debug: {
            type: 'boolean',
            default: false,
            alias: 'd'
        },
        version: {
          type: 'boolean',
          default: false,
          alias: 'v'
        },
        help: {
          type: 'boolean',
          default: false,
          alias: 'h'
        }
    }
});