import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Card: FC = ({ book }) => {
    const bookInfo = book.volumeInfo;

    const getLimitedSymbol = (item: string) => {
        if (item?.length > 150) {
            return `${item.substring(0, 150)}...`;
        }

        return item;
    };

    return (
        <Link href={{ pathname: 'book-details', query: { id: book.id } }}>
            <CardWrap>
                <CardTitle>{bookInfo.title}</CardTitle>
                <CardSubtitle>{bookInfo.subtitle}</CardSubtitle>
                <CardImg src={bookInfo.imageLinks?.thumbnail} />
                <CardTextSnippet
                    dangerouslySetInnerHTML={{
                        __html: getLimitedSymbol(book.searchInfo?.textSnippet),
                    }}
                />
            </CardWrap>
        </Link>
    );
};

export default Card;

const CardWrap = styled.a`
    display: block;
    width: calc(25% - 40px);
    background-color: rgba(255, 238, 144, 0.479);
    text-decoration: none;
    color: black;
    transition: all 0.2s ease;
    padding: 15px;
    min-width: 250px;
    text-align: center;

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
const CardSubtitle = styled.h2``;
const CardTitle = styled.h1``;
const CardImg = styled.img`
    margin: 10px 0;
`;
const CardTextSnippet = styled.div``;
