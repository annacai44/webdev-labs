import React from 'react';
import {getHeaders} from './utils';

class FollowButton extends React.Component {
  
    constructor(props) {
        super(props);

        // binding "this":
        // not intuitive. helps disambiguate between what 'this' is
        // this.toggleFollow = this.toggleFollow.bind(this);
        this.followUser = this.followUser.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
        this.state = {following_id: null}
        
        

    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }


    // toggleFollow () {
         
    //     if (this.state.following) {
    //         this.followUser();
    //     } else {
    //         this.unfollowUser();
    //     }

        
    // }

  


    followUser () {
        const url = '/api/following';
        const userData = {
            user_id: this.props.user_id
        }
        console.log('create follow:', url);
        fetch (url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(userData)
        }).then(response => response.json())
        .then(data => {
            // needs to trigger post redraw
            this.setState({following_id: data.id});
            console.log(data);
       
            

        })
        
    }

    unfollowUser () {
        // fetch DELETE: /api/posts/likes/{likeId}
        const url = '/api/following/' + this.state.following_id;
        console.log('remove follow:', url);
        fetch (url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            // needs to trigger post redraw
            this.setState({following_id: null});
            console.log(data);
            
           
      
        })
    }

    render () { 
        // REPLACE bookmarkId WITH CONDITIONAL ON WHETHER BUTTON SHOULD BE 
        // FOLLOW OR UNFOLLOW
        if (this.state.following_id) {
        
        
        return (
            <button 
                className= "unfollow"
                onClick={this.unfollowUser}>
                Unfollow
            </button>
        )
    }
    else {
        return (
            <button 
                className= "follow"
                onClick={this.followUser}>
                Follow
            </button>
        )
    }
}
}

export default FollowButton;
