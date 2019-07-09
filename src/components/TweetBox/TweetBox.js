import React, {Component} from 'react';

import './TweetBox.css';

class TweetBox extends Component {

    state = {
        value : '',
    };

    handleChange = ({target: {value}})=>{
        this.setState(value = {value});
    };

    handleSubmit = () =>{
        
    }
    render() {
        
        const {value} = this.state;
        
        return(
            <div className="tweetbox">
                
                <textarea
                    rows ={3}
                    placeholder = "Composez votre tweet"
                    value = {value}
                    onChange = {this.handleChange}
                    className = {value.length > 50 && 'alert'}
                />
                <div className="action">
                    <span className="count">{50 - value.length}</span>
                    <button 
                        type='button'
                        disabled={value.length===0 || value.length>50}
                        onClick = {this.handleSubmit}
                    >
                        Tweet
                    </button>
                    
                </div>
            </div>

        );
    }
}

export default TweetBox;