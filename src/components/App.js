import React from 'react';
import * as THREE from 'three';

import { isMobile } from 'react-device-detect';
import { Loading, Menu, Sidebar, Section, Slideshow, ProjectsGrid } from './components.js';
import { setupScene, resizeScene } from '../graphics/graphics.js';
import { animation0, animation1 } from '../graphics/animations.js';

import aboutImage from '../assets/images/about.jpeg';
import featuredProjects from '../assets/projects/featured.json';
import experienceProjects from '../assets/projects/experience.json';
import portfolioProjects from '../assets/projects/portfolio.json';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

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
                                Hi! I'm Abhi. My goal is to work in the global space industry, contributing to a better future for humanity through the pursuit of space exploration. My other interests lie in software development, deep technologies such as genetics and quantum technology, and medicine. 
                                <br/>
                                Currently, I'm a 3rd year undergraduate engineer at the <span>University of Cambridge</span>, taking my very own eclectic mix of Aerothermal, Mechanical, Information and Bioengineering modules.
                                <br/>
                                Recently, I interned at <span>Thales Alenia Space UK</span> working on modelling satellite propellant feed systems. I also received an IET Diamond Jubilee Scholarship sponsored by Thales. 
                                <br/>
                                Alongside this, I act as the Co-President, and Launch and Safety Officer with <span>Cambridge University Spaceflight</span>, working to launch the first European student-built rocket to reach space. I am also a propulsion engineer working on our 2kN and 10kN liquid bipropellant engines.  I recently also won the second place prize in the 2022 <span>Airbus</span> National Student Space Competition (Ocean World Category) with my design of Europa Inspire, an astrobiology mission to Europa.
                                <br/>
                                In my spare time, I've been working on projects such as an Earth Observation Data Visualiser.
                            </div>
                        </div>
                    </Section>

                    <Section id='featured' titleShown={false} heightSpecified={true}>
                        <Slideshow projectsJSON={featuredProjects}/>
                    </Section>

                    <Section title='EXPERIENCE AND EDUCATION' id='experience'>
                        <ProjectsGrid projectsJSON={experienceProjects}/>
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