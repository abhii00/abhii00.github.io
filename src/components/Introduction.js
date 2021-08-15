import React from "react";
import * as THREE from "three";
import { setupScene, introAnimation } from "./visuals/graphics.js"

class Introduction extends React.Component{
    componentDidMount() {
        const [scene, camera, renderer] = setupScene(new THREE.Vector3(0,0,5))
        this.mount.appendChild(renderer.domElement);

        introAnimation(scene, camera, renderer)
    }

    render(){
        return(
            <div className="introduction-background" ref={ref => (this.mount = ref)}/>
        )
    }
}

export default Introduction