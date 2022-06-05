import React from 'react';
import BookmarkButton from './BookmarkButton';
import LikeButton from './LikeButton';
import { getHeaders } from './utils';


class Post extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {post : props.model};
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }
    refresh() {
        const url = '/api/posts/' + this.state.post.id;
        fetch (url, {headers : getHeaders()})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({post: data});
            
        }
        )}
    

    
    render () {
    const post = this.state.post;
    return ( 
    <section className ="card">
         <div className = "header">
           {post.user.username}

         </div>
         <img src = {post.image_url}></img>
         <LikeButton 
         likeId = {post.current_user_like_id}
          postId = {post.id} 
          refresh = {this.refresh}
          />
        <BookmarkButton 
        bookmarkId = {post.current_user_bookmark_id} 
        postId = {post.id} 
        refresh = {this.refresh}/>
         <div className = "caption"> <p> <strong>{post.user.username}</strong>{post.caption}</p></div>
    </section>
    )
    }
}

export default Post;