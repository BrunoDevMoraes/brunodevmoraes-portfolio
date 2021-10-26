import React from 'react'
import './Header.css';
import lightmode from '../../images/light-mode.svg';
import sidemenu from '../../images/side-menu.svg';

export default function Header() {
    return (
        <div id="header">
            <h3>Bruno's Software Development Portfolio</h3>
            <div>
                <button>
                  <img src={ lightmode } alt="Light mode button"/>
                </button>
                <button>PT</button>
                <button>
                <img src={ sidemenu } alt="Side menu button"/>
                </button>
            </div>
        </div>
    )
}
