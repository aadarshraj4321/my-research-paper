// // components/ParticleBackground.tsx
// "use client";
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const ParticleBackground = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     containerRef.current.appendChild(renderer.domElement);

//     // Particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 1500;
//     const posArray = new Float32Array(particlesCount * 3);
    
//     for(let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 5;
//     }
    
//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

//     // Material
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: '#4F46E5', // Indigo color to match your theme
//       transparent: true,
//       opacity: 0.8,
//       blending: THREE.AdditiveBlending
//     });

//     // Mesh
//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);

//     // Camera position
//     camera.position.z = 3;

//     // Mouse
//     const mouse = {
//       x: 0,
//       y: 0
//     };

//     window.addEventListener('mousemove', (event) => {
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     });

//     // Animation
//     let frame = 0;
//     const animate = () => {
//       requestAnimationFrame(animate);
//       frame += 0.01;

//       particlesMesh.rotation.y = frame * 0.1;
//       particlesMesh.rotation.x = mouse.y * 0.1;
//       particlesMesh.rotation.z = mouse.x * 0.1;

//       // Subtle wave animation
//       const positions = particlesGeometry.attributes.position.array as Float32Array;
//       for(let i = 0; i < particlesCount; i++) {
//         const x = i * 3;
//         const y = i * 3 + 1;
//         const z = i * 3 + 2;

//         positions[y] += Math.sin(frame + positions[x]) * 0.001;
//       }
//       particlesGeometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       containerRef.current?.removeChild(renderer.domElement);
//       scene.remove(particlesMesh);
//       particlesGeometry.dispose();
//       particlesMaterial.dispose();
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef} 
//       className="fixed inset-0 pointer-events-none"
//       style={{ zIndex: 0 }}
//     />
//   );
// };

// export default ParticleBackground;















"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BlackHoleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Optimized scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#000000');
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: "high-performance",
      precision: "mediump" // Better performance
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Optimized particle creation
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

        // Gradient color effect
        const intensity = Math.random() * 0.5 + 0.5;
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
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      });

      return new THREE.Points(geometry, material);
    };

    // Create larger black hole effect
    const blackHoleRadius = 2.5; // Increased size
    const particleSystems = [
      createParticleSystem(3000, 0.015, '#FFFFFF', blackHoleRadius * 2), // Bright outer ring
      createParticleSystem(2000, 0.012, '#A9A9FF', blackHoleRadius * 1.5), // Middle ring
      createParticleSystem(1500, 0.01, '#4F46E5', blackHoleRadius) // Inner ring
    ];

    particleSystems.forEach(system => scene.add(system));

    // Enhanced black hole center
    const blackHoleGeometry = new THREE.SphereGeometry(blackHoleRadius * 0.4, 32, 32);
    const blackHoleMaterial = new THREE.MeshBasicMaterial({
      color: '#000000',
      transparent: true,
      opacity: 0.95,
    });
    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
    scene.add(blackHole);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add point light for dramatic effect
    const pointLight = new THREE.PointLight(0x4F46E5, 2, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 8;

    // Enhanced mouse interaction
    const mouse = {
      x: 0,
      y: 0,
      vx: 0, // Velocity X
      vy: 0  // Velocity Y
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Optimized animation loop
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      frame += 0.003; // Slower rotation for smoother effect

      // Smooth mouse-based rotation
      mouse.vx += (mouse.x - mouse.vx) * 0.05;
      mouse.vy += (mouse.y - mouse.vy) * 0.05;

      particleSystems.forEach((system, index) => {
        // Rotate based on mouse position with layered effect
        system.rotation.y = frame * (0.2 + index * 0.1) + mouse.vx * 2;
        system.rotation.x = mouse.vy * 1.5;

        const positions = system.geometry.attributes.position.array as Float32Array;
        const count = positions.length / 3;

        // Optimized particle movement
        for(let i = 0; i < count; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          const z = positions[i + 2];
          
          const distance = Math.sqrt(x * x + y * y + z * z);
          
          if (distance < blackHoleRadius * 0.3) {
            // Reset particles that get too close
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = Math.random() * blackHoleRadius * 2;

            positions[i] = r * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = r * Math.cos(phi);
          } else {
            // Spiral effect towards center
            const force = 0.002 / (distance * distance);
            positions[i] -= x * force;
            positions[i + 1] -= y * force;
            positions[i + 2] -= z * force;
          }
        }
        
        system.geometry.attributes.position.needsUpdate = true;
      });

      // Black hole rotation follows mouse
      blackHole.rotation.y = mouse.vx * 3;
      blackHole.rotation.x = mouse.vy * 2;

      // Update point light position based on mouse
      pointLight.position.x = mouse.vx * 10;
      pointLight.position.y = mouse.vy * 10;

      renderer.render(scene, camera);
    };

    animate();

    // Optimized resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of all resources
      particleSystems.forEach(system => {
        scene.remove(system);
        system.geometry.dispose();
        (system.material as THREE.PointsMaterial).dispose();
      });
      scene.remove(blackHole);
      blackHoleGeometry.dispose();
      blackHoleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0"
      style={{ zIndex: 0, background: '#000000' }}
    />
  );
};

export default BlackHoleBackground;