import React ,{Component} from 'react';
import {tweets} from '../../constants';
import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox/TweetBox';

import './Home.css';

class Home extends Component {

    render() {

        return(
            <div className="homepage">
                <div className="tweets">
                    <label>Entrez votre tweet</label>
                    <TweetBox />
                    {tweets.map((tweet, index) =>(
                            
                            <Tweet
                                key = {index}
                                {...tweet}
                                /*avatar =  {tweet.avatar}
                                fullname = {tweet.fullname}
                                date = {tweet.date}
                                content = {tweet.content} */

                            
                            />
                            )
                        )} 
                </div>
            </div>
        );
    }

}



export default Home;