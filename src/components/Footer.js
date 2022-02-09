import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="flex justify-center text-base">
                <div className='absolute bottom-6'>
                    Made with ☸️ by <a className="underline" href="https://github.com/luiggidev">Luiggi Bellincanta</a>
                </div>
            </footer>
        );
    }
}

export default Footer;