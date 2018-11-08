import React, {Component} from 'react'
import Styles from '../../assets/jss/components/input-text';
// Import React-JSS
import injectSheet from 'react-jss'

class InputText extends Component{
    render(){
        const {classes} = this.props;
        return(
            <form className={classes.form} onSubmit={this.props.onSendText}>
                <textarea className={classes.text} name={'text'}></textarea>
                <div className={classes.buttons}>
                    <button className={classes.close} onClick={this.props.onCloseText}>Cerrar</button>
                    <button className={classes.send} type={'submit'}>Enviar</button>
                </div>
            </form>
        )
    }
}

export default  injectSheet(Styles)(InputText);