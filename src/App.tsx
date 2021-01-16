import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './reset.css';
import './font.css';
import RoomList from './pages/RoomList';
import RoomDetail from './pages/RoomDetail';
import { rooms } from './lib/roomList';
import { roomDetail } from './lib/roomDetail';
import FullLayout from './Components/FullLayout';
import Footer from './Components/Footer';

function App() {
    return (
        <FullLayout>
            <Switch>
                <Route path='/' component={() => <RoomList rooms={rooms} />} exact />
                <Route path='/detail/:id' component={() => <RoomDetail room={roomDetail} />} />
            </Switch>
            <Footer />
        </FullLayout>
    );
}

export default App;
