import * as THREE from "three";
import { loadTexture } from "./graphics.js";
import sphere_texture from "../../assets/animations/intro/mercury.jpg";

/**
 * Animation 0: The coming soon animation
 * @param scene the scene into which to render
 * @param camera the camera for the animation
 * @param renderer the renderer
 */
 function animation0(scene, camera, renderer){
    const sun_light = new THREE.PointLight(0xffffff, 1, 0, 2);
    sun_light.position.set(0,5,0);
    sun_light.castShadow = true;
        
    const sphere_geometry = new THREE.SphereBufferGeometry(1, 80, 80);
    const sphere_material = new THREE.MeshStandardMaterial({
        metalness: 0.3,
        roughness: 0.8,
        map: loadTexture(sphere_texture)
    })
    const sphere = new THREE.Mesh(sphere_geometry, sphere_material);
    sphere.position.set(0,0,0)

    scene.add(sun_light);
    scene.add(sphere);

    /**
     * animator
     */
    function animate(){
        requestAnimationFrame(animate);

        sphere.rotation.y += 0.005;

        renderer.render(scene, camera);
    };
    animate();    
}

export default animation0