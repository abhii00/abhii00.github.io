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
            projectTiles.push(<ProjectTile projectID={i} imageUrl={projectJSON.pictures.tile} renderDescription={this.renderDescription}/>);
            if ((i+1) % this.consts.projectsPerLine === 0 || i === this.props.projectsJSON.length - 1){
                projectRows.push(<div className='projectsgrid-row-container'>{projectTiles}</div>);
                projectTiles = [];
            }
        }
        this.setState({projectRows: projectRows});
    }

    renderDescription = (e) => {
        this.setState({
            descriptionShown: true,
            descriptionProjectID: JSON.parse(e.currentTarget.getAttribute('projectID')),
            descriptionProject: this.props.projectsJSON[JSON.parse(e.currentTarget.getAttribute('projectID'))]
        });
    }

    unrenderDescription = (e) => {
        this.setState({
            descriptionShown: false
        });
    }

    render(){
        return(
            <div className='projectsgrid-container'>
                {this.state.projectRows}
                <div className={`projectsgrid-description-container${this.state.descriptionShown ? ' visible' : ''}`}>
                    <div className='projectsgrid-description-content-container'>
                        <div className='projectsgrid-description-leftcol-container'>
                            <div className='projectsgrid-description-title'>{this.state.descriptionShown && this.state.descriptionProject.name}</div>
                            <div className='projectsgrid-description-institution'>{this.state.descriptionShown && this.state.descriptionProject.institution}</div>
                            <div className='projectsgrid-description-date'>{this.state.descriptionShown && this.state.descriptionProject.date}</div>
                            <div className='projectsgrid-description-text'>{this.state.descriptionShown && this.state.descriptionProject.description}</div>
                            <div className='projectsgrid-description-tech'>{this.state.descriptionShown && this.state.descriptionProject.techs}</div>
                            <div className='projectsgrid-description-links-container'>
                                <a href={this.state.descriptionShown && this.state.descriptionProject.urls.prod} target="_blank" rel="noopener noreferrer" className='projectsgrid-description-link'>
                                    {this.state.descriptionShown ? <OpenInNew className='projectsgrid-description-icon-new'/> : ''}  
                                </a>
                                <a href={this.state.descriptionShown && this.state.descriptionProject.urls.src} target="_blank" rel="noopener noreferrer" className='projectsgrid-description-link'>
                                    <img src={this.state.descriptionShown && githubIcon} className='projectsgrid-description-icon-github' alt=''/>
                                </a>
                            </div>
                            {this.state.descriptionShown ? <Close onClick={this.unrenderDescription} className='projectsgrid-description-icon-close'/> : ''}
                        </div>
                        <img src={this.state.descriptionShown && require('../assets/projects/'+ this.state.descriptionProject.pictures.square).default} alt='' className={`projectsgrid-description-image${this.state.descriptionShown ? ' visible' : ''}`}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsGrid