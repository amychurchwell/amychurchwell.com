module.exports = function (eleventyConfig) {
    let options = {
        html: true,
        breaks: true,
        linkify: true,
    }

    let markdownIt = require('markdown-it')(options)
        .use(require('markdown-it-bracketed-spans'))
        .use(require('markdown-it-attrs'))

    eleventyConfig.setLibrary('md', markdownIt)

    eleventyConfig.addPassthroughCopy('./src/assets/')
    eleventyConfig.addWatchTarget('./src/assets/')

    eleventyConfig.addPairedShortcode('year', function (date) {
        const currentYear = new Date().getFullYear()
        let result = currentYear - date
        result.toString()
        return `${result}`
    })

    eleventyConfig.addCollection('navigation', function (collectionApi) {
        return collectionApi
            .getFilteredByGlob(['./src/*.md', './src/*.njk'])
            .filter((item) => !item.data.excludeFromNavigation)
    })

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }
}
