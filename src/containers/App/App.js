import React from 'react';

import './App.css';
import {tweets} from '../../constants';
import Tweet from '../../components/Tweet';
import MyName from '../../components/MyName';
import Home from '../../containers/Home/Home';
import TweetBox from '../../components/TweetBox/TweetBox';
import TweetBoxTest from '../../components/TweetBoxTest/TweetBoxTest';




const App = () => (
    <Home>
       
    <div id = "main">
    <TweetBoxTest /> 
        
        
   
    </div>
    </Home>
);

export default App;
