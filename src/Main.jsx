import {useState} from 'react';
import Navigation from './Navigation.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'

export default function Main() {
    return (
        <div>
            <Navigation/>
            <Home/>
            <Footer/>
        </div>
    )
}