import React, { Component } from 'react';
import Styles from '../../assets/jss/components/header';
// Import React-JSS
import injectSheet from 'react-jss'


class Header extends Component{
    render(){
        const {classes} = this.props;
        return(
            <header className={classes.root}>
                <h1 className={classes.logo}>React</h1>
            </header>
        );
    }
}

export default injectSheet(Styles)(Header);
