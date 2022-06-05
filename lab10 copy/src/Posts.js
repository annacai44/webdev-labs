import React from 'react';
import Post from './Post';
import {getHeaders} from './utils';

class Posts extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {posts : []};
        
    }
    getPostsFromServer() {
        fetch('/api/posts', {headers : getHeaders()})
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data});
            

        })}
        

    

    componentDidMount() {
        this.getPostsFromServer();

    }
    render () {
    return (
        <div id="posts">
                {
                    this.state.posts.map(post => {
                        return (
                            <Post model={post} key={'post-' + post.id} />
                        )
                    })
                }
            </div>
    )}
    
}

export default Posts;