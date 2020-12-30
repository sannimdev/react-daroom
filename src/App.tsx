import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './reset.css';
import './font.css';
import RenderWrapper from './Components/RenderWrapper';
import RoomList from './Components/RoomList';
import { rooms } from './lib/roomList';
import RoomDetail from './Components/RoomDetail';

function App() {
    return (
        <RenderWrapper>
            <Switch>
                <Route path='/' component={() => <RoomList rooms={rooms} />} exact />
                <Route path='/detail/:id' component={RoomDetail} />
            </Switch>
        </RenderWrapper>
    );
}

export default App;
