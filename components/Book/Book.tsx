import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Book: FC = () => {
    const { book } = useSelector((state: { GeneralReducer: {} }) => state.GeneralReducer);
    const volumeInfo = book?.volumeInfo;
    const router = useRouter();

    if (!book) router.push('/');

    return (
        <Container>
            <BookWrap>
                <BookTitle>{volumeInfo?.title}</BookTitle>
                <BookSubtitle>{volumeInfo?.subtitle}</BookSubtitle>
                <BookImg src={volumeInfo?.imageLinks?.small || volumeInfo?.imageLinks?.thumbnail} />
                <BookTextSnippet
                    dangerouslySetInnerHTML={{
                        __html: book?.searchInfo?.textSnippet,
                    }}
                />
            </BookWrap>
        </Container>
    );
};

export default Book;

const Container = styled.div`
    max-width: 1440px;
    margin: 10px;
`;

const BookWrap = styled.div`
    display: block;
    text-decoration: none;
    color: black;
    transition: all 0.2s ease;
    padding: 5px;
    position: relative;
`;
const BookSubtitle = styled.h2`
    font-weight: bold;
    margin: 10px 0;
`;
const BookTitle = styled.h1`
    font-weight: bold;
    font-size: 20px;
    margin: 10px 0;
`;
const BookImg = styled.img`
    width: 100%;
    height: auto;
    margin: 30px 0;
    max-width: 300px;
    display: block;
`;
const BookTextSnippet = styled.div`
    text-align: center;
    width: 100%;
`;
