import React from 'react';
import styled from 'styled-components';

type Props = {
    children?: React.ReactNode;
    width?: string;
};

const Wrapper = styled.div<{ width: string }>`
    width: ${(props) => props.width};
    margin: 0 auto;
    font-family: 'Noto Sans KR', sans-serif !important;
    letter-spacing: -0.05rem;
`;

function CenterLayout({ width = '1240px', children }: Props) {
    return <Wrapper width={width}>{children}</Wrapper>;
}

export default CenterLayout;
