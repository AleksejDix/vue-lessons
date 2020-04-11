const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const postcssPurgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    tailwindcss('./src/assets/css/01_settings/tailwind.config.js'),
    autoprefixer
  ]
}

const purgecss = postcssPurgecss({
  content: ['./public/**/*.html', './src/**/*.vue'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}
