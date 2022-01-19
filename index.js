#!/usr/bin/env node

let { bio, social } = require("./utils/data");
let cli = require("./utils/cli");

const flags = cli.flags;

(() => {
    cli.input.includes('help') && cli.showHelp(0);
    require("./utils/init")();
    flags.bio ? console.log(bio) : '';
    flags.social ? console.log(social) : '';

    // debug cli.
    flags.debug ? require("./utils/debug")(cli) : '';
})();
