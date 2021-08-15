import * as THREE from "three";
import sphere_texture from "../../assets/animations/intro/mercury.jpg"

/*ORIGINALLY FROM EOVISUALISER*/

/**
 * Sets up scene with camera, and renderer 
 * @param starting_camera_pos the starting y position of the camera
 * @return an array containing the scene, camera, renderer in that order
 */
function setupScene(starting_camera_pos){
    //setup new scene
    const scene = new THREE.Scene();
    
    //setup camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10**10);
    camera.position.copy(starting_camera_pos)

    //setup renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    return [scene, camera, renderer]
}

/**
 * Loads a texture given an imported image object
 * @param {Image} image_object the image object
 * @return a texture object
 */
function loadTexture(image_object){
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(image_object)

    return texture
}

/**
 * Animation 1: The animation for the introduction component
 * @param scene the scene into which to render
 * @param camera the camera for the animation
 * @param renderer the renderer
 */
function introAnimation(scene, camera, renderer){
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


export {
    setupScene,
    loadTexture,
    introAnimation
}