import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "../Header";
import Main from '../Main';
import 'normalize-css';

export default class App extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

if(document.getElementById('app')){
    ReactDOM.render(<App />, document.getElementById('app'));
}
