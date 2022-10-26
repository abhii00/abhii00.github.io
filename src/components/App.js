import React from 'react';
import * as THREE from 'three';

import { isMobile } from 'react-device-detect';
import { Loading, Menu, Sidebar, Section, Slideshow, ProjectsGrid } from './components.js';
import { setupScene, resizeScene } from '../graphics/graphics.js';
import { animation0, animation1 } from '../graphics/animations.js';

import aboutImage from '../assets/images/about.jpeg';
import featuredProjects from '../assets/projects/featured.json';
import experienceProjects from '../assets/projects/experience.json';
import organisationProjects from '../assets/projects/organisation.json';
import portfolioProjects from '../assets/projects/portfolio.json';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

//TODO change to rocket animation
//TODO golden highlight around most important projects
//TODO improve graphic design
//TODO update loading animation
//TODO optimise performance

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {loading: true}
    }

    componentDidMount() {
        setTimeout(() => {
            window.scrollTo(0,0);  
            this.setState({loading: false});      
        }, 600*3)      

        var scene;
        var camera; 
        var renderer;

        if (isMobile){
            [scene, camera, renderer] = setupScene(new THREE.Vector3(0,0,3));
            this.mount.appendChild(renderer.domElement);
            animation0(scene, camera, renderer);
        }
        else {
            [scene, camera, renderer] = setupScene(new THREE.Vector3(-210,15,35));
            this.mount.appendChild(renderer.domElement);
            animation1(scene, camera, renderer);
        }

        window.addEventListener('resize', () => {resizeScene(camera, renderer)});
    }

    render(){       
        return(
            <React.Fragment>
                <Loading loading={this.state.loading}/>
                <div className='app'>
                    <Menu/>
                    <Sidebar/>
                    <Section id='introduction' titleShown={false} heightSpecified={true}>
                        <div className='introduction-animation-container' ref={ref => (this.mount = ref)}/>
                        <div className='introduction-darkfilter'/>
                        <div className='introduction-text-container'>
                            <div className='introduction-text-hi'>HI, I'M</div>
                            <div className='introduction-text-name'>ABHIJIT PANDIT</div>
                            <div className='introduction-text-tagline'>AN ASPIRING ENGINEER</div>
                        </div>
                    </Section>

                    <Section title='ABOUT' id='about' heightSpecified={true}>
                        <div className='about-container'>
                            <img src={aboutImage} alt='' className='about-image'/>
                            <div className='about-text'>
                                Hi! I'm Abhi. My goal is to work in the global space industry, contributing to a better future for humanity through the pursuit of space exploration. 
                                <br/>
                                Currently, I'm <span>interning at NASA's Jet Propulsion Laboratory</span>, working on dispersion analysis for future lander missions, alongside my <span>MEng in Aerospace and Control Engineering at the University of Cambridge</span>, where I recently received my <span>1st Class BA (Hons)</span>.
                                <br/>
                                My <span>Master's Project is focused on Real-Time Optimal Control of Spacecraft Attitude</span>, while my prior experience includes an internship modelling satellite propellant feed systems at <span>Thales Alenia Space UK</span>.
                                <br/>
                                I currently act as the <span>Co-President of Cambridge University Spaceflight</span>, working to become the first European student team to reach space, as well as the <span>President of Selwyn College Engineering Society</span>, building an inclusive Engineering environment at the College.
                                <br/>
                                I'm a recipient of the <span>IET Diamond Jubilee Scholarship, supported by Thales</span> as well as a <span>Scholarship of Selwyn College</span> for my performance in 2nd and 3rd Year. I also won the <span>2nd place prize in the 2022 Airbus NSSC</span>  with my design of an astrobiology lander for Europa.
                                <br/>
                                Feel free to take a look around and find out more about my projects!
                            </div>
                        </div>
                    </Section>

                    <Section id='featured' titleShown={false} heightSpecified={true}>
                        <Slideshow projectsJSON={featuredProjects}/>
                    </Section>

                    <Section title='EXPERIENCE AND EDUCATION' id='experience'>
                        <ProjectsGrid projectsJSON={experienceProjects}/>
                    </Section>

                    <Section title='ORGANISATIONS' id='organisation'>
                        <ProjectsGrid projectsJSON={organisationProjects}/>
                    </Section>

                    <Section title='PORTFOLIO' id='portfolio'>
                        <ProjectsGrid projectsJSON={portfolioProjects}/>
                    </Section>

                    <Section title='CONTACT' id='contact' heightSpecified={true}>
                        <div className='contact-container'>
                            <div className='contact-text'>
                                I'm always looking for new opportunities!
                                <br/>
                                Get in touch via my email below, or reach out to me on another platform!
                                </div>
                            <a href='mailto:abhijit.pandit808@gmail.com' className='contact-email'>abhijit.pandit808[at]gmail.com</a>
                            <div className='contact-links-container'>
                                <a href='https://github.com/abhii00' target="_blank" rel="noopener noreferrer" className='contact-link'>
                                    <img src={githubIcon} className='contact-icon' alt=''/>
                                </a>
                                <a href='https://www.linkedin.com/in/abhijit-pandit' target="_blank" rel="noopener noreferrer" className='contact-link'>
                                    <img src={linkedinIcon} className='contact-icon' alt=''/>
                                </a>
                            </div>
                        </div>
                    </Section>
                </div>
            </React.Fragment>
        )
    }
}

export default App