import { types } from './action-types';

import { apiPath, apiHost } from '@server/server.config';
import { EStates } from './reducers';

export const getBookes = (params?: any[], forSearch?: boolean | null) => {
    return {
        type: types.GET_BOOKSLIST,
        payload: {
            request: {
                url: `${apiHost}${apiPath}`,
                method: 'GET',
                params: params || EStates,
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
