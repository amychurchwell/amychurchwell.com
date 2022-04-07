const fs = require('fs')
const NOT_FOUND_PATH = '_site/404.html'
require('dotenv').config()

module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          if (!fs.existsSync(NOT_FOUND_PATH)) {
            throw new Error(
              `Expected a \`${NOT_FOUND_PATH}\` file but could not find one.)`
            )
          }

          const content_404 = fs.readFileSync(NOT_FOUND_PATH)
          // Add 404 http status code in request header.
          res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
          })
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  eleventyConfig.addPassthroughCopy('./src/css/');
  eleventyConfig.addWatchTarget('./src/css/');

  eleventyConfig.addPassthroughCopy('./src/img/');
  eleventyConfig.addWatchTarget('./src/img/');

  eleventyConfig.addShortcode("year", function (date) {
    return `${new Date().getFullYear()}`
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  }
}
