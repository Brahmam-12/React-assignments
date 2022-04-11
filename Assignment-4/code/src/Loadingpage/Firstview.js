import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Firstview() {
    return (
        <div className='frentframe'>
            <nav className='nav'>
                <h1>1.</h1><hr></hr>
            </nav>
            <div className='card'>
                <img src="https://brownspaceman.com/wp-content/uploads/2013/09/White_Hole.jpg" alt="starting" className='firstimage'></img>
                <div className='tex'>
                    <h1>10x Team 04</h1>
                    <Link to="/Lodingpage"><button>Enter</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Firstview;