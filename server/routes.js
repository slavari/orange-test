const nextRoutes = require('next-routes');

const routes = nextRoutes();

const APP_ROUTES = [
    {
        name: 'index',
        page: 'index',
        pattern: '/',
    },
    {
        name: 'book-details',
        routes: [{ path: '/book-details/:id' }],
        page: 'book-details',
    },
];

APP_ROUTES.map(route => routes.add(route));

module.exports = {
    routes: routes,
    Router: routes.Router,
    Link: routes.Link,
};
