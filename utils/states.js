const ora = require("ora");
const axios = require("axios");
const handelError = require("alerts-in-cli");
const githubUserApiURL = "https://api.github.com/users/suryapratapsinghsuryavanshi";

let spinner = ora({ text: '' });
module.exports = async () => {
    spinner.start(`Fetching data from github.`);
    try {
        const res = await axios.get(githubUserApiURL);
        const ghFollower = res.data.followers;
        spinner.stop();
        console.log(`
GitHub Followers: ${ghFollower}
    `);
    } catch (error) {
        handelError({
            type: "error",
            msg: error,
            name: "API Call fail"
        });
        spinner.fail();
    }
}