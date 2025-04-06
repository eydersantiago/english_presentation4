// InteractiveBackground.js
import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { createNoise3D } from 'simplex-noise';

const InteractiveBackground = () => {
  const count = 700; // Número de partículas

  // Posiciones base inmutables para referencia
  const basePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, [count]);

  // Creamos una copia mutable de las posiciones para actualizar en cada frame
  const positionsArray = useMemo(() => Float32Array.from(basePositions), [basePositions]);

  const particlesRef = useRef();
  const noise3D = useMemo(() => createNoise3D(), []);
  const { mouse } = useThree();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = particlesRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      // Ruido para movimiento orgánico (como en tu código de referencia)
      const noiseX = noise3D(basePositions[ix] * 0.05, basePositions[iy] * 0.05, time * 0.1);
      const noiseY = noise3D(basePositions[iy] * 0.05, basePositions[iz] * 0.05, time * 0.1);
      const noiseZ = noise3D(basePositions[iz] * 0.05, basePositions[ix] * 0.05, time * 0.1);

      // Oscilación adicional para generar figuritas y recocholis
      const oscillationX = Math.cos(time * 0.5 + i * 0.01) * 2;
      const oscillationY = Math.sin(time * 0.5 + i * 0.01) * 2;
      const oscillationZ = Math.sin(time * 2 + i * 0.02) * 2;

      // Combinamos la posición base, el ruido, la influencia del mouse y la oscilación
      positions[ix] = basePositions[ix] + noiseX * 5 + mouse.x * 4 + oscillationX;
      positions[iy] = basePositions[iy] + noiseY * 5 + mouse.y * 4 + oscillationY;
      positions[iz] = basePositions[iz] + noiseZ * 5 + oscillationZ;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionsArray.length / 3}
          array={positionsArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#888" size={0.2} transparent opacity={0.8} />
    </points>
  );
};

export default InteractiveBackground;
