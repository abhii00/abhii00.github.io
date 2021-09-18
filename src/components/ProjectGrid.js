import React from 'react';
import { Project } from './components.js';

class ProjectGrid extends React.Component{
    render(){
        const number = 5;
        const size = 15;
        const size_string = size.toString() + 'vw';
        const end_spacing = 5;
        const spacing = (100 - 2*end_spacing - number*size)/(number - 1);

        const projects = [];
        var pos = end_spacing;

        for (var i = 0; i < number; i++){
            projects.push(<Project style={{left: pos.toString() + 'vw', height: size_string, width: size_string}}/>);
            pos += size + spacing;
        }

        return(
            <div className = 'projectgrid' style={this.props.style}>
                {projects}
            </div>
        )
    }
}

export default ProjectGrid