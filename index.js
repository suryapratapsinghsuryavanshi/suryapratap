#!/usr/bin/env node

let {bio, social } = require("./utils/data");

(() => {
    require("./utils/init")();
    console.log(bio);
    console.log(social);
})();
