#!/usr/bin/env node

let { bio, social } = require("./utils/data");
let meow = require("meow");

let helperText = `Suryapratap CLI`;
let cli = meow(helperText, {
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

(() => {
    require("./utils/init")();
    cli.flags.bio ? console.log(bio) : '';
    cli.flags.social ? console.log(social) : '';
})();
