import { func } from "prop-types";
import React, { Component } from "react";
import Header from './Header.js';

import '../styles/App.css';

function App(props) {
    return <div>
    <Header />
        <h1>Hello World</h1>
    </div>;
}

export default App;