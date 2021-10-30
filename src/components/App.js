import React from 'react';
import * as THREE from 'three';

import { ExpandMore } from '@material-ui/icons';
import { Link } from 'react-scroll';
import { Menu, Section, Slideshow, ProjectsGrid } from './components.js';
import { setupScene, resizeScene } from './visuals/graphics.js';
import { animation1 } from './visuals/animations.js';

import aboutImage from '../assets/images/about.jpeg';
import featuredProjects from '../assets/projects/featured.json';
import experienceProjects from '../assets/projects/experience.json';
import portfolioProjects from '../assets/projects/portfolio.json';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

class App extends React.Component{
    componentDidMount() {
        const [scene, camera, renderer] = setupScene(new THREE.Vector3(-210,15,35));
        this.mount.appendChild(renderer.domElement);

        animation1(scene, camera, renderer);

        window.addEventListener('resize', () => {resizeScene(camera, renderer)});
    }

    /*
    TODO write portfolio descriptions, update GitHubs, make public
    */

    render(){
        return(
            <div className='app'>
                <Menu/>
                <Section id='introduction' titleShown={false} sidebarShown={false} heightSpecified={true}>
                    <div className='introduction-animation-container' ref={ref => (this.mount = ref)}/>
                    <div className='introduction-darkfilter'/>
                    <div className='introduction-text-container'>
                        <div className='introduction-text-hi'>HI, I'M</div>
                        <div className='introduction-text-name'>ABHIJIT PANDIT</div>
                        <div className='introduction-text-tagline'>AN ASPIRING SPACE ENGINEER AND CREATIVE</div>
                    </div>
                    <Link to='about'>
                        <ExpandMore className='introduction-icon'/>
                    </Link>
                </Section>

                <Section title='ABOUT' id='about' heightSpecified={true}>
                    <div className='about-container'>
                        <img src={aboutImage} alt='' className='about-image'/>
                        <div className='about-text'>
                            Hi! I'm Abhi. My goal is to work in the global space industry, contributing to a better future for humanity through the pursuit of space exploration. 
                            <br/>
                            Currently, I'm a 3rd year undergraduate engineer at the <span>University of Cambridge</span>, taking my very own eclectic mix of Aerothermal, Mechanical, Information and Bioengineering modules.
                            <br/>
                            Recently, I interned at <span>Thales Alenia Space UK</span> working on modelling satellite propellant feed systems. 
                            <br/>
                            Alongside this, I've been Launch and Safety Officer at <span>Cambridge University Spaceflight</span>, working to launch our UK altitude-record-breaking hybrid rocket, Martlet IV, as well as to develop our spaceshot-precusor liquid bipropellant rocket motor, White Dwarf.
                            <br/>
                            In my spare time, I've been working on software projects such as an Earth Observation Data Visualiser.
                        </div>
                    </div>
                </Section>

                <Section id='featured' titleShown={false} sidebarShown={false} heightSpecified={true}>
                    <Slideshow projectsJSON={featuredProjects}/>
                </Section>

                <Section title='EXPERIENCE AND EDUCATION' id='experience' sidebarLeft={false}>
                    <ProjectsGrid projectsJSON={experienceProjects}/>
                </Section>

                <Section title='PORTFOLIO' id='portfolio'>
                    <ProjectsGrid projectsJSON={portfolioProjects}/>
                </Section>

                <Section title='CONTACT' id='contact' sidebarLeft={false} heightSpecified={true}>
                    <div className='contact-container'>
                        <div className='contact-text'>
                            I'm always looking for new opportunities!
                            <br/>
                            Get in touch via my email below, or reach out to me on another platform!
                            </div>
                        <div className='contact-email'>abhijit.pandit808[at]gmail.com</div>
                        <div className='contact-links-container'>
                            <a href={'https://github.com/abhii00'} target="_blank" rel="noopener noreferrer" className='contact-link'>
                                <img src={githubIcon} className='contact-icon' alt=''/>
                            </a>
                            <a href={'https://www.linkedin.com/in/abhijit-pandit-029a8a183/'} target="_blank" rel="noopener noreferrer" className='contact-link'>
                                <img src={linkedinIcon} className='contact-icon' alt=''/>
                            </a>
                        </div>
                    </div>
                </Section>
            </div>
        )
    }
}

export default App