const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

module.exports = function (eleventyConfig) {
    let options = {
        html: true,
        breaks: true,
        linkify: true,
    }

    let markdownIt = require('markdown-it')(options)
        .use(require('markdown-it-bracketed-spans'))
        .use(require('markdown-it-attrs'))

    eleventyConfig.setLibrary('md', markdownIt);

    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPassthroughCopy('./src/art');
    eleventyConfig.addPassthroughCopy('./src/thumbnails');

    eleventyConfig.addWatchTarget('./src/assets/');

    eleventyConfig.addPairedShortcode('year', function (date) {
        const currentYear = new Date().getFullYear()
        let result = currentYear - date
        result.toString()
        return `${result}`
    })

    eleventyConfig.addCollection('navigation', function (collectionApi) {
        return collectionApi.getFilteredByGlob(['./src/*.md', './src/*.njk'])
    })

    // Create thumbnails
    const createThumbnail = (inputPath, outputPath) => {
        return sharp(inputPath)
            .resize(150, 150, { fit: 'cover' }) // Resize and crop to a 150x150 square
            .toFile(outputPath)
            .catch((err) => {
                console.error(`Error creating thumbnail for ${inputPath}:`, err)
            })
    }

    const artDir = './src/art'
    const thumbnailDir = './src/thumbnails' // Directory for thumbnails

    if (!fs.existsSync(thumbnailDir)) {
        fs.mkdirSync(thumbnailDir, { recursive: true })
    }

    const subdirs = fs
        .readdirSync(artDir)
        .filter((file) => fs.statSync(path.join(artDir, file)).isDirectory())

    subdirs.forEach((subdir) => {
        eleventyConfig.addCollection(subdir, function () {
            const imageFiles = fs
                .readdirSync(path.join(artDir, subdir))
                .filter((file) => {
                    return /\.(jpg|jpeg|png|gif)$/i.test(file)
                })

            return imageFiles.map((file) => {
                const fullImagePath = path.join(artDir, subdir, file)
                const thumbnailPath = path.join(
                    thumbnailDir,
                    `${subdir}-${file}`
                )

                // Check if thumbnail exists, otherwise create it
                if (!fs.existsSync(thumbnailPath)) {
                    createThumbnail(fullImagePath, thumbnailPath)
                }

                return {
                    fileName: file,
                    filePath: `/art/${subdir}/${file}`, // Path to full-size image
                    thumbnailPath: `/thumbnails/${subdir}-${file}`, // Path to thumbnail
                    category: subdir,
                }
            })
        })
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
