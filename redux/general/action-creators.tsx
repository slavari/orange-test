import { types } from './action-types';

import { apiPath, apiHost } from '@server/server.config';
import { EStates } from './reducers';
import axios from 'axios';

const CancelToken = axios.CancelToken;
let cancelBooks;

export const getBooks = (params?: any[], forSearch?: boolean | null) => {
    return {
        type: types.GET_BOOKSLIST,
        payload: {
            request: {
                url: `${apiHost}${apiPath}`,
                method: 'GET',
                params: params || EStates,
                cancelToken: new CancelToken(c => (cancelBooks = c)),
            },
        },
        meta: {
            forSearch,
        },
    };
};

export const getBookDetails = (slug?: string) => {
    return {
        type: types.GET_BOOOK_DETAILS,
        payload: {
            request: {
                url: `${apiHost}${apiPath}/${slug}`,
                method: 'GET',
            },
        },
    };
};

export const getTheme = (data: string | 'flex') => {
    return {
        type: types.GET_BOOKSLIST,
        payload: {
            data,
        },
    };
};

export const getSearchBooks = (data?: string) => {
    return {
        type: types.GET_SEARCH_BOOKS,
        payload: {
            data,
        },
    };
};

export const getBookmarks = (data?: string) => {
    return {
        type: types.GET_BOOKMARKS,
        payload: {
            data,
        },
    };
};
export const getBookmarksList = (slug: string) => {
    return {
        type: types.GET_BOOKMARKS_LIST,
        payload: {
            request: {
                url: `${apiHost}${apiPath}/${slug}`,
                method: 'GET',
            },
        },
    };
};
