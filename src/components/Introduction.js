import React from "react";
import * as THREE from "three";
import { setupScene } from "./visuals/graphics.js";
import { animation0 } from "./visuals/animations.js";

class Introduction extends React.Component{
    componentDidMount() {
        const [scene, camera, renderer] = setupScene(new THREE.Vector3(0,0,2))
        this.mount.appendChild(renderer.domElement);

        animation0(scene, camera, renderer)
    }

    render(){
        return(
            <div className="introduction">
                <div className="introduction-animation" ref={ref => (this.mount = ref)}/>
                <div className="introduction-text">Coming Soon</div>
            </div>  
        )
    }
}

export default Introduction