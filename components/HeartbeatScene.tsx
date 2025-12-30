
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeartbeatScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // AI Minion Placeholder (High-Gloss Yellow Sphere)
    const geometry = new THREE.SphereGeometry(1.6, 128, 128);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0xFCE029, 
      metalness: 0.3, 
      roughness: 0.05,
      emissive: 0xFCE029,
      emissiveIntensity: 0.05
    });
    const minion = new THREE.Mesh(geometry, material);
    scene.add(minion);

    // Subtle outer halo/glow
    const glowGeo = new THREE.SphereGeometry(1.7, 64, 64);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xFCE029,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    minion.add(glow);

    // Lights for premium "Apple-style" product look
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.8);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);
    
    const rimLight = new THREE.PointLight(0xffffff, 1.2);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);

    const bottomLight = new THREE.PointLight(0xFF8C00, 1.5);
    bottomLight.position.set(0, -5, 2);
    scene.add(bottomLight);
    
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const time = Date.now() * 0.0015;
      
      // Purely Ambient Breathing and Floating Animation
      // Looping pulse
      const scale = 1 + Math.sin(time * 2) * 0.04;
      minion.scale.set(scale, scale, scale);
      
      // Looping float
      minion.position.y = Math.sin(time) * 0.25;
      
      // Gentle rotation for life
      minion.rotation.y += 0.004;
      minion.rotation.x = Math.sin(time * 0.5) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      id="minion-container"
    />
  );
};

export default HeartbeatScene;
