import React, {Component} from 'react';
import Message from '../Message';
import Styles from '../../assets/jss/components/message-list';
import injectSheet from "react-jss";

class MessageList extends Component {
    constructor(props) {
        super(props)
        this.onRetweet = this.onRetweet.bind(this)
        this.onFavorite = this.onFavorite.bind(this)
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                {this.props.messages.map((msg) => {
                    return (
                        <Message
                            key={msg.id}
                            text={msg.text}
                            picture={msg.picture}
                            displayName={msg.displayName}
                            username={msg.username}
                            date={msg.date}
                            numRetweets={msg.retweets}
                            numFavorites={msg.favorites}
                            onRetweet={() => this.props.onRetweet(msg.id)}
                            onFavorite={() => this.props.onFavorite(msg.id)}
                        />
                    )
                }).reverse()}
            </div>
        )
    }
}

export default injectSheet(Styles)(MessageList);
