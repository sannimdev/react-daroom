import React from 'react';
import styled from 'styled-components';

type Props = {
    children?: React.ReactNode;
};

const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    font-family: 'Noto Sans KR', sans-serif !important;
    letter-spacing: -0.05rem;
`;

function FullLayout({ children }: Props) {
    return <Wrapper>{children}</Wrapper>;
}

export default FullLayout;
