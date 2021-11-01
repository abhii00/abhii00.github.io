import React from 'react';

import { ProjectTile } from './components.js';
import { OpenInNew} from '@material-ui/icons';

import githubIcon from '../assets/icons/github.png';

class ProjectsGrid extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            descriptionShown: false,
            descriptionProjectID: 0,
            descriptionProject: null,
            projectRows: [],
            projectShownPreRows: [],
            projectShownPostRows: [],
            showButton: true,
            loadin: false,
            loadout: false
        }

        this.consts = {
            projectsPerLine: 4,
            defaultLines: 2
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
        this.setState({
            projectRows: projectRows,
            projectShownPreRows: projectRows[0],
            projectShownPostRows: projectRows.slice(1, this.consts.defaultLines),
            showButton: (projectRows.length > this.consts.defaultLines) ? true : false
        });
    }

    renderDescription = (e) => {
        var id = JSON.parse(e.currentTarget.getAttribute('projectID'));
        var projectRows = this.state.showButton ? this.state.projectRows.slice(0, this.consts.defaultLines) : this.state.projectRows

        const animationInterval = 0.4;

        //first load
        if (this.state.descriptionProject == null){
            this.setState({
                descriptionShown: true,
                descriptionProjectID: id,
                descriptionProject: this.props.projectsJSON[id],
                loadin: true
            });

            this.calcRows(projectRows, id);

            setTimeout(() => {
                this.setState({loadin: false}); //stop loading in
            }, animationInterval*1000);
        }
        else {
            this.setState({loadout: true}); //start loading out

            setTimeout(() => {
                this.setState({
                    descriptionShown: true,
                    descriptionProjectID: id,
                    descriptionProject: this.props.projectsJSON[id],
                });

                this.calcRows(projectRows, id);

                setTimeout(() => {
                    this.setState({loadout: false, loadin: true}); //stop loading out, start loading in

                    setTimeout(() => {
                        this.setState({loadin: false}); //stop loading in
                    }, animationInterval*1000);

                }, animationInterval*200);

            }, animationInterval*1000);
        }
    }

    calcRows = (projectSelectRows, id) => {
        var row = Math.floor(id/this.consts.projectsPerLine);

        this.setState({
            projectShownPreRows: projectSelectRows.slice(0,row+1),
            projectShownPostRows: projectSelectRows.slice(row+1,projectSelectRows.length+1)
        });
    }

    unrenderDescription = (e) => {
        this.setState({
            descriptionShown: false
        });
    }

    renderRest = (e) => {
        this.setState({
            showButton: false
        });

        this.calcRows(this.state.projectRows, this.state.descriptionProjectID); //update
    }

    render(){
        return(
            <div className='projectsgrid-container'>
                {this.state.projectShownPreRows}
                <div className={`projectsgrid-description-container${this.state.loadin ? ' loadin' : `${this.state.loadout ? ' loadout' : `${this.state.descriptionShown ? ' ' : ' invisible'}`}`}`} style={{top: `${this.state.descriptionProjectID*80}vw`}}>
                    <div className={`projectsgrid-description-content-container${this.state.loadin ? ' loadin' : `${this.state.loadout ? ' loadout' : ' '}`}`}>
                        <div className='projectsgrid-description-leftcol-container'>
                            <div className='projectsgrid-description-title'>{this.state.descriptionShown && this.state.descriptionProject.name}</div>
                            <div className='projectsgrid-description-institution'>{this.state.descriptionShown && this.state.descriptionProject.institution}</div>
                            <div className='projectsgrid-description-date'>{this.state.descriptionShown && this.state.descriptionProject.date}</div>
                            <div className='projectsgrid-description-text'>{this.state.descriptionShown && this.state.descriptionProject.description}</div>
                            <div className='projectsgrid-description-tech'>{this.state.descriptionShown && this.state.descriptionProject.techs}</div>
                            <div className='projectsgrid-description-links-container'>
                                { 
                                    this.state.descriptionShown && this.state.descriptionProject.urls.prod !== '' &&
                                    <a href={this.state.descriptionShown && this.state.descriptionProject.urls.prod} target="_blank" rel="noopener noreferrer" className='projectsgrid-description-link'>
                                        {this.state.descriptionShown ? <OpenInNew className='projectsgrid-description-icon-new'/> : ''}  
                                    </a>
                                }
                                { 
                                    this.state.descriptionShown && this.state.descriptionProject.urls.src !== ''  &&
                                    <a href={this.state.descriptionShown && this.state.descriptionProject.urls.src} target="_blank" rel="noopener noreferrer" className='projectsgrid-description-link'>
                                        <img src={this.state.descriptionShown && githubIcon} className='projectsgrid-description-icon-github' alt=''/>
                                    </a>
                                }
                            </div>
                        </div>
                        <img src={this.state.descriptionShown && require('../assets/projects/'+ this.state.descriptionProject.pictures.square).default} alt=''className={`projectsgrid-description-image${this.state.loadin ? ' loadin' : `${this.state.loadout ? ' loadout' : `${this.state.descriptionShown ? ' ' : ' invisible'}`}`}`}/>
                    </div>
                </div>
                {this.state.projectShownPostRows}
                { 
                    this.state.showButton && <div className='projectsgrid-loadmore-container'><div className='projectsgrid-loadmore-button' onClick={this.renderRest}> Load Rest </div></div>
                }
            </div>
        )
    }
}

export default ProjectsGrid