const axios = require("axios");
const { yellow, green, dim } = require("chalk");
const ora = require("ora");
const handelError = require("alerts-in-cli");
const gitHubReposUrl = "https://api.github.com/users/suryapratapsinghsuryavanshi/repos";

let spinner = ora({ text: '' });
module.exports = async () => {
    spinner.start(yellow(`${yellow("Fetching")} my top repos...`));
    try {
        const res = await axios.get(gitHubReposUrl);
        spinner.succeed(`${green('Fetched')} my top repos!`);
        const data = res.data.slice(1);
        const repos = data.map(post => {
            return {
                name: post.name,
                url: post.html_url,
                star: post.stargazers_count
            }
        });
        repos.sort((x, y) => {
            return x.star - y.star;
        }).reverse();
        repos.slice(0, 5).map(({ name, url, star }, idx) => {
            console.log(`${dim(`#${idx + 1}`)} ${yellow(name)} | ${green(star)} | ${dim(url)}`);
        });
        console.log();
    } catch(err) {
        handelError({
            type: "error",
            msg: err,
            name: "API Call fail"
        });
        spinner.fail();
    }
}