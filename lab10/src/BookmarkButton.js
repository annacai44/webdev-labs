import React from 'react';
import Post from './Post';
import {getHeaders} from './utils';

class BookmarkButton extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.createBookmark = this.createBookmark.bind(this);
        this.removeBookmark = this.removeBookmark.bind(this);

    }

    componentDidMount() {
        // fetch posts and then set the state...
    }
    toggleBookmark() {
        if (this.props.bookmarkId) {
            this.removeBookmark();
        } else {
            this.createBookmark();
        }
    }
    createBookmark() {
        //fetch Post : /api.post/Bookmarks
        const url = '/api/bookmarks';
        const postData = {post_id : this.props.postId};
        fetch (url, 
            {headers : getHeaders(), method : 'POST', body : JSON.stringify(postData)})
        .then(res => res.json())
        .then(data => {
            this.setState({bookmarkId : data.id});
            this.props.refresh();
            console.log(data);
        })

    }

    removeBookmark() {
        //fetch DELETE Post : /api.post/Bookmarks/{BookmarkId}
        const url = '/api/bookmarks/' + this.props.bookmarkId;
        fetch (url, {headers : getHeaders(), method : 'DELETE'})
        .then(res => res.json())
        .then(data => {
            this.props.refresh();
            console.log(data );

        })
    }

    
    render () {
    const bookmarkId =  this.props.bookmarkId;
    const BookmarkClass = bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark';
    return ( 
      <button 
      onClick = {this.toggleBookmark} > 
      <i className={BookmarkClass}></i>
       </button>
    )
    }
}

export default BookmarkButton;