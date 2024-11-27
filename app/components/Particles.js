import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import Stats from "three/examples/jsm/libs/stats.module";

const Particles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, stats, material;
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const init = () => {
      // Camera setup
      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 2, 2000);
      camera.position.z = 1000;

      // Scene setup
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.001);

      // Geometry and particles
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const sprite = new THREE.TextureLoader().load("/textures/sprites/disc.png");

      for (let i = 0; i < 10000; i++) {
        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;

        vertices.push(x, y, z);
      }

      geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

      material = new THREE.PointsMaterial({
        size: 35,
        sizeAttenuation: true,
        map: sprite,
        alphaTest: 0.5,
        transparent: true,
      });

      material.color.setHSL(1.0, 0.3, 0.7);

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Stats
      stats = new Stats();
      document.body.appendChild(stats.dom);

      // GUI
      const gui = new GUI();
      gui.add(material, "sizeAttenuation").onChange(() => {
        material.needsUpdate = true;
      });

      // Event listeners
      document.body.style.touchAction = "none";
      document.body.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", onWindowResize);

      // Animation loop
      renderer.setAnimationLoop(animate);
    };

    const onPointerMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      render();
      stats.update();
    };

    const render = () => {
      const time = Date.now() * 0.00005;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      const h = (360 * (1.0 + time) % 360) / 360;
      material.color.setHSL(h, 0.5, 0.5);

      renderer.render(scene, camera);
    };

    init();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      stats.dom.remove();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh", position: "relative" }} />;
};

export default Particles;
