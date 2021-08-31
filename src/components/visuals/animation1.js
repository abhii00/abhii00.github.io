import * as THREE from "three";
import { Water } from 'three/examples/jsm/objects/Water.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import mountains from '../../assets/animations/1/mountainrange1.glb';

/**
 * Animation 1: Train Animation
 * @param scene the scene into which to render
 * @param camera the camera for the animation
 * @param renderer the renderer
 */
 function animation1(scene, camera, renderer){     
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
    const sphere_geometry = new THREE.SphereBufferGeometry(20, 50, 50);
    const small_sphere_geometry = new THREE.SphereBufferGeometry(1, 4, 4);
    const plane_geometry = new THREE.PlaneBufferGeometry(3000, 3000, 300, 300);
    const box_geometry = new THREE.BoxBufferGeometry(5,4,4);

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
        const y = THREE.MathUtils.randFloatSpread(400) + 100;
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

    //create ambient light
    const ambient_light = new THREE.PointLight(0xffffff,0.15,0,2);
    ambient_light.position.set(80,80,10);
    scene.add(ambient_light);

    //create mountains 
    const loader = new GLTFLoader();
    loader.load(mountains, function (mountains_gltf) {
        var mountains = mountains_gltf.scene;
        mountains.position.set(0,-25,-40);
        mountains.rotation.set(0,Math.PI/2,0);
        mountains.scale.set(60,60,60);
        scene.add(mountains);
    });

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
    water.position.set(0,-30,0);
    scene.add( water );

    //create train
    const train_material = new THREE.MeshBasicMaterial({color:0x800000});
    const train = new THREE.Mesh(box_geometry, train_material);
    train.position.set(-180,5,-22)
    scene.add(train);

    /**
     * animator
     */
    function animate(){
        requestAnimationFrame(animate);

        const time = performance.now()*0.001;
        moon.position.y = Math.sin(time)*2 + 40; //floating moon
        water.position.y = Math.sin(0.25*time)*2 - 30; //twinkling stars

        train.position.x += 0.5; //moving train
        if (train.position.x > 180){
            train.position.x = -180;
        }
        
        renderer.render(scene, camera);
    };
    animate();    
}

export default animation1