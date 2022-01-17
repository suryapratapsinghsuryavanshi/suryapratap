#!/usr/bin/env node

let { bio, social } = require("./utils/data");
let cli = require("./utils/cli");

const flags = cli.flags;

(() => {
    require("./utils/init")();
    flags.bio ? console.log(bio) : '';
    flags.social ? console.log(social) : '';

    // debug cli.
    flags.debug ? require("./utils/debug")(cli) : '';
})();
