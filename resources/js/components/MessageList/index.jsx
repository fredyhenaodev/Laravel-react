import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'
import Styles from '../../assets/jss/components/message-list'
import injectSheet from "react-jss"

const MessageList = ({classes ,messages, onRetweet, onFavorite, onReplyTweet}) => (
    <div className={classes.root}>
        {messages.map((msg) => {
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
                    onRetweet={() => onRetweet(msg.id)}
                    onFavorite={() => onFavorite(msg.id)}
                    onReplyTweet={() => onReplyTweet(msg.id, msg.username)}
                />
            )
        }).reverse()}
    </div>
)

MessageList.proptypes = {
    classes: PropTypes.object.isRequired,
    onRetweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default injectSheet(Styles)(MessageList)
