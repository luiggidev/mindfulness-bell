import React, { Component } from 'react';
import './Quotes.css';

class Quotes extends Component {
    quoteFetch = () => {
        let quoteContent = document.getElementById("quote");

        fetch("https://api.quotable.io/random?author=Buddha")
            .then((res) => res.json())
            .then((data) => (quoteContent.innerText = '"' + data.content + '"'));
    };
    
    componentDidMount() {
        this.quoteFetch();
    }

    render() {
        return (
        <div id="quote-block">
            <blockquote id="quote"></blockquote>
            <div id="author"> - Buddha</div>
        </div>
        );
    }
}

export default Quotes;