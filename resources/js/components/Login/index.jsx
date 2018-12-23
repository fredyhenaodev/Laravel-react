import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from '../../assets/jss/components/login'
import injectSheet from 'react-jss'


const Login = ({classes,onAuth}) => (
    <div className={classes.root}>
        <p className={classes.text}>
            Necesitamos que inicies sesion con tu cuenta de GitHub
            para que puedas leer y escribir mensajes
        </p>
        <button
            className={classes.button}
            onClick={onAuth}
        >
            <FontAwesomeIcon icon='user-lock'/>  Login con GitHub
        </button>
    </div>
)

Login.prototypes = {
    classes: PropTypes.object.isRequired,
    onAuth: PropTypes.func.isRequired
}

export default injectSheet(Styles)(Login);