import React from 'react';
import styled from 'styled-components';
import { Room, Rooms } from '../lib/roomList';

//styled-components 영역
const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-weight: bold;
    margin: 2rem 0;
`;

const GridLayout = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    margin: 2rem 0;
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 350px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: rgba(222, 222, 222, 0.3) 0px 0px 1rem 1rem;
`;

const ItemTitle = styled.div`
        padding: 10px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        height: 2rem;
        line-height: 2rem;
    }
`;

const ItemContent = styled.div`
    padding: 10px;
    margin: auto 0;
`;

const Thumbnail = styled.div<{ src: string }>`
    background: url('${(props) => props.src}');
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center center;
`;

// 컴포넌트 영역
type RoomItemProps = {
    room: Room;
};
function RoomItem({ room }: RoomItemProps) {
    const { title, img_url, price_title } = room;
    return (
        <GridItem>
            <ItemTitle>{price_title || '가격정보 없음'}</ItemTitle>
            <Thumbnail src={img_url} />
            <ItemContent>
                <p>{title}</p>
            </ItemContent>
        </GridItem>
    );
}

function RoomList({ rooms }: Rooms) {
    if (!rooms) return null;
    return (
        <div>
            <Title>방 목록</Title>
            <GridLayout>
                {rooms.map((room: Room) => {
                    return (
                        <li key={room.id}>
                            <RoomItem room={room} />
                        </li>
                    );
                })}
            </GridLayout>
        </div>
    );
}

export default RoomList;
