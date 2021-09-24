import React from "react";
import * as THREE from "three";
import { setupScene } from "./visuals/graphics.js";
import { animation1 } from "./visuals/animations.js";
import { ExpandMore } from '@material-ui/icons';
import { Link } from 'react-scroll';

class Introduction extends React.Component{
    componentDidMount() {
        const [scene, camera, renderer] = setupScene(new THREE.Vector3(0,15,75));
        this.mount.appendChild(renderer.domElement);

        animation1(scene, camera, renderer);
    }

    render(){
        return(
            <div className="section" style={this.props.style}>
                <div className="introduction-hi">Hi, I'm</div>
                <div className="introduction-name">Abhijit Pandit</div>
                <div className="introduction-tagline">An Aspiring Space Engineer and Creative</div>
                <div className="introduction-animation" ref={ref => (this.mount = ref)}/>
                <div className="introduction-darkeningfilter"></div>
                <Link to="about" duration={2}>
                    <div className="introduction-expandcontainer">
                        <div>Learn More</div> 
                        <ExpandMore className="introduction-expand"/>
                    </div>
                </Link>
            </div>  
        )
    }
}

export default Introduction