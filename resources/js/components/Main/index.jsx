import React, {Component} from 'react';
import MessageList from '../MessageList';

var shortid = require('shortid');
export default class Main extends Component {

    constructor() {
        super()
        this.state = {
            messages: [
                {
                    id: shortid.generate(),
                    text: 'Mensaje del Tweet',
                    picture: 'https://pbs.twimg.com/profile_images/1039065709425221632/vhlKamoy_400x400.jpg',
                    displayName: 'FredyHenao',
                    username: 'FredyH',
                    date: Date.now()
                }
            ]
        }
    }

    render() {
        return (
            <MessageList messages={this.state.messages}></MessageList>
        );
    }
}
