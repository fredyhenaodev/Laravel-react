import React, {Component} from 'react';
import Moment from 'react-moment';

export default class Message extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let dateFormat = this.props.date
        return (
            <div key={msg.id}>
                <div>
                    <figure>
                        <img src={this.props.picture}/>
                    </figure>
                    <span>{this.props.displayName}</span>
                    <span>{this.props.username}</span>
                    <Moment>{dateFormat}</Moment>
                </div>
                <h3>{this.props.text}</h3>
                <div>
                    <span className='fa fa-reply'></span>
                    <span className='fa fa-retweet'></span>
                    <span className='fa fa-star'></span>
                </div>
            </div>
        )
    }
}
