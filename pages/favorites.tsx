import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Cookies from 'js-cookie';

import { useDispatch, useSelector } from 'react-redux';

import { getBookmarksList, getBookmarks } from '@redux/general/action-creators';
import List from '@components/List';

interface Props {
    userAgent?: string;
}

const IndexPage: NextPage<Props> = ({ userAgent }) => {
    const { favoriteBooksIdxList, favoriteBooksList } = useSelector(
        (state: { GeneralReducer: {} }) => state.GeneralReducer,
    );
    const dispatch = useDispatch();
    const cookiesList = Cookies.get('BookmarksList') || [];
    console.log(cookiesList, favoriteBooksIdxList, favoriteBooksList);

    useEffect(() => {
        if (!favoriteBooksIdxList.length) {
            const parsedCookies = cookiesList.length ? JSON.parse(cookiesList) : cookiesList;

            if (parsedCookies.length) {
                dispatch(getBookmarks(parsedCookies));
                parsedCookies?.forEach((idx: string) => {
                    if (!parsedCookies.includes()) {
                        dispatch(getBookmarksList(idx));
                    }
                });
            }
        }
    }, []);

    // useEffect(() => {
    //     const parsedCookies = cookiesList.length ? JSON.parse(cookiesList) : cookiesList;

    //     if (
    //         !!favoriteBooksList.length &&
    //         parsedCookies.length &&
    //         favoriteBooksList.length < parsedCookies.length
    //     ) {
    //         console.log('da');
    //     }
    // }, [favoriteBooksIdxList]);

    return <List books={favoriteBooksList} />;
};

IndexPage.getInitialProps = async ctx => {
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;

    return { userAgent };
};

export default IndexPage;
