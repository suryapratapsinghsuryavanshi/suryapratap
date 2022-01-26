#!/usr/bin/env node

let { bio, social } = require("./utils/data");
let cli = require("./utils/cli");
let state = require("./utils/states");

const flags = cli.flags;

(async () => {
    cli.input.includes('help') && cli.showHelp(0);
    require("./utils/init")({clear: flags.clear});
    flags.bio ? console.log(bio) : '';
    flags.social ? console.log(social) : '';

    // debug cli.
    flags.debug ? require("./utils/debug")(cli) : '';

    await state();
})();
