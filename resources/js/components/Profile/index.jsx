import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Styles from '../../assets/jss/components/profile';
import injectSheet from "react-jss";

class Profile extends Component{
    constructor (props){
        super(props)
    }
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <img className={classes.avatar}  src={this.props.picture}/>
                <span className={classes.name}>{this.props.displayName}</span>
                <ul className={classes.data}>
                    <li>
                        <FontAwesomeIcon icon="user" /><span>{this.props.username}</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="envelope" /><span>{this.props.emailAddress}</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="map-marked" /><span>{this.props.location}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default injectSheet(Styles)(Profile);
