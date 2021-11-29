import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Bookmarks from '@components/Bookmarks';

const Book: FC<ListProps> = () => {
    const { book, favoriteBooksList } = useSelector((state: { GeneralReducer: {} }) => state.GeneralReducer);
    const volumeInfo = book?.volumeInfo;
    const router = useRouter();

    if (!book) router.push('/');

    return (
            <BookWrap>
                <BookTitleContainer>
                    <BookTitle>{volumeInfo?.title}</BookTitle>
                    <Bookmarks id={book.id} active={false}/>
                </BookTitleContainer>
                <BookSubtitle>{volumeInfo?.subtitle}</BookSubtitle>
                <BookImg src={volumeInfo?.imageLinks?.small || volumeInfo?.imageLinks?.thumbnail} />
                <BookTextSnippet
                    dangerouslySetInnerHTML={{
                        __html: book?.searchInfo?.textSnippet,
                    }}
                />
            </BookWrap>
    );
};

export default Book;

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

const BookTitleContainer = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
`;

const BookTitle = styled.h1`
    font-weight: bold;
    font-size: 20px;
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
