import React from 'react';
import Nav from '../navbar/Nav';
import '../home/home.css'
import Slider from '../slider/Slider'
import Button from '../buttons/Button';
import Posts from '../posts/Posts';

function Home() {
    return (
        <div className="App">
            <Nav/>
            <Slider/>
            <Button/>
            <Posts/>

      </div>
    )
}

export default Home
