import '../css/styles.css';
import * as THREE from 'three';

// Scene, Mesh, Camera, Renderer, Clock, Animation, Resize

// Scene
const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = [
  new THREE.MeshBasicMaterial({ color: 0xff5733 }),
  new THREE.MeshBasicMaterial({ color: 0x33ff57 }),
  new THREE.MeshBasicMaterial({ color: 0x3357ff }),
  new THREE.MeshBasicMaterial({ color: 0xffc300 }),
  new THREE.MeshBasicMaterial({ color: 0x8000ff }),
  new THREE.MeshBasicMaterial({ color: 0x00ffcc }),
];

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(aspect.width, aspect.height);

// Clock
const clock = new THREE.Clock();

// Animation
const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  mesh.rotation.x = elapsedTime * 0.25;
  mesh.rotation.y = elapsedTime * 0.25;
  mesh.rotation.z = elapsedTime * 0.25;

  mesh.position.x = Math.cos(elapsedTime * 0.25);
  mesh.position.y = Math.sin(elapsedTime * 0.25);

  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
};

animate();

// Resize
window.addEventListener('resize', () => {
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  renderer.setSize(aspect.width, aspect.height);
});
