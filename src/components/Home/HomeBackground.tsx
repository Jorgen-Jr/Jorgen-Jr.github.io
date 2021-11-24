import React, { useEffect, useState } from "react";

import {
    Scene,
    Clock,
    WebGLRenderer,
    sRGBEncoding,
    PMREMGenerator,
    Color,
    PerspectiveCamera,
    AnimationMixer,
    Vector2,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { useColorModeValue } from "@chakra-ui/color-mode";

export default function HomeBackground() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const initial_color = useColorModeValue("white", "skyblue");

    let [color, setColor] = useState(initial_color);

    useEffect(() => {
        setColor(initial_color);
        render();
    }, [initial_color]);

    const scene = new Scene();

    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = sRGBEncoding;

    const mouse = new Vector2();
    const target = new Vector2();
    const windowHalf = new Vector2(
        window.innerWidth / 2,
        window.innerHeight / 2
    );

    const camera = new PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        100
    );

    function onMouseMove(event) {
        mouse.x = Math.max(450, event.clientX) - windowHalf.x;
        mouse.y = event.clientY - windowHalf.x;
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        render();
    }

    function render() {
        scene.background = new Color(color);

        renderer.render(scene, camera);
    }

    addEventListener("resize", () => {
        onWindowResize();
    });

    useEffect(() => {
        if (!hasLoaded) {
            let mixer;

            const clock = new Clock();
            const container = document.getElementById("container");

            addEventListener("mousemove", (event) => {
                onMouseMove(event);
            });

            container.appendChild(renderer.domElement);

            const pmremGenerator = new PMREMGenerator(renderer);

            scene.environment = pmremGenerator.fromScene(
                new RoomEnvironment(),
                0.04
            ).texture;

            camera.position.set(5, 2, 8);

            const controls = new OrbitControls(camera, renderer.domElement);

            controls.target.set(0, 0.5, 0);
            controls.update();
            controls.enablePan = false;
            controls.enableZoom = false;
            controls.enableDamping = true;
            controls.maxPolarAngle = 45;

            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath("js/libs/draco/gltf/");

            const loader = new GLTFLoader().setPath("/static_assets/3D/");
            loader.setDRACOLoader(dracoLoader);
            loader.load(
                "LittlestTokyo.glb",
                function (gltf) {
                    const model = gltf.scene;
                    model.position.set(3, 1, 0);
                    model.scale.set(0.01, 0.01, 0.01);

                    scene.add(model);

                    setHasLoaded(true);

                    mixer = new AnimationMixer(model);
                    mixer.clipAction(gltf.animations[0]).play();

                    animate();
                },
                undefined,
                function (error) {
                    console.error(error);
                }
            );

            function animate() {
                requestAnimationFrame(animate);

                const delta = clock.getDelta();

                mixer.update(delta);

                target.x = (1 - mouse.x) * 0.002;
                target.y = (1 - mouse.y) * 0.002;

                controls.target.set(0, target.y, target.x);

                camera.position.set(
                    target.x * 5 + 5,
                    target.y * 3 + 1,
                    target.x * target.y + 8
                );

                controls.update();

                render();
            }
        }
    }, [hasLoaded]);

    return (
        <>
            <div id="container"></div>
        </>
    );
}
