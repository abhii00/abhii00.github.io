import * as THREE from "three";
import { Water } from 'three/examples/jsm/objects/Water.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import mountains_model from '../../assets/animations/1/mountainrange2.glb';
import train_model from '../../assets/animations/1/train1.glb';
import traincarriage_model from '../../assets/animations/1/traincarriage1.glb';

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
    const sphere_geometry = new THREE.SphereBufferGeometry(30, 50, 50);
    const small_sphere_geometry = new THREE.SphereBufferGeometry(1, 4, 4);
    const plane_geometry = new THREE.PlaneBufferGeometry(3000, 3000, 300, 300);

    //create sky
    const sky_material = new THREE.MeshBasicMaterial({color: 0x00000d})
    const sky = new THREE.Mesh(plane_geometry, sky_material);
    sky.position.set(0,0,-500);
    scene.add(sky);

    //create stars
    const star_material = new THREE.MeshBasicMaterial({color: 0xffffff});
    const stars = [];
    for (let i = 0; i < 800; i++) {
        const star = new THREE.Mesh(small_sphere_geometry, star_material);
        const x = THREE.MathUtils.randFloatSpread(500);
        const y = THREE.MathUtils.randFloatSpread(200) + 100;
        const z = THREE.MathUtils.randFloatSpread(300) - 100;
        star.position.set(x,y,z);
        stars.push(star);
        scene.add(star);
    }
    
    //create moon
    const moon_material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,});
    const moon = new THREE.Mesh(sphere_geometry, moon_material);
    var moon_y_0 = 70;
    moon.position.set(80,moon_y_0,-60);
    scene.add(moon);

    //create moon light
    const moon_light = new THREE.PointLight(0xffffff,1,0,2);
    moon_light.position.set(80,80,-60);
    scene.add(moon_light);

    //create ambient light
    const ambient_light = new THREE.PointLight(0xffffff,0.8,0,2);
    ambient_light.position.set(80,80,10);
    scene.add(ambient_light);

    //create mountains 
    const loader = new GLTFLoader();
    loader.load(mountains_model, function (mountains_gltf) {
        var mountains = mountains_gltf.scene;
        mountains.position.set(0,-25,-40);
        mountains.rotation.set(0,-Math.PI/2,0);
        mountains.scale.set(10,10,10);
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
    var water_y_0 = -10;
    water.position.set(0,water_y_0,0);
    water.rotation.set(- Math.PI/2,0,0);
    scene.add(water);

    //create train
    var train_load = false;
    var train = 0;
    var traincarriages_load = false;
    var traincarriages = [];
    var train_sep = 8.5;
    loader.load(train_model, function (train_gltf) {
        train = train_gltf.scene;
        train.position.set(-180,26,-18);
        train.rotation.set(0,Math.PI/2,0);
        train.scale.set(2,2,2);
        scene.add(train);
        train_load = true;
    });  
    loader.load(traincarriage_model, function (traincarriage_gltf) {
        var traincarriage = traincarriage_gltf.scene;
        for (var i = 0; i < 3; i++){
            traincarriages[i] = traincarriage.clone();
            traincarriages[i].position.set(-180-(i+1)*train_sep,26,-18);
            traincarriages[i].rotation.set(0, Math.PI/2, 0);
            traincarriages[i].scale.set(2,2,2);
            scene.add(traincarriages[i]);
        }
        traincarriages_load = true;
    });  

    /**
     * animator
     */
    function animate(){
        requestAnimationFrame(animate);

        const time = performance.now()*0.001;
        moon.position.y = Math.sin(time)*2 + moon_y_0; //floating moon
        water.position.y = Math.sin(0.25*time)*2 + water_y_0; //twinkling stars

        //moving train
        var train_v = 0.5;
        if (train_load & traincarriages_load) {
            train.position.x += train_v;
            for (var j = 0; j < 3; j++){
                traincarriages[j].position.x += train_v;
            }
            if (train.position.x > 180){
                train.position.x = -180;
                for (var k = 0; k < 3;k++){
                    traincarriages[k].position.x = -180-(k+1)*train_sep;
                }
            }
        }

        //snow
        /*
        for (var i = 0; i < stars.length; i++){
            stars[i].position.y -= 0.1;
            stars[i].position.x += 0.05*Math.sin(time)*2;
        }
        */
        
        renderer.render(scene, camera);
    };
    animate();    
}

export default animation1