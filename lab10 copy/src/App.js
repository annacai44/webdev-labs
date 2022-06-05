import React from 'react';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Profile from './Profile';
import NavBar from './NavBar';
import {getHeaders} from './utils';


{/* TODO: Break up the HTML below into a series of React components. */}
class App extends React.Component { 
    constructor(props) {
        super(props);
        // issue a fetch to /api/profile endpoint
        
        this.state= {
            user : {}
        }
        this.getProfileFromServer();

    } 
    getProfileFromServer() {
        fetch('/api/profile', {headers : getHeaders()})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({user : data});
            

        })
        
        




        }

    

    render () {
        return (
            <div>
            <NavBar 
                title = "Coumbagram"
                username = {this.state.user.username} />

            

            <aside>
                <Profile />
                <Suggestions />
                
            </aside>

            <main className="content">

                <Stories />
                <Posts/> 

                {/* replace with a react componenent */}
            </main>

            </div>
        );
    }
}

export default App;