let meow = require("meow");

let helperText = `
Usage:
  npx suryapratap [options]

Options:
  social            Show the social information.
  --no-social       Don't show the social information.
  bio               Show the bio information.
  --no-bio          Don't show the bio information.

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
        }
    }
});