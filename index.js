#!/usr/bin/env node
const chalk = require("chalk");
const dim = chalk.dim;
const italic = chalk.italic;
const portfoliClr = chalk.bgHex(`#b3dcff`).hex(`#000000`).bold;
const githubClr = chalk.bgHex(`#6cc644`).hex(`#000000`).bold;
const emailClr = chalk.bgHex(`#3be8b0`).hex(`#000000`).bold;
const blogClr = chalk.bgHex(`#f57d00`).hex(`#000000`).bold;

(() => {
    require("./utils/init")();
    console.log(`${italic(
        `I have been interested in computers since childhood. I always wanted to understand it, I understood it, I found it very interesting, then I thought of making it my work out of my interest and just pursuing that desire. I have also created a lot of websites and software out of my jumping interest which was really the solution to some real-world problems. I love solving real-world problems with my code. like my recent project a web app that bypasses Instagram proxy and downloads user display pictures.`
    )}
    
${portfoliClr(` Portfolio `)} ${dim(`http://suryapratap.netlify.app`)}
${githubClr(` GitHub `)}    ${dim(`https://github.com/suryapratapsinghsuryavanshi`)}
${emailClr(` Email `)}     ${dim(`suryprtaps@gmail.com`)}
${blogClr(` Blog `)}      ${dim(`https://auth.geeksforgeeks.org/user/mrsuryapratap/articles`)}
    `);
})();