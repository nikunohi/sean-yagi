import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, .1, 1000);
camera.position.z = 5;
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({antialias: true, canvas });
renderer.setSize(w, h);


const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(hemiLight);
renderer.setClearAlpha(1);

let scrollPosY = 0;

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const gltfLoader = new GLTFLoader();

gltfLoader.load(
    './assets/cardboard_box.glb',
    (gltf) => {
        const model = gltf.scene;
        model.position.set(0,0,0);
        renderer.shadowMap.enabled = true;
        model.traverse((node) => {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });
        scene.add(model);
    },
    undefined,
    (error) => {
        console.error('Error loading model:', error);
    }
);



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();



window.addEventListener('resize', function()  {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


