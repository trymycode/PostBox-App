import React, { Component } from 'react'
import PostList from '../posts/PostList';
class Profile extends Component {
    render() {
        return (
            <div className="profile container">
                <div className="postlist-container">
                    
                        <PostList/>
                   
                </div>
            </div>
        )
    }
}
export default Profile;