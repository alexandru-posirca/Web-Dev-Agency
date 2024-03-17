module.exports = {
    plugins:  [
      require('postcss-import'),
      require('postcss-nested'),
      require('tailwindcss/nesting')(require('postcss-nesting')),
      require('autoprefixer'),
      require('tailwindcss'),
    ]
  }
