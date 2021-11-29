const getConfig = require('next/config').default;
const { publicRuntimeConfig: env } = getConfig();

// const mainDomain = env.MAIN_DOMAIN;
const apiHost = env.API_HOST;
const apiPath = env.API_PATH;
// const webHost = env.WEB_HOST;

// module.exports.mainDomain = mainDomain;
module.exports.apiHost = apiHost;
module.exports.apiPath = apiPath;
// module.exports.webHost = webHost;
module.exports.apiBaseUrl = `${apiHost}${apiPath}`;
