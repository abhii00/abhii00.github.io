import React from "react";
import * as THREE from "three";
import { setupScene } from "./visuals/graphics.js";
import { animation1 } from "./visuals/animations.js";
import { ExpandMore } from '@material-ui/icons';

class Introduction extends React.Component{
    componentDidMount() {
        const [scene, camera, renderer] = setupScene(new THREE.Vector3(0,0,75))
        this.mount.appendChild(renderer.domElement);
        camera.position.y += 15;

        animation1(scene, camera, renderer)
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
                    <div>Coming Soon</div> 
                    <ExpandMore className="introduction-expand"/>
                </div>
            </div>  
        )
    }
}

export default Introduction