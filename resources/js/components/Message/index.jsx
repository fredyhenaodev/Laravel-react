import React, {Component} from 'react';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Styles from '../../assets/jss/components/message';
import injectSheet from "react-jss";


class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pressFavorite: false,
            pressRetweet: false
        }
        this.onPressRetweet = this.onPressRetweet.bind(this)
        this.onPressFavorite = this.onPressFavorite.bind(this)
    }

    onPressRetweet () {
        this.props.onRetweet()
        this.setState({
            pressRetweet: true
        })
    }

    onPressFavorite () {
        this.props.onFavorite()
        this.setState({
            pressFavorite: true
        })
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
                <div
                    className={classes.button}
                    onClick={this.props.onReplyTweet}
                >
                    <div className={classes.icon}>
                        <FontAwesomeIcon icon="reply" />
                    </div>
                    <div
                        className={(this.state.pressFavorite) ? classes.rtGreen : ''}
                        onClick={this.onPressFavorite}
                    >
                        <FontAwesomeIcon icon="retweet" />
                        <span className={classes.num}>{this.props.numFavorites}</span>
                    </div>
                    <div
                        className={(this.state.pressRetweet) ? classes.fvYellow : ''}
                        onClick={this.onPressRetweet}
                    >
                        <FontAwesomeIcon icon="star" />
                        <span className={classes.num}>{this.props.numRetweets}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default injectSheet(Styles)(Message);
