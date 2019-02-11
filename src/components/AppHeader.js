import React, { Component } from "react";
import '../styles/AppHeader.css';

class AppHeader extends Component{
    render(){
        return (
            <header className="navbar">
                <ul>
                    <li>Nav Item 1</li>
                    <li>Nav Item 2</li>
                    <li>Nav Item 3</li>
                </ul>
            </header>
        )
    }
}

export default AppHeader