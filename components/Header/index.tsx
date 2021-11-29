import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import useDebounce from '@assets/Hooks/useDebounce';
import { getSearchBooks } from '@redux/general/action-creators';
import { useRouter } from 'next/router';

const Header = () => {
    const { searchBooks } = useSelector((state: { GeneralReducer: {} }) => state.GeneralReducer);
    const router = useRouter();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    // const favorites = useSelector(state => state.favorites.items);

    const debouncedSearch = useDebounce(searchValue, 500);

    useEffect(() => {
        if (debouncedSearch) {
            dispatch(getSearchBooks(debouncedSearch));
        }
    }, [debouncedSearch]);

    useEffect(() => {
        if (searchBooks?.length) {
            if (router.pathname !== '/search') {
                router.push('search', `search?q=${searchBooks}`);
            } else {
                setSearchValue(searchBooks);
                router.replace('search', `search?q=${searchBooks}`);
            }
        } else {
            if (router.pathname === '/search') {
                if (router.query?.q) {
                    setSearchValue(searchBooks);
                    dispatch(getSearchBooks(router.query?.q));
                } else {
                    router.back();
                }
            }
        }
    }, [searchBooks]);

    useEffect(() => {
        if (!router.query?.q && router.pathname !== '/search') {
            dispatch(getSearchBooks());
            setSearchValue('');
        }
    }, [router.pathname]);

    return (
        <Container>
            <Main>
                <Link href={{ pathname: 'favorites' }}>
                    <Favorite href='favorites'>Favorites</Favorite>
                </Link>
            </Main>
            <SearchContainer>
                Search:{' '}
                <SearchInput value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            </SearchContainer>
        </Container>
    );
};
export default Header;

const Container = styled.header`
    border-bottom: 1px solid rgba(131, 131, 131, 0.2);
    margin-bottom: 15px;
`;

const Main = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: #6ee7b7;
    padding: 15px;
`;

const Favorite = styled.a`
    display: flex;
    justify-content: flex-end;
    background-color: #6ee7b7;
    color: black;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        color: rgba(0, 0, 0, 0.5);
        text-decoration: none;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #93c5fd;
    padding: 15px;
    align-items: center;
`;

const SearchInput = styled.input`
    border: 1px solid black;
    padding: 5px;
    margin-left: 5px;
`;
