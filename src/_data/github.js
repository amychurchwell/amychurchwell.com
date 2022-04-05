const fetch = require("node-fetch");

module.exports = async function () {
    console.log("Fetching latest github commit...");

    // GitHub API: https://developer.github.com/v3/repos/#get
    return fetch("https://api.github.com/repos/amychurchwell/amychurchwell.com/commits")
        .then(res => res.json())
        .then(json => {
            msg = json[0].commit.message;
            date = new Date(json[0].commit.committer.date).toDateString();
            author = json[0].author.login;

            return {
                commit: {
                    msg: msg,
                    date: date,
                    author: author
                }
            };
        });
};