import React from 'react';

import './Tweet.css';




const Tweet = ({avatar, fullname, date, content}) => (
    <div className='tweet'>
        
        <img src={avatar} alt=""/>
        <strong>.</strong>
        <strong>{date}</strong>
        <p>{content}</p>
    </div>
);

export default Tweet;