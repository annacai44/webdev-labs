import React from 'react';
import {getHeaders} from './utils';

class FollowButton extends React.Component {
  
    constructor(props) {
        super(props);

        // binding "this":
        // not intuitive. helps disambiguate between what 'this' is
        this.toggleFollow = this.toggleFollow.bind(this);
        this.followUser = this.followUser.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    toggleFollow () {
        // console.log(this.props.BookmarkId)
        // if (this.props.followingId) {
            console.log('bye');
            this.followUser();
        // } else {
        //     console.log('hi');
        //     this.unfollowUser();
        // }
    }



    followUser () {
        const url = '/api/following';
        const userData = {
            user_id: this.props.followingId
        }
        console.log('create follow:', url);
        fetch (url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(userData)
        }).then(response => response.json())
        .then(data => {
            // needs to trigger post redraw
            console.log("SO COOL")
            console.log(data);
            // this.props.refreshPost();
        })
    }

    unfollowUser () {
        // fetch DELETE: /api/posts/likes/{likeId}
        const url = '/api/following/' + this.props.followingId;
        console.log('remove follow:', url);
        fetch (url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            // needs to trigger post redraw
            console.log(data);
            // this.props.refreshPost();
        })
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        const followClass = bookmarkId ? 'link following active' : 'link following';
        return (
            <button 
                className={followClass}
                onClick={this.toggleFollow}
                aria-checked="false">
                following
            </button>
        )
    }
}

export default FollowButton;
