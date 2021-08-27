import * as THREE from "three";
import {Water} from 'three/examples/jsm/objects/Water.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

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
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

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
 * Animation 1: Moon and Ocean Animation
 * @param scene the scene into which to render
 * @param camera the camera for the animation
 * @param renderer the renderer
 */
function Animation1(scene, camera, renderer){     
    /*
    Plan:
    1. Big Glowing Moon
    2. Dark Blue Sky
    3. Small Glowing Stars
    4. Reflective Ocean Plane
    5. Mountains
    6. Train moving across train track
    7? Clouds moving left to right/small birds in sky/rocket launching/shooting star
    */

    //create reusable geometries
    const sphere_geometry = new THREE.SphereBufferGeometry(30, 50, 50);
    const small_sphere_geometry = new THREE.SphereBufferGeometry(1, 4, 4);
    const plane_geometry = new THREE.PlaneBufferGeometry(3000, 3000, 300, 300);
    const box_geometry = new THREE.BoxBufferGeometry(5,3,3);

    //create sky
    const sky_material = new THREE.MeshBasicMaterial({color: 0x00000d})
    const sky = new THREE.Mesh(plane_geometry, sky_material);
    sky.position.set(0,0,-500);
    scene.add(sky);

    //create stars
    const star_material = new THREE.MeshBasicMaterial({color: 0xffffff});
    const stars = [];
    for (let i = 0; i < 500; i++) {
        const star = new THREE.Mesh(small_sphere_geometry, star_material);
        const x = THREE.MathUtils.randFloatSpread(1000);
        const y = THREE.MathUtils.randFloatSpread(1000);
        const z = THREE.MathUtils.randFloatSpread(250) - 250;
        star.position.set(x,y,z);
        stars.push(star);
        scene.add(star);
    }
    
    //create moon
    const moon_material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,});
    const moon = new THREE.Mesh(sphere_geometry, moon_material);
    moon.position.set(40,5,-30);
    scene.add(moon);

    //create moon light
    const moon_light = new THREE.PointLight(0xffffff,1,0,2);
    moon_light.position.set(80,80,-30);
    scene.add(moon_light);

    //create train
    const train_material = new THREE.MeshBasicMaterial({color:0x800000});
    const train = new THREE.Mesh(box_geometry, train_material);
    train.position.set(-100,0,-10)
    scene.add(train);

    //create ocean
    const water = new Water(
        plane_geometry,
        {
            sunColor: 0xffffff,
            waterColor: 0x00000d,
            distortionScale: 3.7
        }
    );
    water.rotation.x = - Math.PI / 2;
    water.position.set(-30,-30,0);
    scene.add( water );

    /**
     * animator
     */
    function animate(){
        requestAnimationFrame(animate);

        const time = performance.now() * 0.001;
        moon.position.y = Math.sin(time) * 2 + 40;
        train.position.x += 0.5;
        renderer.render(scene, camera);
    };
    animate();    
}


export {
    setupScene,
    loadTexture,
    Animation1
}