import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

    const positions = [];

    for (let y = 0; y < window.innerHeight; y += 20) {
      for (let x = 0; x < window.innerWidth; x += 20) {
        positions.push(x, y, 0);
      }
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 1;

    const animate = function () {
      requestAnimationFrame(animate);

      const positions = stars.geometry.attributes.position.array;

      for (let i = 2; i < positions.length; i += 3) {
        positions[i] -= 0.2;
        if (positions[i] < -200) {
          positions[i] = 200;
        }
      }

      stars.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={mountRef} />;
};

export default Background;