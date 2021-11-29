import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Card from '@components/Card/Card';
import styled from 'styled-components';

interface ListProps{
     books: []
}

const List: FC<ListProps> = ({books}) => {
    
    return (
        <Container>
            <ListWrap>
                {books?.map(book => {
                    return <Card key={book.id} book={book} />;
                })}
            </ListWrap>
        </Container>
    );
};

export default List;

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

const ListWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    padding: 0rem 0 2rem;
`;
const ListSubtitle = styled.h2``;
const ListTitle = styled.h1``;
const ListImg = styled.img``;
const ListTextSnippet = styled.div``;
