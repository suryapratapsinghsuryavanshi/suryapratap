#!/usr/bin/env node
const { clearLog, checkVersion, unhandled } = require("./utils-info");
const pkgJSON = require('./package.json');
const chalk = require("chalk");
const dim = chalk.dim;
const italic = chalk.italic;
const portfoliClr = chalk.bgHex(`#b3dcff`).hex(`#000000`).bold;
const githubClr = chalk.bgHex(`#6cc644`).hex(`#000000`).bold;
const emailClr = chalk.bgHex(`#3be8b0`).hex(`#000000`).bold;
const blogClr = chalk.bgHex(`#f57d00`).hex(`#000000`).bold;

// Alerts.
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword('orange');
const error = chalk.red;

// Clear the console
clearLog();

// check the node version.
checkVersion('12');

unhandled();

const cli = {
    title: ` Suryapratap Singh Suryavanshi `,
    tagLine: 'Hey, nice to meet you!',
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
	color: `#000000`,
	token: require('solverjs').token()
}

console.log(`
${chalk.bold.bgHex(cli.bgColor).hex(cli.color)(cli.title)} ${ "v" + cli.version} ${chalk.dim(cli.tagLine)}\n${chalk.dim(cli.description)}
`);

console.log(`${italic(
    `I have been interested in computers since childhood. I always wanted to understand it, I understood it, I found it very interesting, then I thought of making it my work out of my interest and just pursuing that desire. I have also created a lot of websites and software out of my jumping interest which was really the solution to some real-world problems. I love solving real-world problems with my code. like my recent project a web app that bypasses Instagram proxy and downloads user display pictures.`
)}

${portfoliClr(` Portfolio `)} ${dim(`http://suryapratap.netlify.app`)}
${githubClr(` GitHub `)}    ${dim(`https://github.com/suryapratapsinghsuryavanshi`)}
${emailClr(` Email `)}     ${dim(`suryprtaps@gmail.com`)}
${blogClr(` Blog `)}      ${dim(`https://auth.geeksforgeeks.org/user/mrsuryapratap/articles`)}
`);