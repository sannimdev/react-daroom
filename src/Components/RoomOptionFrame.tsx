import React from 'react';
import styled from 'styled-components';
import { RoomOption } from '../lib/roomDetail';
import RoomOptionItem from './RoomOptionItem';

type Props = {
    title: string;
    options: RoomOption[] | null;
};

const Title = styled.h3`
    margin-top: 2rem;
    font-size: 1.8rem;
    text-align: center;
`;

const OptionList = styled.ul`
    display: flex;
    justify-content: center;
    & > li {
        margin: 2rem 0;
    }
`;

function RoomOptionFrame({ title, options }: Props) {
    return (
        <div>
            <Title>{title}</Title>
            <div>
                <OptionList>
                    {options &&
                        options.map((item) => (
                            <li key={item.seq}>
                                <RoomOptionItem name={item.name} />
                            </li>
                        ))}
                </OptionList>
            </div>
        </div>
    );
}

export default RoomOptionFrame;
