import React from 'react';
import FollowButton from './FollowButton';
import {getHeaders} from './utils';

class Suggestion extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            suggestion: props.model
        }
        this.refreshSuggestionDataFromServer = this.refreshSuggestionDataFromServer.bind(this);
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    refreshSuggestionDataFromServer () {
        // re-fetch the post:
        const url = '/api/suggestions/' + this.state.suggestion.id;
        fetch(url, {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                suggestion: data
            })
        })
    }

    render () {
        const suggestion = this.state.suggestion;
        return (
            <section>
                <img className="pic" src={suggestion.image_url}/>
                <div>
                    <p>{suggestion.username}</p>
                    <p>suggested for you</p>
                </div>
                <div>
                    {/* <button className="link following">follow</button> */}
                    <FollowButton
                        following={suggestion}
                        refreshSuggestion={this.refreshSuggestionDataFromServer}/>
                </div>
            </section>
        )
    }
}

export default Suggestion;