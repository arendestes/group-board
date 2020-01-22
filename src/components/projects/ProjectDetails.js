import React from 'react';


const ProjectDetails = (props) =>{
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Proect Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perferendis est modi expedita a? Quasi, libero expedita. Perferendis minus repudiandae voluptate dolor necessitatibus voluptas reprehenderit! Tempore fuga soluta iusto necessitatibus!</p>

                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Arend</div>
                    <div>Jan 22, 2020 4:29pm</div>
                </div>
            </div>
        </div>
    )

}

export default ProjectDetails;