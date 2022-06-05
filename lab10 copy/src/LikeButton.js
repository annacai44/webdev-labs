import React from 'react';
import Post from './Post';
import {getHeaders} from './utils';

class LikeButton extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.toggleLike = this.toggleLike.bind(this);
        this.createLike = this.createLike.bind(this);
        this.removeLike = this.removeLike.bind(this);

    }

    componentDidMount() {
        // fetch posts and then set the state...
    }
    toggleLike() {
        if (this.props.likeId) {
            this.removeLike();
        } else {
            this.createLike();
        }
    }
    createLike() {
        //fetch Post : /api.post/likes
        const url = '/api/posts/likes';
        const postData =   {post_id : this.props.postId};
        fetch (url, 
            {headers : getHeaders(), method : 'POST', body : JSON.stringify(postData)})
        .then(res => res.json())
        .then(data => {
            this.setState({likeId : data.id});
            this.props.refresh();
            console.log(data);
        })

    }

    removeLike() {
        //fetch DELETE Post : /api.post/likes/{likeId}
        const url = '/api/posts/likes/' + this.props.likeId;
        fetch (url, {headers : getHeaders(), method : 'DELETE'})
        .then(res => res.json())
        .then(data => {
            this.props.refresh();
            console.log(data );

        })
    }

    
    render () {
    const likeId =  this.props.likeId;
    const heartClass = likeId ? 'fas fa-heart' : 'far fa-heart';
    return ( 
      <button 
      onClick = {this.toggleLike} > 
      <i className={heartClass}></i>
       </button>
    )
    }
}

export default LikeButton;