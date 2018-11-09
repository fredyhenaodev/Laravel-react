import React, {Component} from 'react';
import MessageList from '../MessageList';
import InputText from '../InputText';
import ProfileBar from '../ProfileBar';

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
                    date: Date.now(),
                    retweets: 0,
                    favorites: 0
                },
                {
                    id: shortid.generate(),
                    text: 'Este es un Nuevo Mensaje',
                    picture: 'https://pbs.twimg.com/profile_images/1039065709425221632/vhlKamoy_400x400.jpg',
                    displayName: 'FredyHenao',
                    username: 'FredyH',
                    date: Date.now() - 1800000,
                    retweets: 0,
                    favorites: 0
                }
            ]
        }

        this.handleSendText = this.handleSendText.bind(this);
        this.handleCloseText = this.handleCloseText.bind(this);
        this.handleOpenText = this.handleOpenText.bind(this);
    }

    handleOpenText(event) {
        event.preventDefault();
        this.setState({openText: true});
    }

    handleSendText(event) {
        event.preventDefault();
        let newMessage = {
            id: shortid.generate(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            picture: this.props.user.photoURL,
            date: Date.now(),
            text: event.target.text.value
        }
        this.setState({
            messages: this.state.messages.concat(newMessage),
            openText: false
        });
    }

    handleCloseText(event) {
        event.preventDefault();
        this.setState({openText: false});
    }

    handleRetweet (){

    }

    handleFavorite (){
        
    }

    renderOpenText() {
        if (this.state.openText) {
            return (
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                />
            )
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

                {this.renderOpenText()}
                <MessageList
                    messages={this.state.messages}
                    onRetweet={this.handleRetweet}
                    onFavorite={this.handleFavorite}
                ></MessageList>
            </div>
        );
    }
}
