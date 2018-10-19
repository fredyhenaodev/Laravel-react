import React, {Component} from 'react';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Styles from '../../assets/jss/components/message';
import injectSheet from "react-jss";


class Message extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props;
        let dateFormat = this.props.date;
        return (
            <div className={classes.root}>
                <div className={classes.user}>
                    <figure>
                        <img className={classes.avatar} src={this.props.picture}/>
                    </figure>
                    <span className={classes.displayName}>{this.props.displayName}</span>
                    <span className={classes.username}>{this.props.username}</span>
                    <span className={classes.date}><Moment fromNow>{dateFormat}</Moment></span>
                </div>
                <h3 className={classes.text}>{this.props.text}</h3>
                <div className={classes.button}>
                    <div className={classes.icon}><FontAwesomeIcon icon="reply" /></div>
                    <div className={classes.icon}><FontAwesomeIcon icon="retweet" /></div>
                    <div className={classes.icon}><FontAwesomeIcon icon="star" /></div>
                </div>
            </div>
        )
    }
}

export default injectSheet(Styles)(Message);
