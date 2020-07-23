import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepages/homepage.component'
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from "./firebase/firebase.utils";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unSubscribeFromAuth = null;

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log(user);
        })

    }
    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return ( <
            div >
            <
            Header currentUser = { this.state.currentUser }
            / > <
            Switch >
            <
            Route exact path = '/'
            component = { HomePage }
            /> <
            Route exact path = '/shop'
            component = { Shop }
            />  <
            Route exact path = '/signin'
            component = { SignInAndSignUp }
            /> < /
            Switch > <
            /
            div >
        );
    }


}

export default App;