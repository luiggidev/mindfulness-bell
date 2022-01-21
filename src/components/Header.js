import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div>
            <img
                src="/images/buddhism.svg"
                //!add this to css
                // style="height: 100px; width: 100px"
                alt="buddhism symboll"
                className="buddhism"
            />
            <h1 className="font-size-large">Mindfulness Bell</h1> 
        </div>

        );
    }
}

export default Header;