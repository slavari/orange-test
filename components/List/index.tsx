import React, { FC, useState, useEffect,useMemo } from 'react';
import { useSelector } from 'react-redux';
import Card from '@components/Card';
import styled from 'styled-components';

interface ListProps {
    books: [];
}

const List: FC<ListProps> = ({ books }) => {
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(false)

        let timer1 = setTimeout(() => setIsLoading(true), 500);

        return () => {
            clearTimeout(timer1);
          };
        
    }, [books]);

    if (!isLoading) return <Loader>Loading...</Loader>;

    return (
        <Container>
            <ListWrap>
                {books?.map(book => {
                    return <Card key={book.id} book={book}/>;
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
const Loader = styled.div`
    text-align: center;
`;
