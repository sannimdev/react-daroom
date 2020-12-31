import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './reset.css';
import './font.css';
import RoomList from './Components/RoomList';
import RoomDetail from './Components/RoomDetail';
import { rooms } from './lib/roomList';
import { roomDetail } from './lib/roomDetail';
import FullLayout from './Components/FullLayout';

function App() {
    return (
        <FullLayout>
            <Switch>
                <Route path='/' component={() => <RoomList rooms={rooms} />} exact />
                <Route path='/detail/:id' component={() => <RoomDetail room={roomDetail} />} />
            </Switch>
        </FullLayout>
    );
}

export default App;
