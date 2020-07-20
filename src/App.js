import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepages/homepage.component'

const HatsPage = () => ( <
    div >
    <
    h1 > HatsPage < /h1>< /
    div >
);

function App() {
    return ( <
        div >
        <
        Switch >
        <
        Route exact path = '/'
        component = { HomePage }
        /> <
        Route exact path = '/Hats'
        component = { HatsPage }
        />  <
        /Switch> <
        /
        div >
    );
}

export default App;