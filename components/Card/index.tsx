import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface CardProps {
    book: {};
}

const Card: FC<CardProps> = ({ book }) => {
    const bookInfo = book?.volumeInfo;

    const getLimitedSymbol = (item: string) => {
        if (item?.length > 150) {
            return `${item.substring(0, 150)}...`;
        }

        return item;
    };

    return (
        <Link href={{ pathname: 'book-details', query: { id: book?.id } }}>
            <CardWrap href={`/book-details?id=${book?.id}`}>
                <CardTitle>{bookInfo.title}</CardTitle>
                <CardSubtitle>{bookInfo.subtitle}</CardSubtitle>
                <CardImg src={bookInfo.imageLinks?.thumbnail} />
                <CardTextSnippet
                    dangerouslySetInnerHTML={{
                        __html: getLimitedSymbol(book?.searchInfo?.textSnippet),
                    }}
                />
            </CardWrap>
        </Link>
    );
};

export default Card;

const CardWrap = styled.a`
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    grid-gap: 10px;
    width: calc(25% - 40px);
    background-color: rgba(255, 238, 144, 0.479);
    text-decoration: none;
    color: black;
    transition: all 0.2s ease;
    padding: 15px;
    min-width: 250px;
    text-align: center;
    cursor: pointer;

    @media screen and (max-width: 1240px) {
        width: calc(33.3333% - 30px);
    }

    @media screen and (max-width: 1024px) {
        width: calc(50% - 20px);
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
const CardSubtitle = styled.h2`
    font-size: 14px;
    font-weight: normal;
    margin: 0;
`;
const CardTitle = styled.h1`
    font-size: 16px;
    margin: 0;
`;
const CardImg = styled.img`
    margin: 10px auto;
    display: block;
`;
const CardTextSnippet = styled.div`
    font-size: 14px;
`;
