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
        if (this.props.following) {
            console.log('following user');
            this.followUser();
        } else {
            console.log('unfollowing user');
            this.unfollowUser();
        }
    }


    followUser () {
        const url = '/api/following';
        const userData = {
            user_id: this.props.following.id
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
            // this.props.refreshSuggestion();
        })
    }

    unfollowUser () {
        // fetch DELETE: /api/posts/likes/{likeId}
        const url = '/api/following/' + this.props.following.id;
        console.log('remove follow:', url);
        fetch (url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            // needs to trigger post redraw
            console.log(data);
            // this.props.refreshSuggestion();
        })
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        // REPLACE bookmarkId WITH CONDITIONAL ON WHETHER BUTTON SHOULD BE 
        // FOLLOW OR UNFOLLOW
        const followClass = bookmarkId ? 'link following active' : 'link following';
        return (
            <button 
                role="switch"
                className={followClass}
                onClick={this.toggleFollow}
                aria-checked="false"
                aria-label={this.props.following.username}>
                follow
            </button>
        )
    }
}

export default FollowButton;
