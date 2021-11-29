import React, { FC } from 'react';
import styled from 'styled-components';

import Card from '@components/Card';
import Loader from '@components/Loader';

interface ListProps {
    books: [];
}

const List: FC<ListProps> = ({ books }) => {
    return (
        <Container>
            <Loader dependency={books}>
                <ListWrap>
                    {books?.map(book => {
                        return <Card key={book.id} book={book} />;
                    })}
                </ListWrap>
            </Loader>
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
