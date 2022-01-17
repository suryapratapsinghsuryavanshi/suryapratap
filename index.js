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

const flags = cli.flags;

(() => {
    require("./utils/init")();
    flags.bio ? console.log(bio) : '';
    flags.social ? console.log(social) : '';
})();
