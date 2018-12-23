import React, { Component} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from '../../assets/jss/components/login'
import injectSheet from 'react-jss'

class Login extends Component{
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <p className={classes.text}>
                    Necesitamos que inicies sesion con tu cuenta de GitHub
                    para que puedas leer y escribir mensajes
                </p>
                <button
                    className={classes.button}
                    onClick={this.props.onAuth}
                >
                  <FontAwesomeIcon icon='user-lock'/>  Login con GitHub
                </button>
            </div>
        )
    }
}

export default injectSheet(Styles)(Login);