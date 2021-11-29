import React, { useEffect } from 'react';
import { NextPage } from 'next';

import { useDispatch, useSelector } from 'react-redux';

import { getBookes } from '@redux/general/action-creators';
import List from '@components/List';

interface Props {
    userAgent?: string;
}

const IndexPage: NextPage<Props> = ({ userAgent }) => {
    const { searchBooksList, searchBooks } = useSelector((state: { GeneralReducer: {} }) => state.GeneralReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (searchBooks) {
            dispatch(getBookes({q : searchBooks},true ));
        }
    }, [searchBooks]);

    // return <div>sads</div>
    return <List books={searchBooksList} />;

};

IndexPage.getInitialProps = async ctx => {
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;

    return { userAgent };
};

export default IndexPage;
