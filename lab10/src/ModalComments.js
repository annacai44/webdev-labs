import React from 'react';

class ModalComments extends React.Component {
  
    constructor(props) {
        super(props);
    }

    // function that executes after the component is injected into the DOM
    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (
            this.props.comments.map(comment => {
                return (
                <div key={"comment_" + comment.id}>
                        <div>
                        <p>
                            <strong>{comment.user.username }</strong>
                            {comment.text}
                        </p>
                        <p className="comment-timestamp"> {comment.display_time} </p>
                        </div>
                </div>
                )
            })
        )


     
}}

export default ModalComments;