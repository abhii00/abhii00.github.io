import React from "react";
import * as THREE from "three";
import { setupScene } from "./visuals/graphics.js";
<<<<<<< HEAD
import { animation0 } from "./visuals/animations.js";
=======
import { animation1 } from "./visuals/animations.js";
import { ExpandMore } from '@material-ui/icons';
>>>>>>> dev/features/experience

class Introduction extends React.Component{
    componentDidMount() {
        const [scene, camera, renderer] = setupScene(new THREE.Vector3(0,15,75));
        this.mount.appendChild(renderer.domElement);

<<<<<<< HEAD
        animation0(scene, camera, renderer)
=======
        animation1(scene, camera, renderer);
>>>>>>> dev/features/experience
    }

    render(){
        return(
            <div className="introduction">
                <div className="introduction-hi">Hi, I'm</div>
                <div className="introduction-name">Abhijit Pandit</div>
                <div className="introduction-tagline">An Aspiring Space Engineer and Creative</div>
                <div className="introduction-animation" ref={ref => (this.mount = ref)}/>
                <div className="introduction-darkeningfilter"></div>
                <div className="introduction-expandcontainer">
                    <div>Learn More</div> 
                    <ExpandMore className="introduction-expand"/>
                </div>
            </div>  
        )
    }
}

export default Introduction