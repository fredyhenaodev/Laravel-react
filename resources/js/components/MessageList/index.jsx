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
                        <Message text={msg.text}></Message>
                    )
                })}
            </div>
        )
    }
}
