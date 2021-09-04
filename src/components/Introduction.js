import React from "react";
import * as THREE from "three";
import { setupScene } from "./visuals/graphics.js";
import { animation1 } from "./visuals/animations.js";

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
                <div className="introduction-animation" ref={ref => (this.mount = ref)}/>
            </div>  
        )
    }
}

export default Introduction