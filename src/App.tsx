import React from 'react';
import './reset.css';
import './font.css';
import RenderWrapper from './Components/RenderWrapper';
import RoomList from './Components/RoomList';
import { rooms } from './lib/roomList';

function App() {
    return (
        <RenderWrapper>
            <RoomList rooms={rooms} />
        </RenderWrapper>
    );
}

export default App;
