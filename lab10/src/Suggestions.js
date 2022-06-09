import React from 'react';
import {getHeaders} from './utils';
import Suggestion from './Suggestion';

class Suggestions extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            suggestions: []
        }
        this.getSuggestionsFromServer();
    }

    getSuggestionsFromServer () {
        fetch('/api/suggestions', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log('sup');
            console.log(data);
            this.setState({
                suggestions: data
            })
        })
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return this.state.suggestions.length === 0 ?
        (
            <div id="posts">Loading suggestions...</div>
        )
        :
        (
            <div className="suggestions">
                <p className="suggestion-text">Suggestions for you</p>
                {
                    this.state.suggestions.map(suggestion => {
                        console.log(suggestion);
                        return (
                            <Suggestion 
                                key={'suggestion_' + suggestion.id}
                                model={suggestion}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Suggestions;