import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from '../../assets/jss/components/profilebar';
import injectSheet from 'react-jss';

class ProfileBar extends Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <figure >
                    <img className={classes.avatar} src={this.props.picture} />
                </figure>
                <span className={classes.username}>Hola @{this.props.username}</span>
                <button onClick={this.props.onOpenText} className={classes.button}>
                    <div>
                        <FontAwesomeIcon icon="edit"/> Tweet!
                    </div>
                </button>
            </div>
        )
    }
}

export default injectSheet(Styles)(ProfileBar)