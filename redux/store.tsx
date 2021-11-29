import axios from 'axios';
import { applyMiddleware, compose, createStore } from 'redux';
import { multiClientMiddleware } from 'redux-axios-middleware';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

import { apiPath } from '@server/server.config';
import rootReducer from '@redux/rootReducer';

// Init axios client! This clients can be more than one!
// For more info please check redux-axios-middleware documentation

const apiClients = {
    default: {
        client: axios.create({
            // withCredentials: true,
            crossDomain: true,
            baseURL: apiPath,
            responseType: 'json',
            timeout: 5000,
            paramsSerializer: function (params) {
                var result = '';

                for (let key in params) {
                    result += `${key}=${encodeURIComponent(params[key])}&`;
                }

                return result.slice(0, -1);
            },
        }),
    },
};

const apiClientsOptions = {
    interceptors: {
        request: [
            (res, req) => {
                return req;
            },
        ],
        response: [
            {
                error: ({ dispatch, getSourceAction }, error) => {
                    return Promise.reject(error);
                },
            },
        ],
    },
};

const middleware = applyMiddleware(multiClientMiddleware(apiClients, apiClientsOptions));

// export const makeStore = (initialState, options) => {
//   return createStore(rootReducer, initialState, middleware);
// };

// create a makeStore function
const makeStore = context => createStore(rootReducer, {}, middleware);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: false });

// import axios from 'axios';
// import { applyMiddleware, compose, createStore } from 'redux';
// import { multiClientMiddleware } from 'redux-axios-middleware';
// import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

// import { apiPath } from '../server/server.config';
// import rootReducer from '../redux/rootReducer';

// const apiClients = {
//     default: {
//         client: axios.create({
//             crossDomain: true,
//             baseURL: apiPath,
//             responseType: 'json',
//         }),
//     },
// };
// 1;

// const apiClientsOptions = {
//     interceptors: {
//         request: [
//             (res, req) => {
//                 return req;
//             },
//         ],
//         response: [
//             {
//                 success: async ({ dispatch, getState }, response) => {
//                     return response;
//                 },

//                 error: ({ dispatch, getSourceAction }, error) => {
//                     return Promise.reject(error);
//                 },
//             },
//         ],
//     },
// };

// const middleware = applyMiddleware(multiClientMiddleware(apiClients, apiClientsOptions));

// // create a makeStore function
// const makeStore = () => createStore(rootReducer, {}, middleware);

// // export an assembled wrapper
// export const wrapper = createWrapper(makeStore, { debug: false });
