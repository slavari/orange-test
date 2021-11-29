const express = require('express');
const next = require('next');
const { routes } = require('./routes');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3111;
const dev = process.env.NODE_ENV !== 'production';
const apiHost = process.env.API_HOST;
const apiPath = process.env.API_PATH;
const webHost = process.env.WEB_HOST;

const app = next({ dev });

const handler = routes.getRequestHandler(app);

/**
 * Application init
 */
app.prepare()
    .then(async () => {
        const server = express();

        server
            .use(redirectTrailingSlash)
            .use(handler)
            .listen(PORT, err => {
                if (err) throw err;
                console.log(`> Ready on ${PORT}`);
            });
    })
    .catch(() => {
        process.exit(1);
    });
