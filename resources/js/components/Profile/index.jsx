import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

import Styles from '../../assets/jss/components/profile'
import injectSheet from "react-jss"

const Profile = ({classes, picture, displayName, username, emailAddress, location}) => (
    <div className={classes.root}>
        <img className={classes.avatar}  src={picture}/>
        <span className={classes.name}>{displayName}</span>
        <ul className={classes.data}>
            <li>
                <FontAwesomeIcon icon="user" /><span>{username}</span>
            </li>
            <li>
                <FontAwesomeIcon icon="envelope" /><span>{emailAddress}</span>
            </li>
            <li>
                <FontAwesomeIcon icon="map-marked" /><span>{location}</span>
            </li>
        </ul>
    </div>
)

Profile.proptypes = {
    classes: PropTypes.object.isRequired,
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default injectSheet(Styles)(Profile)
