import React, {Component} from 'react';
import Message from '../Message';

export default class MessageList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.messages.map((msg) => {
                    return (
                        <Message
                            key={msg.id}
                            text={msg.text}
                            picture={msg.picture}
                            displayName={msg.displayName}
                            username={msg.username}
                            date={msg.date}
                        />
                    )
                })}
            </div>
        )
    }
}
