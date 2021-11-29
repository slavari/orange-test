import React, { useEffect } from 'react';
import { NextPage } from 'next';

import { useDispatch } from 'react-redux';

import { getBookDetails } from '@redux/general/action-creators';
import Book from '@components/Book/Book';

interface Props {
    userAgent?: string;
    query?: string;
}

const BooksDetails: NextPage<Props> = ({ userAgent, query }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        !!query && dispatch(getBookDetails(query));
    }, []);

    return <Book />;
};

BooksDetails.getInitialProps = async ctx => {
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;

    return { userAgent, query: ctx.query?.id };
};

export default BooksDetails;
