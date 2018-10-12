import React, { Component } from 'react';
import Styles from './header.css';
// Import React-JSS
import injectSheet from 'react-jss'

export default class Header extends Component{
    render(){
        return(
            <header className={Styles.root}>
                <h1 className={Styles.logo}>Fredy</h1>
            </header>
        );
    }
}
