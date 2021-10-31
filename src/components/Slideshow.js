import React from 'react';

import { OpenInNew } from '@material-ui/icons';

import githubIcon from '../assets/icons/github.png';

class Slideshow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            projectID: 0,
            project: this.props.projectsJSON[0],
            loadin: false,
            loadout: false
        }
    }

    updateSlideshow = () => {
        this.setState({
            projectID: (this.state.projectID+1)%this.props.projectsJSON.length,
            project: this.props.projectsJSON[(this.state.projectID+1)%this.props.projectsJSON.length]
        })
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

    componentDidMount(){
        const slideInterval = 5;
        const animationInterval = 0.8;

        this.updateSlideshow();

        setInterval(() => {
            this.transitionToggleLoadOut(); //start load out

            setTimeout(() => {
                this.transitionToggleLoadOut(); //stop load out

                this.updateSlideshow();

                this.transitionToggleLoadIn(); //start load in

                setTimeout(() => {
                    this.transitionToggleLoadIn(); //stop load in
                },animationInterval*1000);

            }, animationInterval*1000);

          }, slideInterval*1000);
    }
    
    render(){ 
        return(
            <React.Fragment>
                <img src={require('../assets/projects/'+this.state.project.pictures.main).default} alt='' className={`slideshow-background${this.state.loadin ? ' loadin' : `${this.state.loadout ? ' loadout' : ''}`}`}/>
                <div className='slideshow-shadow'/>
                <div className={`slideshow-box-container${this.state.loadin ? ' loadin' : `${this.state.loadout ? ' loadout' : ''}`}`}>
                    <div className={`slideshow-content-container${this.state.loadin ? ' loadin' : `${this.state.loadout ? ' loadout' : ''}`}`}>
                        <div className='slideshow-leftcol-container'>
                            <div className='slideshow-title'>{this.state.project.name}</div>
                            <div className='slideshow-institution'>{this.state.project.institution}</div>
                            <div className='slideshow-date'>{this.state.project.date}</div>
                            <div className='slideshow-text'>{this.state.project.description}</div>
                            <div className='slideshow-tech'>{this.state.project.techs}</div>
                            <div className='slideshow-links-container'>
                                <a href={this.state.project.urls.prod} target="_blank" rel="noopener noreferrer" className='slideshow-link'>
                                    <OpenInNew className='slideshow-icon-new'/>   
                                </a>
                                <a href={this.state.project.urls.src} target="_blank" rel="noopener noreferrer" className='slideshow-link'>
                                    <img src={githubIcon} className='slideshow-icon-github' alt=''/>
                                </a>
                            </div>
                        </div>
                        <img src={require('../assets/projects/'+this.state.project.pictures.square).default} alt='' className={`slideshow-image${this.state.loadin ? ' loadin' : `${this.state.loadout ? ' loadout' : ''}`}`}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Slideshow