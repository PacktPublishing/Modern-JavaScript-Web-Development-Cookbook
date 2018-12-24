const rewireEslint = require("react-app-rewire-eslint");
const rewireSass = require("react-app-rewire-scss");

function overrideEslintOptions(options) {
    // do stuff with the eslint options...
    return options;
}

/* global module */
module.exports = function override(config, env) {
    config = rewireEslint(config, env, overrideEslintOptions);
    config = rewireSass(config, env);
    return config;
};
