import React from 'react';
import daroom from '../Daroom.svg';
import styled from 'styled-components';

const BarLayout = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1660px;
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

    & > h1 > img {
        height: 20px;
    }
`;

function Gnb() {
    return (
        <BarLayout>
            <h1>
                <img src={daroom} />
            </h1>
            <h2>매물 정보</h2>
        </BarLayout>
    );
}

export default Gnb;
