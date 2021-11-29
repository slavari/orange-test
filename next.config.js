const withPlugins = require('next-compose-plugins');
const fonts = require('next-fonts');
const redirects = require('./server/redirects');

const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            return config;
        }

        // if (!isServer) {
        config.module = {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader?cacheDirectory=true',
                    },
                },
            ],
        };
        // }

        return config;
    },
    publicRuntimeConfig: {
        API_HOST: process.env.API_HOST,
        API_PATH: process.env.API_PATH,
    },
    async redirects() {
        return redirects;
    },
};

module.exports = withPlugins(
    [
        // [withBundleAnalyzer],
        [fonts, {}],
    ],
    nextConfig,
    // withFonts,
);
