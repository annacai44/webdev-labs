import React from 'react';
import Post from './Post';
import Comments from './Comments';
import {getHeaders} from './utils';
import Header from './Header';
import ModalComments from './ModalComments';

class Modal extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            post: props.model,
            
            }

        
    }
    componentDidMount() {
        // fetch posts and then set the state..
       
    }
    
    render () {
        if (this.props.isOpen) {
           
        console.log ('modal is open');
        return (
            < div className ="modal-bg" aria-hidden="false" role="dialog">
                    <button className="close" aria-label="Close the modal window" onClick= {this.props.closeModal} > <i className="fas fa-times"> </i></button>
                    <div className="modal">
                        <img 
                            className="featured-image" 
                            src={ this.state.post.image_url } 
                            alt="image posted by " />
                        <div className = "container"> 
                            <h3>
                                <img 
                                    id="header-image"
                                    alt="profile pic of current user" 
                                    src={this.state.post.user.image_url}/>
                                {this.state.post.user.username}
                            </h3>
                            <div className = "body">
                            <ModalComments comments={this.state.post.comments}/>  
                            </div>
                        </div>
                    </div>
             
                 
            </div>
        )
    }
        else {
            console.log("something went wrong");
         return null
        }

}
}
export default Modal;
