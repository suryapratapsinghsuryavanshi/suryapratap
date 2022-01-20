let meow = require("meow");
let { green, yellow, cyan } = require("chalk");

let helperText = `
Usage:
  ${green('npx suryapratap')} ${yellow('[--options]')} ${cyan('<command>')}

Options:
  ${yellow('social')}            Print the social information.
  ${yellow('--no-social')}       Don't print the social information.
  ${yellow('bio')}               Print the bio information.
  ${yellow('--no-bio')}          Don't print the bio information.
  ${yellow('-d, --debug')}       Print debug information if need.
  ${yellow('-v, --version')}     Print version information.
  ${yellow('-h, --help')}        Print the help information.

Commands:
  ${cyan('help')}              Print the help information.

Example:
  ${green('npx suryapratap')} ${yellow('--no-bio')}
  ${green('npx suryapratap')} ${yellow('--no-social')}
`;


module.exports = meow(helperText, {
    inferType: true,
    hardRejection: false,
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