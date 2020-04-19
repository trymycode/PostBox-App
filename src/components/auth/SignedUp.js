import React, { Component } from 'react'

export class SignedUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           email: "",
           password: "" ,
           firstName: "",
           lastName: "",
           profilePic: "" 
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
                       Sign Up
                   </h5>
                   <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="firstName">First Name</label>
                       <input type="text" id="firstName" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="lastName">Last Name</label>
                       <input type="text" id="lastName" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="profilePic">Profile Picture</label>
                       <input type="text" id="profilePic" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <button className="btn skyblue lighten-1 z-depth-0">Login</button>
                   </div>
                   </form> 
            </div>
        )
    }
}

export default SignedUp;
