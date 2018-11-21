import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                onOpenText: false,
                displayName: 'Fredy Henao'
            }
        }
    }
    render(){
        return(
            <Router>
                <div>
                    <Header />
                    <Route exact path={'/'} render={() => {
                        if(this.state.user){
                            return(
                                <Main user={this.state.user}/>
                            )
                        }else{
                            // Render Login
                        }
                    }}/>

                    <Route exact path={'/profile'} render={() => {
                        // Render Profile
                    }}/>
                    <Route exact path={'/user/:username'} render={({ params }) => {
                        // Render Profile pasando params.username
                    }}/>

                </div>
            </Router>
        );
    }
}

if(document.getElementById('app')){
    ReactDOM.render(<App />, document.getElementById('app'));
}
