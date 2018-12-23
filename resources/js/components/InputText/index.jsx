import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../../assets/jss/components/input-text'
// Import React-JSS
import injectSheet from 'react-jss'

const InputText = ({classes, userNameToReply, onCloseText, onSendText}) => (
    <form className={classes.form} onSubmit={onSendText}>
                <textarea className={classes.text} name={'text'} defaultValue={(userNameToReply) ? '@' + userNameToReply : ''}>
                </textarea>
        <div className={classes.buttons}>
            <button className={classes.close} onClick={onCloseText}>Cerrar</button>
            <button className={classes.send} type={'submit'}>Enviar</button>
        </div>
    </form>
)

InputText.proptypes = {
    classes: PropTypes.object.isRequired,
    userNameToReply: PropTypes.string.isRequired,
    onCloseText: PropTypes.func.isRequired,
    onSendText: PropTypes.func.isRequired
}

export default injectSheet(Styles)(InputText)