import React from 'react';
import { Project } from './components.js';

class ProjectGrid extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            descriptionShown: false,
            projectindex: null
        }
    }

    renderDescription = (e) => {
        if (this.state.descriptionShown){
            this.setState({
                projectindex: JSON.parse(e.currentTarget.getAttribute('index'))
            })
        }
        else {
            this.setState({
                descriptionShown: true,
                projectindex: JSON.parse(e.currentTarget.getAttribute('index'))
            })
        }
    }

    unrenderDescription = (e) => {
        this.setState({
            descriptionShown: false
        })
    }

    render(){
        const number = 5;
        const size = 15;
        const size_string = size.toString() + 'vw';
        const end_spacing = 10;
        const spacing = (100 - 2*end_spacing - number*size)/(number - 1);

        const projects = [];
        var pos = end_spacing;

        for (var i = 0; i < number; i++){
            projects.push(<Project index={i} renderDescription={this.renderDescription} style={{left: pos.toString() + 'vw', height: size_string, width: size_string}}/>); /* TODO add unique project specification prop and file to handle descriptions*/
            pos += size + spacing;
        }

        if (this.state.descriptionShown){
            return(
                <React.Fragment>
                    <div className='projectgrid' style={this.props.style}>
                        {projects}
                        <div className='projectgrid-description' onClick={this.unrenderDescription}>
                        
                        </div>
                    </div>
                    
                </React.Fragment>
            )
        }
        else {
            return(
                <div className='projectgrid' style={this.props.style}>
                    {projects}
                </div>
            )
        }
    }
}

export default ProjectGrid