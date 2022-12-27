import {useState} from 'react';
import Navigation from './Navigation.jsx'
import Home from './Home.jsx'

const Main = function() {
    return (
        <div>
            <Navigation/>
            <Home/>
        </div>
    )
}

export default Main;