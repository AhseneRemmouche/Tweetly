import React from 'react';


const MyName = (props) => (
    <div>
        <h3>This is my app</h3>
        <p>{props.name}</p>
        <p>{props.date}</p>
    </div>
);

export default MyName;