import React, { Component } from 'react'
import { createPostAction } from "../../store/actions/postActions";
import { connect } from "react-redux";

 class CreatePost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           title: "",
           content: ""  
        }
    }
handleChange = (e) =>{
    this.setState({
        [e.target.id]: e.target.value
    })
}
handleSubmit = (e) =>{
    e.preventDefault();
    this.props.createPostAction(this.state);
    console.log("submitted");
}

    render() {
        return (
            <div className="container">
               <form className="white" onSubmit={this.handleSubmit}>
                   <h5 className="grey-text text-darken-3">
                      Create New Post
                   </h5>
                   <div className="input-field">
                       <label htmlFor="title">Title</label>
                       <input type="text" id="title" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="content">Post Content</label>
                       <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                   </div>
                   <div className="input-field">
                       <button className="btn skyblue lighten-1 z-depth-0">Create</button>
                   </div>
                   </form> 
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPostAction: (post)=>dispatch(createPostAction(post))
    }
}
export default connect(null, mapDispatchToProps)(CreatePost);
