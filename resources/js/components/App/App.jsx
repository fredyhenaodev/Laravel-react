import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "../Header";
import Main from '../Main';
import 'normalize-css';

export default class App extends Component{
    constructor(){
        super();
        this.state ={
            user:{
                photoURL: 'https://pbs.twimg.com/profile_images/1039065709425221632/vhlKamoy_400x400.jpg',
                email: 'fredy@gmail.com',
                onOpenText: false
            }
        }
    }
    render(){
        return(
            <div>
                <Header />
                <Main user={this.state.user}/>
            </div>
        );
    }
}

if(document.getElementById('app')){
    ReactDOM.render(<App />, document.getElementById('app'));
}
