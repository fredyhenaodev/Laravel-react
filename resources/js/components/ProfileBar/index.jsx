import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import injectSheet from 'react-jss';

export default class ProfileBar extends Component{
    constructor(){
        super();
    }

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
                        <FontAwesomeIcon icon={faEdit}/> Tweet!
                    </div>
                </button>
            </div>
        )
    }
}