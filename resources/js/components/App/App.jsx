import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import firebase from '@firebase/app'
import firebaseAuth from '@firebase/auth'
import ReactDOM from 'react-dom'
import Header from "../Header"
import Profile from "../Profile"
import Main from '../Main'
import Login from '../Login'
import 'normalize-css'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            user: null
        }
        this.handleOnAuth = this.handleOnAuth.bind(this)
    }

    handleOnAuth() {
        const provider = new firebaseAuth.auth.GithubAuthProvider()
        firebaseAuth.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesión`))
            .catch(error => console.error(`Error: ${error.code}: ${error.message}`))
    }

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" render={() => {
                        if (this.state.user) {
                            return (
                                <Main user={this.state.user}/>
                            )
                        } else {
                            return (
                                <Login onAuth={this.handleOnAuth}/>
                            )
                        }
                    }}/>

                    <Route exact path="/profile" render={() =>
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
                    <Route exact path="/user/:username" render={({match}) =>
                        (
                            <Profile
                                username={match.params.username}
                                displayName={match.params.username}
                            />
                        )
                    }/>
                </div>
            </Router>
        );
    }
}


// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCuBYMNZHj-9y7-BdPPSot0mpptoBVgmd8",
    authDomain: "laravel-react-aab66.firebaseapp.com",
    databaseURL: "https://laravel-react-aab66.firebaseio.com",
    projectId: "laravel-react-aab66",
    storageBucket: "laravel-react-aab66.appspot.com",
    messagingSenderId: "698194007439"
})

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'))
}
