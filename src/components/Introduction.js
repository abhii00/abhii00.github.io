import React from "react";
import * as THREE from "three";
import { setupScene, Animation1 } from "./visuals/graphics.js";

class Introduction extends React.Component{
    componentDidMount() {
        const [scene, camera, renderer] = setupScene(new THREE.Vector3(0,0,100))
        this.mount.appendChild(renderer.domElement);

        Animation1(scene, camera, renderer)
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