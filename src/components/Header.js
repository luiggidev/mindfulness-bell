import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div>
            <img
                src="/images/buddhism.svg"
                alt="buddhism symboll"
                className="buddhism"
            />
            <h1>Mindfulness Bell</h1> 
        </div>

        );
    }
}

export default Header;