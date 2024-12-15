import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';


const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    2,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(30, 30, 10);
orbit.update();

//const boxGeometry = new THREE.BoxGeometry();
//const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
//const box = new THREE.Mesh(boxGeometry, boxMaterial);
//scene.add(box);

/* const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
scene.add(plane); */

    /* const gridHelper = new THREE.GridHelper(30);
    scene.add(gridHelper); */

/* const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x0000FF,
    wireframe: false});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set (-10, 10, 0);
sphere.castShadow = true;
scene.add(sphere); */

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
// scene.add(directionalLight);
// directionalLight.position.set(-30, 50, 0);
// directionalLight.castShadow = true;
// directionalLight.shadow.camera.bottom = -12;

// const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(dLightHelper);

// const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(dLightShadowHelper);

const spotLight = new THREE.SpotLight(0xFFFFFF);
spotLight.position.set(-100, 100, 0);
spotLight.intensity = 100000;
spotLight.castShadow = true;
scene.add(spotLight);

const sLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(sLightHelper);

//scene.fog = new THREE.Fog(0xFFFFFF, 0, 200);
//scene.fog = new THREE.FogExp2(0xFFFFFF, 0.01);

renderer.setClearAlpha(0);

/* const plane2Geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
const plane2Material = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    wireframe: true
});
const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
scene.add(plane2);
plane2.position.set(10, 10, 15);

plane2.geometry.attributes.position.array[0] -= 10 * Math.random();
plane2.geometry.attributes.position.array[1] -= 10 * Math.random();
plane2.geometry.attributes.position.array[2] -= 10 * Math.random();
const lastPointZ = plane2.geometry.attributes.position.array.length - 1;
plane2.geometry.attributes.position.array[lastPointZ] -= 10 * Math.random(); */

//const vShader = `
//    void main() {
//        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
//    }
//`;

//const fShader = `
//    void main() {
//        gl_FragColor = vec4(.5, .5, 1, 1);
//    }
//`;

/* const sphere2Geometry = new THREE.SphereGeometry(4);
const sphere2Material = new THREE.ShaderMaterial({
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent
});
const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);
scene.add(sphere2);
sphere2.position.set(-5, 10, 10); */

const gltfLoader = new GLTFLoader();

let alphie;
gltfLoader.load('./assets/scene.gltf', function(gltf){
    const model = gltf.scene;
    scene.add(model);
    alphie = model;
});


/* const gui = new dat.GUI();

const options = {
    sphereColor: '#ffea00',
    wireframe: false,
    speed: .01,
    angle: .03,
    penumbra: 0.5,
    intensity: 50000
}; */

/* gui.addColor(options, 'sphereColor').onChange(function(e){
    sphere.material.color.set(e);
}); */

/* gui.add(options, 'wireframe').onChange(function(e){
    sphere.material.wireframe = e;
}); */

/* gui.add(options, 'speed', 0, .1);

gui.add(options, 'angle', 0, 1);
gui.add(options, 'penumbra', 0, 1);
gui.add(options, 'intensity', 0, 100000); */

let step = 0;

const mousePosition = new THREE.Vector2();

window.addEventListener('mousemove', function(e){
    mousePosition.x = (e.clientX / this.window.innerWidth) * 2 - 1;
    mousePosition.y = - (e.clientY / this.window.innerHeight) * 2 + 1;
});

const rayCaster = new THREE.Raycaster();

/* const sphereId = sphere.id; */

function animate(time) {
    if (alphie) {
        alphie.rotation.y = time / 1000;
    }

   /*  step += options.speed; */
   /*  sphere.position.y = 10 * Math.abs(Math.sin(step)); */

  /*   spotLight.angle = options.angle;
    spotLight.penumbra = options.penumbra;
    spotLight.intensity = options.intensity;
    sLightHelper.update();
 */
    /* rayCaster.setFromCamera(mousePosition, camera);
    const intersects = rayCaster.intersectObjects(scene.children);
    console.log(intersects); */

  /*   for(let i = 0; i < intersects.length; i++){
        if(intersects[i].object.id === sphereId)
            intersects[i].object.material.color.set(0xFF0000);
    } */

   /*  plane2.geometry.attributes.position.array[0] -= 10 * Math.random();
    plane2.geometry.attributes.position.array[1] -= 10 * Math.random();
    plane2.geometry.attributes.position.array[2] -= 10 * Math.random();
    plane2.geometry.attributes.position.array[lastPointZ] -= 10 * Math.random();
    plane2.geometry.attributes.position.needsUpdate = true; */

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
window.addEventListener('resize', function()  {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
