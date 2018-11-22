import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from "../Header";
import Profile from "../Profile";
import Main from '../Main';
import 'normalize-css';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                photoURL: 'https://pbs.twimg.com/profile_images/1039065709425221632/vhlKamoy_400x400.jpg',
                email: 'fredy@gmail.com',
                onOpenText: false,
                displayName: 'Fredy Henao',
                location: 'Colombia'
            }
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path={'/'} render={() => {
                        if (this.state.user) {
                            return (
                                <Main user={this.state.user}/>
                            )
                        } else {
                            // Render Login
                        }
                    }}/>

                    <Route exact path={'/profile'} render={() =>
                        (
                            <Profile
                                picture={this.state.user.photoURL}
                                username={this.state.user.email.split('@')[0]}
                                displayName={this.state.user.displayName}
                                location={this.state.user.location}
                                emailAddress={this.state.user.email}
                            />
                        )
                    }/>
                    <Route exact path={'/user/:username'} render={({params}) => {
                        return (
                            <Profile
                                username={params.username}
                                displayName={params.username}
                            />
                        )
                    }}/>

                </div>
            </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
