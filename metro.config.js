const { getDefaultConfig } = require("expo/metro-config"); //imports the default metro bundler config for expo
module.exports = getDefaultConfig(__dirname); //applies that config to the root of our project