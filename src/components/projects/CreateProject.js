import React, { Component } from 'react';

class CreateProject extends Component {
    state = {
        projectName: '',
        projectDetails: ''
    }
    handleChange = (e)=>{
        this.setState(
            {
                [e.target.id]: e.target.value
            }
        )
    };
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
    };
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text" id="projectName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="projectDetails">Project Details</label>
                        <textarea  id="projectDetails" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">add project</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject;