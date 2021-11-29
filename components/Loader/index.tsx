import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

interface ILoader {
    children?: React.ReactChild | React.ReactNode;
    dependency: [];
}

const Loader = ({ dependency, children }: ILoader) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let t = setTimeout(() => setIsLoading(true), 500);

        return () => {
            clearTimeout(t);
            setIsLoading(false);
        };
    }, [dependency]);

    return !isLoading ? <LoaderContainer>Loading...</LoaderContainer> : children;
};

export default Loader;

const LoaderContainer = styled.div`
    text-align: center;
`;
