import { Camera, Scene, WebGLRenderer } from 'three';

export class Renderer {
    protected parentElement: HTMLElement;

    protected webRenderer: WebGLRenderer;

    constructor() {
        this.parentElement = document.body;
        this.webRenderer = new WebGLRenderer();

        this.webRenderer.setSize(window.innerWidth, window.innerHeight);
        this.parentElement.appendChild(this.webRenderer.domElement);

        this.addResizeEventListener();
    }

    render(scene: Scene, camera: Camera) {
        this.webRenderer.render(scene, camera);
    }

    protected addResizeEventListener() {
        this.parentElement.addEventListener('resize', this.resize);
    }

    protected resize() {
        this.webRenderer.setSize(window.innerWidth, window.innerHeight);
    }
}