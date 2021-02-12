import React from 'react';
import daroom from '../Daroom.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BarLayout = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-width: 1660px;
    height: 70px;
    margin: 0 auto;
    line-height: 70px;
    border-bottom: 1px solid rgba(235, 235, 235);
    user-select: none;

    & > h1,
    & > h2 {
        display: inline-block;
        height: 70px;
    }

    & > h1 {
        cursor: pointer;
        margin: 0 2rem;
    }

    & > h1 img {
        height: 20px;
    }
`;

const LinkTo = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

function Gnb() {
    return (
        <BarLayout>
            <h1>
                <LinkTo to={'/'}>
                    <img src={daroom} />
                </LinkTo>
            </h1>
            <h2>
                <LinkTo to={'/'}>매물 정보</LinkTo>
            </h2>
        </BarLayout>
    );
}

export default Gnb;
