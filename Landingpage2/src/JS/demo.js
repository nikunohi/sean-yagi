import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.setZ(3);

const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(w, h);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Scroll tracking variable
let scrollPosY = 0;

const loadingScreen = document.createElement('div');
loadingScreen.style.position = 'fixed';
loadingScreen.style.top = '0';
loadingScreen.style.left = '0';
loadingScreen.style.width = '100%';
loadingScreen.style.height = '100%';
loadingScreen.style.backgroundColor = '#000';
loadingScreen.style.color = '#fff';
loadingScreen.style.display = 'flex';
loadingScreen.style.alignItems = 'center';
loadingScreen.style.justifyContent = 'center';
loadingScreen.style.fontFamily = 'Arial, sans-serif';
loadingScreen.style.fontSize = '1.5rem';
loadingScreen.innerText = 'Loading...';
document.body.appendChild(loadingScreen);

function initScene(model) {
  const mesh = model;
  mesh.position.set(0, 0, 0); 
  scene.add(mesh);

  // Lighting
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  scene.add(hemiLight);

  let goalPos = 0;
  const rate = 0.1;

  // Animation
  function animate() {
    requestAnimationFrame(animate);
    goalPos = Math.PI * scrollPosY;
    mesh.rotation.y -= (mesh.rotation.y - (goalPos * 1.0)) * rate;
    renderer.render(scene, camera);
  }
  animate();
}

// Loading manager
const manager = new THREE.LoadingManager();

manager.onStart = () => console.log("Loading started.");
manager.onLoad = () => {
  console.log("All resources loaded.");
  // Remove loading screen 
  document.body.removeChild(loadingScreen);
};
manager.onError = (url) => console.error(`Error loading resource: ${url}`);

const loader = new GLTFLoader(manager);
loader.load(
  "./assets/cardboard_box.glb", 
  (gltf) => {
    const model = gltf.scene;
    initScene(model);
  },
  undefined, 
  (error) => {
    console.error("Error loading GLB model:", error);
  }
);

window.addEventListener("scroll", () => {
  scrollPosY = window.scrollY / document.body.clientHeight;
});

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);
