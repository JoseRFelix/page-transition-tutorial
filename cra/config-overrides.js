const { override, addPostcssPlugins } = require("customize-cra");

module.exports = {
  webpack: override(
    addPostcssPlugins([require("tailwindcss"), require("autoprefixer")])
  ),
};
