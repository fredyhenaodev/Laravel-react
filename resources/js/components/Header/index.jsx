import React from 'react'
import Styles from '../../assets/jss/components/header'
// Import React-JSS
import injectSheet from 'react-jss'


const Header = ({classes}) => (
    <header className={classes.root}>
        <h1 className={classes.logo}>React</h1>
    </header>
)

export default injectSheet(Styles)(Header)
