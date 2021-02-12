import React from 'react';
import styled from 'styled-components';
import CenterLayout from '../Components/CenterLayout';
import { Room, Rooms } from '../lib/roomList';
import Gnb from '../Components/Gnb';
import { Link } from 'react-router-dom';

//styled-components 영역
// const Title = styled.h1`
//     font-size: 3rem;
//     text-align: center;
//     font-weight: bold;
//     margin: 2rem 0;
// `;

const GridLayout = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    margin: 2rem 0;
`;

const ItemTitle = styled.div`
    padding: 10px;
    height: 2rem;
    line-height: 2rem;
    text-align: center;

    & > strong {
        padding: 0 0.2rem;
        letter-spacing: 0.005rem;
        font-size: 1.5rem;
        font-weight: 900;

        &.monthlyPrice {
        }

        &.depositPrice {
        }
    }
`;

const ItemContent = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    margin: 0 auto;

    p {
        width: 100%;
        padding-top: 0.5rem;
        min-height: 45px;
        line-height: 1.6rem;
        box-sizing: border-box;
        border-top: 1px solid #f4f4f4;
    }
`;

const Thumbnail = styled.div<{ src: string }>`
    background: url('${(props) => props.src}');
    width: 100%;
    height: 200px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-position: center center;
    background-size: 100%;
    transition: background-size 0.2s ease-out;
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 340px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: rgba(222, 222, 222, 0.3) 0px 0px 1rem 1rem;
    transition: box-shadow 0.4s ease-out;
    cursor: pointer;

    &:hover {
        box-shadow: rgba(222, 222, 222, 1) 0px 0px 2rem 1rem;
        border-color: #777;

        ${Thumbnail} {
            background-size: 120%;
        }
    }
`;

const LinkTo = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

// 컴포넌트 영역
type RoomItemProps = {
    room: Room;
};
function RoomItem({ room }: RoomItemProps) {
    const { title, img_url, price_title } = room;
    const [deposit, monthly] = price_title.split('/') || '?/?';
    return (
        <LinkTo to={`detail/${room.id}`}>
            <GridItem>
                <Thumbnail src={img_url} />
                <ItemTitle>
                    보증금 <strong className='depositPrice'>{deposit}</strong>
                    월세 <strong className='monthlyPrice'>{monthly}</strong>
                </ItemTitle>
                <ItemContent>
                    <p>{title}</p>
                </ItemContent>
            </GridItem>
        </LinkTo>
    );
}

function RoomList({ rooms }: Rooms) {
    if (!rooms) return null;
    return (
        <>
            <Gnb />
            <CenterLayout>
                <GridLayout>
                    {rooms.map((room: Room) => {
                        return (
                            <li key={room.id}>
                                <RoomItem room={room} />
                            </li>
                        );
                    })}
                </GridLayout>
            </CenterLayout>
        </>
    );
}

export default RoomList;
