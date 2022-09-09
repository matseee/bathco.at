import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene } from 'three';
import { CameraSettings } from './consts/camera-settings.const';
import { Renderer } from './renderer';

import './styles/main.scss';

const renderer = new Renderer();
const scene = new Scene();

const camera = new PerspectiveCamera(
    CameraSettings.fov,
    CameraSettings.aspect,
    CameraSettings.nearPlaneDistance,
    CameraSettings.farPlaneDistance,
);

camera.position.z = 5;

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ffff });
const cube = new Mesh(geometry, material);
scene.add(cube);

enum ScaleDirection {
    UP = 0.01,
    DOWN = -0.01,
}

let scaleFactor = 1;
let scaleDirection = ScaleDirection.UP;

function tick() {
    requestAnimationFrame(tick);

    if (scaleDirection == ScaleDirection.UP && scaleFactor >= 1.5) {
        scaleDirection = ScaleDirection.DOWN;
    }

    if (scaleDirection == ScaleDirection.DOWN && scaleFactor <= 0.5) {
        scaleDirection = ScaleDirection.UP;
    }

    scaleFactor += scaleDirection;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cube.scale.setX(scaleFactor);
    cube.scale.setY(scaleFactor);
    cube.scale.setZ(scaleFactor);

    renderer.render(scene, camera);
}

tick();