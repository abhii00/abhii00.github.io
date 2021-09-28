import React from 'react';
import * as THREE from 'three';
import { ExpandMore } from '@material-ui/icons';
import { Section, ProjectsGrid } from './components.js';
import { setupScene } from './visuals/graphics.js';
import { animation1 } from './visuals/animations.js';

class App extends React.Component{
    componentDidMount() {
        const [scene, camera, renderer] = setupScene(new THREE.Vector3(0,15,75));
        this.mount.appendChild(renderer.domElement);

        animation1(scene, camera, renderer);
    }

    /*TODO project JSONs
    TODO menu

    TODO formatting of introduction text
    TODO on load animations

    TODO dynamic resizing of canvas
    TODO responsiveness and mobile layout*/

    render(){
        return(
            <div className='app'>
                <Section id='introduction' titleShown={false} sidebarShown={false}>
                    <div className='introduction-animation-container' ref={ref => (this.mount = ref)}/>
                    <div className='introduction-darkfilter'/>
                    <div className='introduction-text-container'>
                        <div className='introduction-text-hi'>Hi, I'm</div>
                        <div className='introduction-text-name'>Abhijit Pandit</div>
                        <div className='introduction-text-tagline'>An Aspiring Space Engineer and Creative</div>
                    </div>
                    <ExpandMore className='introduction-icon'/>
                </Section>

                <Section title='About' id='about'>
                    <div className='about-container'>
                        <div className='about-image'></div>
                        <div className='about-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt rutrum dictum. Vivamus posuere volutpat consequat. Cras leo lorem, fermentum sed lacus sit amet, faucibus molestie magna. Donec non nisl sit amet turpis dapibus pretium et nec mauris. Nulla porttitor ligula magna, eget pretium tortor laoreet non. Nam in ipsum auctor elit molestie convallis. Proin arcu mauris, dignissim eu purus id, posuere convallis tellus. Curabitur gravida dolor vitae enim ultrices, condimentum pretium nunc congue. Pellentesque sapien libero, congue quis mollis in, tempus molestie leo. Quisque sed sodales odio, et efficitur mi. Nunc eget condimentum diam. Aenean mattis venenatis justo, sit amet ultricies lectus ultricies in. Sed nisl turpis, euismod non consequat nec, porttitor vel lorem. Quisque imperdiet, nibh nec tristique gravida, dolor turpis porttitor lorem, vel facilisis tellus mi non ante. In lacus nulla, efficitur at lectus ac, fringilla accumsan lacus.
                        </div>
                    </div>
                </Section>

                <Section title='Experience and Education' id='experience' sidebarLeft={false}>
                    <ProjectsGrid/>
                </Section>

                <Section title='Portfolio' id='portfolio'>
                    <ProjectsGrid/>
                </Section>

                <Section title='Contact' id='contact' sidebarLeft={false}/>
            </div>
        )
    }
}

export default App