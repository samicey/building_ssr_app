const path = require('path');
const DotenvWebpackPlugin = require("dotenv-webpack");

const nextConfig = {
    serverRuntimeConfig: {
        // Will only be available on the server side
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        RESTURL_SPEAKERS_PROD:
            "https://www.siliconvalley-codecamp.com/rest/speakers/ps",
        RESTURL_SPEAKER_PROD:
            "https://www.siliconvalley-codecamp.com/rest/speaker",
        RESTURL_SESSIONS_PROD:
            "https://www.siliconvalley-codecamp.com/rest/sessions"
    },
    webpack: (config, options) => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new DotenvWebpackPlugin({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
    return config
  },
  }
   
module.exports = nextConfig