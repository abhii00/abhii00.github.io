import React from 'react';
import { ProjectTile } from './components.js';
import { OpenInNew, Close } from '@material-ui/icons';
import githubIcon from '../assets/icons/github.png';

class ProjectsGrid extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            projectRows: [],
            descriptionShown: false,
            descriptionProjectID: 0,
            descriptionProject: null
        }

        this.consts = {
            projectsPerLine: 5
        }
    }

    componentDidMount(){
        var projectRows = [];
        var projectTiles = [];
        for (var i = 0; i < this.props.projectsJSON.length; i++){
            var projectJSON = this.props.projectsJSON[i];
            projectTiles.push(<ProjectTile projectID={i} imageUrl={projectJSON.pictures.tile} renderDescription={this.toggleDescription}/>);
            if ((i+1) % this.consts.projectsPerLine === 0 || i === this.props.projectsJSON.length - 1){
                projectRows.push(<div className='projectsgrid-row-container'>{projectTiles}</div>);
                projectTiles = [];
            }
        }
        this.setState({projectRows: projectRows});
    }

    toggleDescription = (e) => {
        this.setState({
            descriptionShown: !this.state.descriptionShown,
            descriptionProjectID: JSON.parse(e.currentTarget.getAttribute('projectID')),
            descriptionProject: this.props.projectsJSON[JSON.parse(e.currentTarget.getAttribute('projectID'))]
        });
    }

    render(){
        return(
            <div className='projectsgrid-container'>
                {this.state.projectRows}
                {
                    this.state.descriptionShown &&
                    <div className='projectsgrid-description-container'>
                        <div className='projectsgrid-description-content-container'>
                            <div className='projectsgrid-description-leftcol-container'>
                                <div className='projectsgrid-description-title'>{this.state.descriptionProject.name}</div>
                                <div className='projectsgrid-description-text'>{this.state.descriptionProject.description}</div>
                                <div className='projectsgrid-description-tech'>{this.state.descriptionProject.techs}</div>
                                <div className='projectsgrid-description-links-container'>
                                    <a href={this.state.descriptionProject.urls.prod} target="_blank" rel="noopener noreferrer" className='projectsgrid-description-link'>
                                        <OpenInNew className='projectsgrid-description-icon-new'/>   
                                    </a>
                                    <a href={this.state.descriptionProject.urls.src} target="_blank" rel="noopener noreferrer" className='projectsgrid-description-link'>
                                        <img src={githubIcon} className='projectsgrid-description-icon-github' alt=''/>
                                    </a>
                                </div>
                                <Close onClick={this.toggleDescription} className='projectsgrid-description-icon-close'/>
                            </div>
                            <img src={require('../assets/projects/'+this.state.descriptionProject.pictures.tile).default} alt='' className='projectsgrid-description-image'/>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ProjectsGrid