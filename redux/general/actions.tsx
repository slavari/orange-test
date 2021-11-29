import update from 'immutability-helper';

export const getBookes = (state: any, { data }: any) => {
    return update(state, { books: { $set: data?.items } });
};

export const getBookDetails = (state: any, { data }: any) => {
    return update(state, { book: { $set: data } });
};

export const getTheme = (state: any, { data }: any) => {
    return update(state, { theme: { $set: data } });
};
