import React from 'react';
import {getHeaders} from './utils';

class AddComment extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here

    }

    addComment () {
        // fetch POST: /api/posts/likes
        const url = '/api/comments';
        const postData = {
            post_id: this.props.postId,
            text: this.props.text
        }
        console.log('create like:', url);
        fetch (url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            // needs to trigger post redraw
            console.log(data);
            this.props.refreshPost();
        })
    }

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