import React from 'react';

import { OpenInNew } from '@material-ui/icons';

import githubIcon from '../assets/icons/github.png';

class Slideshow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            projectID: 0,
            project: this.props.projectsJSON[0],
            loading: false
        }
    }

    componentDidMount(){
        const slideInterval = 7.5;
        const animationInterval = 0.6;

        setInterval(() => {
            this.setState({loading: true}); //start loading

            setTimeout(() => {
                this.setState({
                    projectID: (this.state.projectID+1)%this.props.projectsJSON.length,
                    project: this.props.projectsJSON[(this.state.projectID+1)%this.props.projectsJSON.length]
                })
            }, animationInterval*1000)

            setTimeout(() => {
                this.setState({loading: false}); //stop loading
            }, animationInterval*2000)

        }, slideInterval*1000);
    }
    
    render(){ 
        return(
            <div className='slideshow-container'>
                <img src={require('../assets/projects/'+this.state.project.pictures.main)} alt='' className={`slideshow-background${this.state.loading ? ' loading' : ''}`}/>
                <div className='slideshow-shadow'/>
                <div className={`slideshow-box-container${this.state.loading ? ' loading' : ''}`}>
                    <div className={`slideshow-content-container${this.state.loading ? ' loading' : ''}`}>
                        <div className='slideshow-leftcol-container'>
                            <div className='slideshow-title'>{this.state.project.name}</div>
                            <div className='slideshow-institution'>{this.state.project.institution}</div>
                            <div className='slideshow-text'>{this.state.project.description}</div>
                            <div className='slideshow-links-container'>
                                {
                                    this.state.project.urls.prod !== '' &&
                                    <a href={this.state.project.urls.prod} target="_blank" rel="noopener noreferrer" className='slideshow-link'>
                                        <OpenInNew className='slideshow-icon-new'/>   
                                    </a>
                                }
                                {
                                    this.state.project.urls.src !== '' &&
                                    <a href={this.state.project.urls.src} target="_blank" rel="noopener noreferrer" className='slideshow-link'>
                                        <img src={githubIcon} className='slideshow-icon-github' alt=''/>
                                    </a>
                                }                                
                            </div>
                        </div>
                        <img src={require('../assets/projects/'+this.state.project.pictures.square)} alt='' className={`slideshow-image${this.state.loadin ? ' loadin' : `${this.state.loadout ? ' loadout' : ''}`}`}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slideshow