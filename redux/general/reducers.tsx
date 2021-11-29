import { types } from './action-types';
import * as action from './actions';
import { HYDRATE } from 'next-redux-wrapper';

export enum EStates {
    q = 'React',
    // theme = 'flex',
}

const initialStates = {
    books: [],
    book: {},
    searchBooks: '',
    searchBooksList: [],
    favoriteBooksList: [],
    q: EStates,
    // theme: EStates,
};

export const GeneralReducer = (state = initialStates, result: any) => {
    const { type, payload, meta, error } = result;

    switch (type) {
        case HYDRATE:
            return { ...state, ...result.payload?.GeneralReducer };
        case types.GET_BOOKSLIST_SUCCESS:
            return action.getBookes(state, payload, meta);
        case types.GET_BOOOK_DETAILS_SUCCESS:
            return action.getBookDetails(state, payload);
        case types.GET_BOOOK_DETAILS_FAIL:
            return action.getBookDetails(state, { data: null });
        case types.GET_SEARCH_BOOKS:
            return action.getSearchBooks(state, payload);

        // case types.GET_THEME:
        //     return action.getTheme(state, payload);
        default:
            return state;
    }
};

export default GeneralReducer;
