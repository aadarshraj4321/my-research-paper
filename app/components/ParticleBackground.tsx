"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from './common/themeContext';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#ffffff');
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: "high-performance",
      precision: "mediump"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const colors = {
      outer: '#8A2BE2',      
      middle: '#8A2BE2',     
      inner: '#8A2BE2',      
      particles: '#8A2BE2'   
    };

    const createParticleSystem = (count: number, size: number, color: string, radius: number) => {
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const color1 = new THREE.Color(color);
      
      for(let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const r = Math.random() * radius;

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        const intensity = Math.random() * 0.4 + 0.6;
        colors[i * 3] = color1.r * intensity;
        colors[i * 3 + 1] = color1.g * intensity;
        colors[i * 3 + 2] = color1.b * intensity;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,        
        blending: THREE.NormalBlending, 
        depthWrite: false,
        sizeAttenuation: true
      });

      return new THREE.Points(geometry, material);
    };

    const blackHoleRadius = 3;
    const particleSystems = [
      createParticleSystem(6000, 0.03, colors.outer, blackHoleRadius * 2),
      createParticleSystem(5000, 0.025, colors.middle, blackHoleRadius * 1.5),
      createParticleSystem(4000, 0.02, colors.inner, blackHoleRadius),
      createParticleSystem(3000, 0.015, colors.particles, blackHoleRadius * 2.5)
    ];

    particleSystems.forEach(system => scene.add(system));

    const centerGeometry = new THREE.SphereGeometry(blackHoleRadius * 0.4, 32, 32);
    const centerMaterial = new THREE.MeshPhongMaterial({
      color: '#000000',
      transparent: true,
      opacity: 1,           
      shininess: 100
    });
    const center = new THREE.Mesh(centerGeometry, centerMaterial);
    scene.add(center);

    const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight('#ffffff', 1.5, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 8;

    const mouse = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      frame += 0.003;

      mouse.vx += (mouse.x - mouse.vx) * 0.05;
      mouse.vy += (mouse.y - mouse.vy) * 0.05;

      particleSystems.forEach((system, index) => {
        system.rotation.y = frame * (0.2 + index * 0.1) + mouse.vx * 2;
        system.rotation.x = mouse.vy * 1.5;

        const positions = system.geometry.attributes.position.array as Float32Array;
        const count = positions.length / 3;

        for(let i = 0; i < count; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          const z = positions[i + 2];
          
          const distance = Math.sqrt(x * x + y * y + z * z);
          
          if (distance < blackHoleRadius * 0.3) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = Math.random() * blackHoleRadius * 2;

            positions[i] = r * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = r * Math.cos(phi);
          } else {
            const force = 0.002 / (distance * distance);
            positions[i] -= x * force;
            positions[i + 1] -= y * force;
            positions[i + 2] -= z * force;
          }
        }
        
        system.geometry.attributes.position.needsUpdate = true;
      });

      center.rotation.y = mouse.vx * 3;
      center.rotation.x = mouse.vy * 2;

      pointLight.position.x = mouse.vx * 10;
      pointLight.position.y = mouse.vy * 10;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      particleSystems.forEach(system => {
        scene.remove(system);
        system.geometry.dispose();
        (system.material as THREE.PointsMaterial).dispose();
      });
      scene.remove(center);
      centerGeometry.dispose();
      centerMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0"
      style={{ zIndex: 0, background: '#ffffff' }}
    />
  );
};

export default ParticleBackground;
