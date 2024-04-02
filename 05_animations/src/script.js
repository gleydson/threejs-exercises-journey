import gsap from "gsap";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const cube = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);
scene.add(cube);

// Axes Helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Sizes
const sizes = {
	width: 800,
	height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Clock
// const clock = new THREE.Clock();

// Time
// let time = Date.now();

gsap.to(cube.position, { duration: 1, delay: 1, x: 2 });
gsap.to(cube.position, { duration: 1, delay: 2, x: 0 });

// Animations
function tick() {
	// Time
	// const currentTime = Date.now();
	// const deltaTime = currentTime - time;
	// time = currentTime;

	// Clock
	// const elapsedTime = clock.getElapsedTime();

	// Update objects
	// camera.position.y = Math.sin(elapsedTime);
	// camera.position.x = Math.cos(elapsedTime);
	// camera.lookAt(cube.position);
	// cube.rotation.y = elapsedTime * Math.PI * 2;
	// cube.position.y = Math.sin(elapsedTime);
	// cube.position.x = Math.cos(elapsedTime);
	// cube.rotation.y += 0.001 * deltaTime;
	// cube.position.x += 0.01;
	// cube.position.y += 0.01;

	// Render the scene
	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
}

tick();
