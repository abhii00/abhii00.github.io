import React from 'react';
import * as THREE from 'three';
import { ExpandMore } from '@material-ui/icons';
import { Link } from 'react-scroll';
import { Menu, Section, Slideshow, ProjectsGrid } from './components.js';
import { setupScene } from './visuals/graphics.js';
import { animation1 } from './visuals/animations.js';
import featuredProjects from '../assets/projects/example.json';
import experienceProjects from '../assets/projects/example.json';
import portfolioProjects from '../assets/projects/example.json';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

class App extends React.Component{
    componentDidMount() {
        const [scene, camera, renderer] = setupScene(new THREE.Vector3(-300,15,35));
        this.mount.appendChild(renderer.domElement);

        animation1(scene, camera, renderer);
    }

    /*
    TODO write portfolio descriptions, update GitHubs, make public
    TODO write experience descriptions
    TODO write about section

    FIXME Wall-Animation Transition
    TODO dynamic resizing of canvas
    FIXME glitchy reflections at boundary
    TODO responsiveness and mobile layout
    */

    render(){
        return(
            <div className='app'>
                <Menu/>
                <Section id='introduction' titleShown={false} sidebarShown={false}>
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

                <Section title='ABOUT' id='about'>
                    <div className='about-container'>
                        <div className='about-image'></div>
                        <div className='about-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt rutrum dictum. Vivamus posuere volutpat consequat. Cras leo lorem, fermentum sed lacus sit amet, faucibus molestie magna. Donec non nisl sit amet turpis dapibus pretium et nec mauris. Nulla porttitor ligula magna, eget pretium tortor laoreet non. Nam in ipsum auctor elit molestie convallis. Proin arcu mauris, dignissim eu purus id, posuere convallis tellus. Curabitur gravida dolor vitae enim ultrices, condimentum pretium nunc congue. Pellentesque sapien libero, congue quis mollis in, tempus molestie leo. Quisque sed sodales odio, et efficitur mi. Nunc eget condimentum diam. Aenean mattis venenatis justo, sit amet ultricies lectus ultricies in. Sed nisl turpis, euismod non consequat nec, porttitor vel lorem. 
                        </div>
                    </div>
                </Section>

                <Section id='featured' titleShown={false} sidebarShown={false}>
                    <Slideshow projectsJSON={featuredProjects}/>
                </Section>

                <Section title='EXPERIENCE AND EDUCATION' id='experience' sidebarLeft={false}>
                    <ProjectsGrid projectsJSON={experienceProjects}/>
                </Section>

                <Section title='PORTFOLIO' id='portfolio'>
                    <ProjectsGrid projectsJSON={portfolioProjects}/>
                </Section>

                <Section title='CONTACT' id='contact' sidebarLeft={false}>
                    <div className='contact-container'>
                        <div className='contact-text'>You can always contact me at my email below, or reach out to me on another platform!</div>
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