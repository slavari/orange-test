import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setTerm } from '../../reducers/termReducer';
import styled from 'styled-components';

const Header = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    // const favorites = useSelector(state => state.favorites.items);
    // const history = useHistory();

    return (
        <Container>
            <Main>text</Main>
        </Container>
    );
};
export default Header;

const Container = styled.header`
    border-bottom: 1px solid rgba(131, 131, 131, 0.2);
    min-height: 70px;
    padding: 15px;
    margin-bottom: 15px;
`;

const Main = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: #6ee7b7;
`;
