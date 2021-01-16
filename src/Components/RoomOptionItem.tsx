import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CgSmartHomeWashMachine, CgSmartHomeRefrigerator } from 'react-icons/cg';
import { BiCloset, BiVideoRecording, BiBed } from 'react-icons/bi';
import { GiConverseShoe, GiDoorHandle, GiCctvCamera, GiDesk, GiPrisoner } from 'react-icons/gi';
import { FiMonitor } from 'react-icons/fi';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { ImFire, ImEnter } from 'react-icons/im';
import { IoIosSnow } from 'react-icons/io';
import { FaFireExtinguisher, FaToilet, FaAddressCard } from 'react-icons/fa';

export interface RoomOption {
    name: string;
    component: React.ReactElement<any>;
}

type Props = {
    name: string;
};

const options: RoomOption[] = [
    {
        name: '에어컨',
        component: <IoIosSnow />,
    },
    {
        name: '세탁기',
        component: <CgSmartHomeWashMachine />,
    },
    {
        name: '옷장',
        component: <BiCloset />,
    },
    {
        name: '신발장',
        component: <GiConverseShoe />,
    },
    {
        name: '냉장고',
        component: <CgSmartHomeRefrigerator />,
    },
    {
        name: '인덕션',
        component: <ImFire />,
    },
    {
        name: '가스레인지',
        component: <ImFire />,
    },
    {
        name: '전자도어락',
        component: <GiDoorHandle />,
    },
    {
        name: '카드키',
        component: <FaAddressCard />,
    },
    {
        name: '공동현관',
        component: <ImEnter />,
    },
    {
        name: 'CCTV',
        component: <GiCctvCamera />,
    },
    {
        name: '화재경보기',
        component: <FaFireExtinguisher />,
    },
    {
        name: '비디오폰',
        component: <BiVideoRecording />,
    },
    {
        name: '비데',
        component: <FaToilet />,
    },
    {
        name: '침대',
        component: <BiBed />,
    },
    {
        name: '책상',
        component: <GiDesk />,
    },
    {
        name: 'TV',
        component: <FiMonitor />,
    },
    {
        name: '방범창',
        component: <GiPrisoner />,
    },
];

const RoomOptionWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    padding: 10px;
    /* border: 1px solid #efefef; */
    color: #777;
`;

const IconWrap = styled.div`
    font-size: 2rem;
    margin: 10px;
`;

function RoomOptionItem({ name }: Props) {
    const [element, setElement] = useState<React.ReactElement<any>>();
    useEffect(() => {
        const option = options.find((option) => option.name === name);
        if (option) setElement(option.component);
    });

    return (
        <RoomOptionWrap>
            <IconWrap>{element ? element : <AiOutlinePlusSquare />}</IconWrap>
            <span>{name}</span>
        </RoomOptionWrap>
    );
}

export default RoomOptionItem;
