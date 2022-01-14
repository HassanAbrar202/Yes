import React from 'react'
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import Button4 from './Button4';
import './button.css';
import { Link } from 'react-router-dom';
function Button() {
    return (
        <div className='container'>
        <div className='buttons'>
        <Link to="/Button1"><button class="button button1">Competition Registeration</button></Link>
        <Link to="/Button2"><button class="button button2">Signatory Compaign</button></Link>
        <Link to="/Button3"><button class="button button3">E-Certificate</button></Link>
        <Link to="/Button4"><button class="button button4">Ticket</button></Link>
        </div>
        </div>
    )
}

export default Button
