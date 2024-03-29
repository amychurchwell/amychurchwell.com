const needle = require('needle')
require('dotenv').config()

const userId = '24532505'
const url = `https://api.twitter.com/2/users/${userId}/tweets`
const bearerToken = process.env.TWITTER_BEARER_TOKEN

module.exports = async () => {
    let userTweets = []

    let params = {
        max_results: 5,
        'tweet.fields': 'created_at',
        expansions: 'author_id',
    }

    const options = {
        headers: {
            'User-Agent': 'v2UserTweetsJS',
            authorization: `Bearer ${bearerToken}`,
        },
    }

    let userName
    console.log('Retrieving Tweets...')

    let resp = await getPage(params, options)
    if (
        resp &&
        resp.meta &&
        resp.meta.result_count &&
        resp.meta.result_count > 0
    ) {
        userName = resp.includes.users[0].username
        if (resp.data) {
            userTweets.push.apply(userTweets, resp.data)
        }
    }

    console.dir(userTweets, {
        depth: null,
    })
    console.log(
        `Got ${userTweets.length} Tweets from ${userName} (user ID ${userId})!`
    )

    return userTweets
}

const getPage = async (params, options, nextToken) => {
    if (nextToken) {
        params.pagination_token = nextToken
    }

    try {
        const resp = await needle('get', url, params, options)

        if (resp.statusCode != 200) {
            console.log(
                `${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`
            )
            return
        }
        return resp.body
    } catch (err) {
        throw new Error(`Request failed: ${err}`)
    }
}
