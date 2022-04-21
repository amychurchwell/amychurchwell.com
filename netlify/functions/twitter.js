const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

// exports.handler = async () => {
//   return fetch('https://mxb.dev/notes.json')
//       .then(response => response.json())
//       .then(processNotes)
//       .catch(err => ({
//           statusCode: 422,
//           body: String(err)
//       }))
// }
