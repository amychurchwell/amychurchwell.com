const path = require('path')
const fg = require('fast-glob')

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

    eleventyConfig.addGlobalData('paintings', () => {

        const paintings = fg.sync([
            'src/assets/artwork/paintings/**/*.{jpg,jpeg,png,gif,webp,avif,svg}',
        ])

        const items = paintings.map((absPath) => {
            const relFromSrc = absPath.replace(/^src[\\/]/, '') // e.g. "assets/..."
            const url = '/' + relFromSrc.replace(/\\/g, '/')
            const filename = path.basename(absPath, path.extname(absPath))
            const alt = filename.replace(/[-_]+/g, ' ').trim()
            return { src: url, alt, filename }
        })

        items.sort((a, b) =>
            a.filename.localeCompare(b.filename, undefined, {
                numeric: true,
                sensitivity: 'base',
            })
        )

        return items
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
