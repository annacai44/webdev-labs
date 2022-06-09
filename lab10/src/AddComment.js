import React from 'react';
import {getHeaders} from './utils';

class AddComment extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            comments: []
        }
        // this.getCommentsFromServer();
    }

    // getCommentsFromServer () {
    //     fetch('/api/comments', {
    //         headers: getHeaders(),
    //     }).then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         this.setState({
    //             comments: data
    //         })
    //     })
    // }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (
            <form className="add-comment">
            <div className="input-holder">
                <input 
                    type="text"
                    className="comment-textbox" 
                    placeholder="Add a comment..." 
                    aria-label="Add a comment">
                </input>
            </div>
            <button className="link">Post</button>
        </form>
        )
    }
}

export default AddComment;