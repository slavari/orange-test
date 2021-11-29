import React, { useEffect } from 'react';
import { NextPage } from 'next';

import { useDispatch, useSelector } from 'react-redux';

import { getBookes } from '@redux/general/action-creators';
import List from '@components/List/List';

interface Props {
    userAgent?: string;
}

const IndexPage: NextPage<Props> = ({ userAgent }) => {
    const { books } = useSelector((state: { GeneralReducer: {} }) => state.GeneralReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!books?.length) {
            dispatch(getBookes());
        }
    }, [books]);

    return <List />;
};

IndexPage.getInitialProps = async ctx => {
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;

    return { userAgent };
};

export default IndexPage;
