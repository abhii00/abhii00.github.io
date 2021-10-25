import * as THREE from "three";
import { Water } from 'three/examples/jsm/objects/Water.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import mountains_model from '../../assets/animations/1/mountainrange2.glb';
import mountains_wire_model from '../../assets/animations/1/mountainrangewire1.glb';
import train_model from '../../assets/animations/1/train1.glb';
import traincarriage_model from '../../assets/animations/1/traincarriage1.glb';

/**
 * Animation 1: Train Animation
 * @param scene the scene into which to render
 * @param camera the camera for the animation
 * @param renderer the renderer
 */
 function animation1(scene, camera, renderer){     
    const global_offset = -20;

    //create reusable geometries
    const sphere_geometry = new THREE.SphereBufferGeometry(30, 50, 50);
    const small_sphere_geometry = new THREE.SphereBufferGeometry(0.3, 4, 4);
    const plane_geometry = new THREE.PlaneBufferGeometry(1000, 1000, 300, 300);
    const box_geometry = new THREE.BoxBufferGeometry(100, 100, 100, 10, 10, 10);

    //create sky
    const sky_color = 0x050713;

    const sky_material = new THREE.MeshBasicMaterial({color: sky_color})
    const sky = new THREE.Mesh(plane_geometry, sky_material);
    sky.position.set(0,0,global_offset-200);
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
    point_light.position.set(80,80,global_offset-60);
    scene.add(point_light);

    //create ambient light
    const ambient_light = new THREE.PointLight(0xffffff,0.4,0,2);
    ambient_light.position.set(80,80,global_offset+10);
    scene.add(ambient_light);

    //create moon
    var moon_y_0 = 80;
    var moon_x_0 = 110;
    var moon_color = 0xffffff

    const moon_material = new THREE.MeshBasicMaterial({
        color: moon_color,
        transparent: true,});
    const moon = new THREE.Mesh(sphere_geometry, moon_material);
    moon.scale.set(0.8, 0.8, 0.8);
    moon.position.set(moon_x_0,moon_y_0,global_offset-80);
    scene.add(moon);

    //create mountains 
    var wireframe_toggle = false;
    var mountains_loaded = false;
    var mountains_wire_loaded = false;
    var mountains;
    var mountains_wire;

    const loader = new GLTFLoader();
    loader.load(mountains_model, function (mountains_gltf) {
        mountains = mountains_gltf.scene;
        mountains.position.set(0,-25,global_offset-40);
        mountains.rotation.set(0,-Math.PI/2,0);
        mountains.scale.set(8,10,13);
        scene.add(mountains);
        mountains_loaded = true;
    });

    loader.load(mountains_wire_model, function (mountains_wire_gltf) {
        mountains_wire = mountains_wire_gltf.scene;
        mountains_wire.position.set(0,-25,global_offset-40);
        mountains_wire.rotation.set(0,-Math.PI/2,0);
        mountains_wire.scale.set(8,10,13);
        scene.add(mountains_wire);
        mountains_wire_loaded = true;
        mountains_wire.visible = false;
    });

    //create ocean
    var water_y_0 = -10;

    const water = new Water(
        plane_geometry,
        {
          textureWidth: 512,
          textureHeight: 512,
          waterNormals: new THREE.TextureLoader().load('', function ( texture ) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          }),
          alpha: 1.0,
          sunDirection: new THREE.Vector3(),
          sunColor: 0xffffff,
          waterColor: 0x001e0f,
          distortionScale: 3.7,
          fog: scene.fog !== undefined
        }
      );
    water.position.set(0,water_y_0,0);
    water.rotation.set(- Math.PI/2,0,0);
    scene.add(water);

    //create train
    var train_x_0 = -210;
    var no_traincarriages = 6;
    var train_sep = 5;
    var traincarriage_sep = 8;

    var train_load = false;
    var train = 0;
    loader.load(train_model, function (train_gltf) {
        train = train_gltf.scene;
        train.position.set(train_x_0,25,global_offset-18);
        train.rotation.set(0,Math.PI/2,0);
        scene.add(train);
        train_load = true;
    });  

    var traincarriages_load = false;
    var traincarriages = [];
    loader.load(traincarriage_model, function (traincarriage_gltf) {
        var traincarriage = traincarriage_gltf.scene;
        for (var i = 0; i < no_traincarriages; i++){
            traincarriages[i] = traincarriage.clone();
            traincarriages[i].position.set(train_x_0-train_sep-i*traincarriage_sep,25,global_offset-18);
            traincarriages[i].rotation.set(0, Math.PI/2, 0);
            traincarriages[i].scale.set(1,1,2);
            scene.add(traincarriages[i]);
        }
        traincarriages_load = true;
    });  

    //create walls 
    const wall_x_0 = -180;
    const wall_color = sky_color;

    const wall_material = new THREE.MeshBasicMaterial({color: wall_color})
    const left_wall = new THREE.Mesh(box_geometry, wall_material);
    const right_wall = left_wall.clone();

    left_wall.position.set(wall_x_0,0,-30);
    right_wall.position.set(-wall_x_0,0,-30);

    scene.add(right_wall);
    scene.add(left_wall);

    /**
     * animator
     */
    function animate(){
        requestAnimationFrame(animate);

        const time = performance.now()*0.001;
        
        //bobbing moon and water
        moon.position.y = -Math.sin(0.5*time)*5 + moon_y_0;
        water.position.y = Math.sin(0.5*time)*2 + water_y_0; //twinkling stars

        //moving train
        var train_v = 3;

        if (train_load & traincarriages_load) {
            train.position.x += train_v;
            camera.position.x += train_v;
            for (var j = 0; j < no_traincarriages; j++){
                traincarriages[j].position.x += train_v;
            }

            //wrap around
            if (train.position.x > -train_x_0){
                train.position.x = train_x_0;
                camera.position.x = train_x_0;
                wireframe_toggle = !wireframe_toggle;
                if (wireframe_toggle && mountains_loaded && mountains_wire_loaded){ 
                    mountains.visible = false; 
                    mountains_wire.visible = true;
                    ambient_light.intensity = 1.5;
                    point_light.intensity = 0;
                    water.visible = false;
                    moon.visible = false;
                    for (let i = 0; i < no_stars; i++) {stars[i].visible = false;}
                }
                else if (!wireframe_toggle && mountains_loaded && mountains_wire_loaded){ 
                    mountains.visible = true; 
                    mountains_wire.visible = false;
                    ambient_light.intensity = 0.4;
                    point_light.intensity = 1;
                    water.visible = true;
                    moon.visible = true;
                    for (let i = 0; i < no_stars; i++) {stars[i].visible = true;}
                }
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