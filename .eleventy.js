const fs = require('fs')
const NOT_FOUND_PATH = '_site/404.html'
require('dotenv').config()

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/');
  eleventyConfig.addWatchTarget('./src/css/');

  eleventyConfig.addPassthroughCopy('./src/img/');
  eleventyConfig.addWatchTarget('./src/img/');

  eleventyConfig.addPairedShortcode('year', function (date) {
    const currentYear = new Date().getFullYear();
    let result = currentYear - date;
    result.toString();
    return `${ result }`;
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    templateFormats: [ "md", "njk", "html", ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
}
