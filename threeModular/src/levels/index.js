import scene from '../basic/scene.js'
import camera from '../basic/camera.js'
import renderer from '../basic/renderer.js'
import Cube from '../basic/shapes/cube.js'; 
import ambientLigth from '../basic/ligths/ambientLigth.js'
import directionalLight from '../basic/ligths/directionalLight.js'
import plane from '../basic/shapes/plane.js'

const cube1 = new Cube(1, 0xffffff).getMesh(); 
const cube2 = new Cube(2, 0x00ff00).getMesh(); 

scene.add(cube1); 
scene.add(cube2); 
scene.add(ambientLigth);
scene.add(directionalLight);
scene.add(plane);
camera.position.set(-3, 7, 2);
camera.position.z = 10;
camera.lookAt(plane.position)

directionalLight.position.set(-10, 10, 10)

let keys = {};

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
   
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);


    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

document.addEventListener('keydown', onKeyDown, false);
document.addEventListener('keyup', onKeyUp, false);

function onKeyDown(event) {
    keys[event.code] = true;
}

function onKeyUp(event) {
    keys[event.code] = false;
}

const animate = () => {

    if (keys['KeyW']) cube1.position.z -= 0.05;
    if (keys['KeyS']) cube1.position.z += 0.05;
    if (keys['KeyA']) cube1.position.x -= 0.05;
    if (keys['KeyD']) cube1.position.x += 0.05;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();

