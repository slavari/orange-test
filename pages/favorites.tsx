import React, { useEffect } from 'react';
import { NextPage } from 'next';

import { useDispatch, useSelector } from 'react-redux';

import { getBookmarks } from '@redux/general/action-creators';
import List from '@components/List';

interface Props {
    userAgent?: string;
}

const IndexPage: NextPage<Props> = ({ userAgent }) => {
    const { favoriteBooksList } = useSelector(
        (state: { GeneralReducer: {} }) => state.GeneralReducer,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        getBookmarks();
    }, []);
    // return <div>sads</div>
    return <List books={favoriteBooksList} />;
};

IndexPage.getInitialProps = async ctx => {
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;

    return { userAgent };
};

export default IndexPage;
