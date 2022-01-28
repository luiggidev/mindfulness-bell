import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {
    componentDidMount() {
        const numb = document.querySelector(".number");
        let counter = 0;
    
        setInterval(() => {
          if(counter == 100 ){
            clearInterval();
          }else{
            counter+=1;
            numb.textContent = counter + "%";
          }
        }, 80);
    }


    render() {
        return (
        <div className="row">
            <div className="circular">
                <div className="inner"></div>

                <div className="number">100%</div>

                <div className="circle">
                <div className="bar left">
                    <div className="progress"></div>
                </div>
                <div className="bar right">
                    <div className="progress"></div>
                </div>
                </div>
            </div>
        </div>
        

        );
    }
}

export default ProgressBar;