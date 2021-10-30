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
            projectPreRows: [],
            projectPostRows: [],
            loadRest: false,
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
            projectPreRows: projectRows[0],
            projectPostRows: projectRows.slice(1,),
            showButton: (projectRows.length > 2) ? true : false
        });
    }

    renderDescription = (e) => {
        var id = JSON.parse(e.currentTarget.getAttribute('projectID'));

        const animationInterval = 0.5;

        //first load
        if (this.state.descriptionProject == null){
            this.setState({
                descriptionShown: true,
                descriptionProjectID: id,
                descriptionProject: this.props.projectsJSON[id],
            });

            this.calcRows(id);

            this.transitionToggleLoadIn(); //start load in

            setTimeout(() => {
                this.transitionToggleLoadIn(); //stop load in
            }, animationInterval*1000);
        }
        else {
            this.transitionToggleLoadOut(); //start load out

            setTimeout(() => {
                this.transitionToggleLoadOut(); //stop load out

                this.setState({
                    descriptionShown: true,
                    descriptionProjectID: id,
                    descriptionProject: this.props.projectsJSON[id],
                });
                this.calcRows(id);

                this.transitionToggleLoadIn(); //start load in

                setTimeout(() => {
                    this.transitionToggleLoadIn(); //stop load in
                }, animationInterval*1000);

            }, animationInterval*1000);
        }
    }

    calcRows = (id) => {
        var row = Math.floor(id/this.consts.projectsPerLine);
        console.log(row);

        this.setState({
            projectPreRows: this.state.projectRows.slice(0, row+1),
            projectPostRows: this.state.projectRows.slice(row+1)
        });
    }

    unrenderDescription = (e) => {
        this.setState({
            descriptionShown: false
        });
    }

    transitionToggleLoadIn = () => {
        this.setState({
            loadin: !this.state.loadin
        })
    }

    transitionToggleLoadOut = () => {
        this.setState({
            loadout: !this.state.loadout
        })
    }

    renderRest = (e) => {
        this.setState({
            loadRest: true
        })
    }

    render(){
        return(
            <div className='projectsgrid-container'>
                {this.state.projectPreRows}
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
                {this.state.projectPostRows[0]}
                {
                    this.state.loadRest ?
                    this.state.projectPostRows.slice(1,) : this.state.showButton && <div className='projectsgrid-loadmore-container'><div className='projectsgrid-loadmore-button' onClick={this.renderRest}> Load Rest </div></div>
                }
            </div>
        )
    }
}

export default ProjectsGrid