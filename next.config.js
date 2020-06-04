require('dotenv').config();

module.exports = {
    env: {
        API_URL: process.env.API_URL,
    },
}

module.exports = {
    webpack: (config) => {
      config.module.rules.push(
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      )
  
      return config
    },
  }