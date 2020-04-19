import React, { Component } from 'react'

export class CreatePost extends Component {
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
    console.log("submitted",this.state);
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

export default CreatePost;
