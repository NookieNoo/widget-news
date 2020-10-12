import Post from "@models/Post";
import './styles/styles.css';
import React from 'react';
import {render} from 'react-dom';


const App = () => (
    <div>hello</div>
);
render(<App />, document.getElementById('app'));

const post = new Post('Webpack Post Title');
console.log('Post to String: ', post.toString());