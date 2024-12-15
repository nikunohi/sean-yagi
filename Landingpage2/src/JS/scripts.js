import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';




const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

const canvasContainer = document.getElementById('canvas_container');
canvasContainer.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    3,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
    camera.position.set(15, 10, 50);
/* camera.position.set(50, 10, 7); */
//(x, y, z)

camera.lookAt(0, 0, 0);


// const orbit = new OrbitControls(camera, renderer.domElement);

//const axesHelper = new THREE.AxesHelper(5);
//scene.add(axesHelper); 

 

// orbit.update();


const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);



const spotLight = new THREE.SpotLight(0xFFFFFF);
spotLight.position.set(-25, 100, 0);
spotLight.intensity = 50000;
spotLight.castShadow = true;
scene.add(spotLight);

//const sLightHelper = new THREE.SpotLightHelper(spotLight);
//scene.add(sLightHelper);
 
renderer.setClearAlpha(0);

const gltfLoader = new GLTFLoader();

let alphie;

let targetRotationY = 0;

const smoothFactor = .3;

window.addEventListener('scroll', () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY / maxScroll;
    targetRotationY = scrollPosition * Math.PI * 14;
});

gltfLoader.load('./assets/scene.gltf', function(gltf){
    const model = gltf.scene;
    scene.add(model);
    model.rotation.set(0, 0, 0);
    model.rotation.set(0,  3.466512509007781, 0);
    model.scale.set(0.4, 0.4, 0.4);
    alphie = model;

    console.log("Initial Rotation (radians):", model.rotation.y);
});

function animate() {
    if (alphie) {
        alphie.rotation.y += (targetRotationY - alphie.rotation.y) * smoothFactor;   
        alphie.rotation.y += .1;
        console.log(`Model Rotation: x=${alphie.rotation.x}, y=${alphie.rotation.y}, z=${alphie.rotation.z}`);

    }
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, 200);
});



const element = document.querySelector('.three-canvas');

// Handle scroll effect
window.addEventListener('scroll', () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY / maxScroll; // Normalize scroll position (0 to 1)

    // Calculate scaling (from 1 to ~0.66)
    const scaleFactor = 1 - 0.34 * scrollPosition;

    // Calculate translation
    const translateX = scrollPosition * (window.innerWidth / 2 - element.offsetWidth / 2);
    const translateY = scrollPosition * (window.innerHeight / 2 - element.offsetHeight / 2);

    // Apply
    element.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleFactor})`;
});
