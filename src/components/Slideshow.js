import React from 'react';
import { OpenInNew } from '@material-ui/icons';
import githubIcon from '../assets/icons/github.png';

class Slideshow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            projectID: 0,
            project: this.props.projectsJSON[0]
        }
    }

    updateSlideshow = () => {
        this.setState({
            projectID: (this.state.projectID+1)%this.props.projectsJSON.length,
            project: this.props.projectsJSON[(this.state.projectID+1)%this.props.projectsJSON.length]
        })
    }

    componentDidMount(){
        const slideInterval = 4;

        this.updateSlideshow();
        setInterval(() => {
            this.updateSlideshow()
          }, slideInterval*1000);
    }
    
    render(){ 
        return(
            <React.Fragment>
                <img src={require('../assets/projects/'+this.state.project.pictures.tile).default} alt='' className='slideshow-background'/>
                <div className='slideshow-shadow'/>
                <div className='slideshow-box-container'>
                    <div className='slideshow-content-container'>
                        <div className='slideshow-leftcol-container'>
                            <div className='slideshow-title'>{this.state.project.name}</div>
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
                        <img src={require('../assets/projects/'+this.state.project.pictures.tile).default} alt='' className='slideshow-image'/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Slideshow