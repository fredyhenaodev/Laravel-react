import React, {Component} from 'react';
import MessageList from '../MessageList';
import InputText from '../InputText';

var shortid = require('shortid');
export default class Main extends Component {

    constructor() {
        super()
        this.state = {
            openText: false,
            messages: [
                {
                    id: shortid.generate(),
                    text: 'Mensaje del Tweet',
                    picture: 'https://pbs.twimg.com/profile_images/1039065709425221632/vhlKamoy_400x400.jpg',
                    displayName: 'FredyHenao',
                    username: 'FredyH',
                    date: Date.now()
                },
                {
                    id: shortid.generate(),
                    text: 'Este es un Nuevo Mensaje',
                    picture: 'https://pbs.twimg.com/profile_images/1039065709425221632/vhlKamoy_400x400.jpg',
                    displayName: 'FredyHenao',
                    username: 'FredyH',
                    date: Date.now() - 1800000
                }
            ]
        }
    }

    handleOpenText(event)
    {
        event.preventDefault();
        this.setState({ openText: true });
    }

    renderOpenText()
    {
        if(this.state.openText)
        {
            return <InputText />
        }
    }

    render() {
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                />
                {this.renderOpenText}
                <MessageList messages={this.state.messages}></MessageList>
            </div>
        );
    }
}
