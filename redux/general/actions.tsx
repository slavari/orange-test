import update from 'immutability-helper';

export const getBooks = (
    state: any,
    { data }: any,
    {
        previousAction: {
            meta: { forSearch },
        },
    },
) => {
    if (forSearch) {
        return update(state, { searchBooksList: { $set: data?.items } });
    }

    return update(state, { books: { $set: data?.items } });
};

export const getBookDetails = (state: any, { data }: any) => {
    return update(state, { book: { $set: data } });
};

export const getTheme = (state: any, { data }: any) => {
    return update(state, { theme: { $set: data } });
};

export const getSearchBooks = (state: any, { data }: any) => {
    return update(state, { searchBooks: { $set: data } });
};

export const getBookmarks = (state: any, { data }: any) => {
    if (typeof data == 'object') {
        const favoriteBooksIdxList = state.favoriteBooksIdxList;
        const idx = favoriteBooksIdxList?.indexOf(data);

        if (idx === -1) {
            return update(state, {
                favoriteBooksIdxList: { $set: data },
            });
        } else {
            const newData = favoriteBooksIdxList.filter((e: any, EIdx: number) => EIdx !== idx);

            return update(state, { favoriteBooksIdxList: { $set: newData } });
        }
    } else {
        const favoriteBooksIdxList = state.favoriteBooksIdxList;
        const idx = favoriteBooksIdxList?.indexOf(data);

        if (idx === -1) {
            return update(state, {
                favoriteBooksIdxList: { $set: [...favoriteBooksIdxList, data] },
            });
        } else {
            const newData = favoriteBooksIdxList.filter((e: any, EIdx: number) => EIdx !== idx);

            return update(state, { favoriteBooksIdxList: { $set: newData } });
        }
    }
};

export const getBookmarksList = (state: any, { data }: any) => {
    return update(state, { favoriteBooksList: { $set: [...state.favoriteBooksList, data] } });
};
