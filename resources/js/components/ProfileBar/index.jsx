import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import Styles from '../../assets/jss/components/profilebar'
import injectSheet from 'react-jss'

const ProfileBar = ({classes, picture, username, onOpenText}) => (
    <div className={classes.root}>
        <Link to={'/profile'}>
            <figure>
                <img className={classes.avatar} src={picture}/>
            </figure>
        </Link>
        <span className={classes.username}>Hola @{username}</span>
        <button onClick={onOpenText} className={classes.button}>
            <div>
                <FontAwesomeIcon icon="edit"/> Tweet!
            </div>
        </button>
    </div>
)

ProfileBar.proptypes = {
    classes: PropTypes.object.isRequired,
    picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onOpenText: PropTypes.func.isRequired
}

export default injectSheet(Styles)(ProfileBar)