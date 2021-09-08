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
    1. X Big Glowing Moon
    2. X Dark Blue Sky
    3. X Small Glowing Stars
    4. X Reflective Ocean Plane
    5. X Mountains
    6. X Train moving across train track
    7?  Clouds moving left to right/fog
    */

    //create reusable geometries
    const sphere_geometry = new THREE.SphereBufferGeometry(30, 50, 50);
    const small_sphere_geometry = new THREE.SphereBufferGeometry(0.3, 4, 4);
    const plane_geometry = new THREE.PlaneBufferGeometry(1000, 1000, 300, 300);

    //create sky
    const sky_colors = [0x000010, 0x112059, 0x7786bf, 0x77bbbf,  0xb3fbff, 0x77bbbf, 0x7786bf, 0x112059];

    const sky_material = new THREE.MeshBasicMaterial({color: sky_colors[0]})
    const sky = new THREE.Mesh(plane_geometry, sky_material);
    sky.position.set(0,0,-200);
    scene.add(sky);

    //create stars
    const no_stars = 800;

    const star_material = new THREE.MeshBasicMaterial({color: 0xffffff});
    const stars = [];
    for (let i = 0; i < no_stars; i++) {
        const star = new THREE.Mesh(small_sphere_geometry, star_material);
        const x = THREE.MathUtils.randFloatSpread(500);
        const y = THREE.MathUtils.randFloatSpread(200) + 100;
        const z = THREE.MathUtils.randFloatSpread(100) - 100;
        star.position.set(x,y,z);
        stars.push(star);
        scene.add(star);
    }
    
    //create point light
    const point_light = new THREE.PointLight(0xffffff,1,0,2);
    point_light.position.set(80,80,-60);
    scene.add(point_light);

    //create ambient light
    const ambient_light = new THREE.PointLight(0xffffff,0.2,0,2);
    ambient_light.position.set(80,80,10);
    scene.add(ambient_light);

    //create moon
    var moon_y_0 = 90;
    var moon_x_0 = 90;
    var moon_color = 0xffffff

    const moon_material = new THREE.MeshBasicMaterial({
        color: moon_color,
        transparent: true,});
    const moon = new THREE.Mesh(sphere_geometry, moon_material);
    moon.scale.set(0.8, 0.8, 0.8);
    moon.position.set(80,moon_y_0,-80);
    scene.add(moon);

    //create sun
    var sun_y_0 = 90;
    var sun_x_0 = 90;
    var sun_color = 0xffff88;

    const sun_material = new THREE.MeshBasicMaterial({
        color: sun_color,
        transparent: true,});
    const sun = new THREE.Mesh(sphere_geometry, sun_material);
    sun.position.set(80,sun_y_0,-80);
    scene.add(sun);

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
    var water_y_0 = -10;

    const water = new Water(
        plane_geometry,
        {
            sunColor: 0xffffff,
            waterColor: 0x00000d,
            distortionScale: 3.7
        }
    );
    water.position.set(0,water_y_0,0);
    water.rotation.set(- Math.PI/2,0,0);
    scene.add(water);

    //create train
    var train_x_0 = -250;
    var no_traincarriages = 6;
    var train_sep = 5;
    var traincarriage_sep = 8;

    var train_load = false;
    var train = 0;
    loader.load(train_model, function (train_gltf) {
        train = train_gltf.scene;
        train.position.set(train_x_0,26,-18);
        train.rotation.set(0,Math.PI/2,0);
        train.scale.set(1,1,1);
        scene.add(train);
        train_load = true;
    });  

    var traincarriages_load = false;
    var traincarriages = [];
    loader.load(traincarriage_model, function (traincarriage_gltf) {
        var traincarriage = traincarriage_gltf.scene;
        for (var i = 0; i < no_traincarriages; i++){
            traincarriages[i] = traincarriage.clone();
            traincarriages[i].position.set(train_x_0-train_sep-i*traincarriage_sep,26,-18);
            traincarriages[i].rotation.set(0, Math.PI/2, 0);
            traincarriages[i].scale.set(1,1,2);
            scene.add(traincarriages[i]);
        }
        traincarriages_load = true;
    });  

    var toggle_daynight = false;

    /**
     * animator
     */
    function animate(){
        requestAnimationFrame(animate);

        const time = performance.now()*0.001;

        //day night cycle
        if (toggle_daynight){
            var theta = time*0.15;
            moon.position.x = moon_x_0*Math.cos(theta);
            moon.position.y = moon_y_0*Math.sin(theta);
            sun.position.x = sun_x_0*Math.cos(theta-Math.PI);
            sun.position.y = sun_y_0*Math.sin(theta-Math.PI);

            ambient_light.intensity = 0.5*(Math.sin(2*(theta - Math.PI/2))+1);

            if (Math.sin(theta) > 0) {
                point_light.position.copy(moon.position);
                point_light.color.setHex(moon_color);
            }
            else{
                point_light.position.copy(sun.position);
                point_light.color.setHex(sun_color);
            }

            var x = (theta - Math.PI*Math.floor(theta/Math.PI))/Math.PI; //fraction of cycle
            var i = Math.floor(x*sky_colors.length);
            var hex1 = sky_colors[i];
            var hex2 = sky_colors[(i+1)%sky_colors.length];
            var color1 = new THREE.Color(hex1);
            var color2 = new THREE.Color(hex2);
            color1.lerp(color2, x*sky_colors.length - i);
            sky.material.color.set(color1);
        }
        else{
            moon.position.y = Math.sin(time)*2 + moon_y_0; //floating moon
            sun.visible = false;
        }
        
        //bobbing moon and water
        water.position.y = Math.sin(0.25*time)*2 + water_y_0; //twinkling stars

        //moving train
        var train_v = 0.75;

        if (train_load & traincarriages_load) {
            train.position.x += train_v;
            for (var j = 0; j < no_traincarriages; j++){
                traincarriages[j].position.x += train_v;
            }

            //wrap around
            if (train.position.x > -train_x_0){
                train.position.x = train_x_0;
                for (var k = 0; k < no_traincarriages; k++){
                    traincarriages[k].position.x = train_x_0-train_sep-k*traincarriage_sep;
                }
            }
        }

        renderer.render(scene, camera);
    };
    animate();    
}

export default animation1