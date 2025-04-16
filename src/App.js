// App.js
import './App.css';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import { a, useSpring } from '@react-spring/three';

import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import InteractiveBackground from './efects/InteractiveBackground';  // Importa el fondo interactivo
import Slide5 from './Slide5';
import Slide6 from './Slide6';
import Slide7 from './Slide7';
import Slide8 from './Slide8';
import Slide9 from './Slide9';
import Slide10 from './Slide10';
import Slide11 from './Slide11';

// Camera animator: starts from afar and animates to [0,0,10]
function CameraAnimator({ started, currentSlide }) {
  const { camera } = useThree()
  const [{ position }, api] = useSpring(() => ({
    position: [0, 30, 10], // posición por defecto
    config: { mass: 1, tension: 170, friction: 26 },
  }))

  useEffect(() => {
    if (!started) return

    switch (currentSlide) {
      case 9:
        // Slide10: cámara alejada para el mapa
        api.start({ position: [0, 0, 300] })
        break

      case 10:
        // Slide11: cámara intermedia (ajusta valores según necesites)
        api.start({ position: [0, 0, 300] })
        break

      default:
        // Slides 1–9: posición por defecto
        api.start({ position: [0, 0, 10] })
        break
    }
  }, [started, currentSlide, api])

  useFrame(() => {
    camera.position.set(...position.get())
    camera.lookAt(0, 0, 0)
  })

  return null
}
// Cube component: renders the full cube with 6 faces,
// but only displays content on the 4 “active” faces.
function Cube({ slides, faceTransforms, cubeOrientations, currentSlide, started, displayIndex }) {
  const initialOrientation =
    cubeOrientations && cubeOrientations.length > 0
      ? cubeOrientations[0]
      : new THREE.Euler(0, 0, 0);
  const targetQuat = useRef(new THREE.Quaternion().setFromEuler(initialOrientation));

  useEffect(() => {
    if (cubeOrientations && cubeOrientations[displayIndex]) {
      targetQuat.current.copy(new THREE.Quaternion().setFromEuler(cubeOrientations[displayIndex]));
    }
  }, [displayIndex, cubeOrientations]);

  const cubeRef = useRef();
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.quaternion.slerp(targetQuat.current, 0.1);
    }
  });

  const { color } = useSpring({
    from: { color: "#333" },
    to: async (next) => {
      await next({ color: "#001f3f", config: { duration: 10000 } });
      await next({ color: "#333", config: { duration: 10000 } });
    },
    loop: true,
  });

  return (
    <group ref={cubeRef}>
      {faceTransforms.map((ft, i) => (
        <group key={i} position={ft.pos} rotation={ft.rot}>
          <mesh renderOrder={0}>
            <planeGeometry args={[8, 8]} />
            <a.meshBasicMaterial
              color={color}
              opacity={0.8}
              transparent
              side={THREE.DoubleSide}
            />
          </mesh>
          {started && i < 4 && i === displayIndex && (
            <>
              {slides[currentSlide].component ? (
                React.cloneElement(slides[currentSlide].component, { active: true })
              ) : (
                <>
                  <Billboard>
                    <Text
                      position={[0, 1.5, 0.11]}
                      fontSize={0.8}
                      color="#fff"
                      anchorX="center"
                      anchorY="center"
                      depthTest={false}
                      renderOrder={2}
                    >
                      {slides[currentSlide].title}
                    </Text>
                  </Billboard>
                  <Billboard>
                    <Text
                      position={[0, 0.2, 0.11]}
                      fontSize={0.4}
                      color="#fff"
                      maxWidth={6.5}
                      lineHeight={1.2}
                      anchorX="center"
                      anchorY="top"
                      depthTest={false}
                      renderOrder={2}
                    >
                      {slides[currentSlide].content}
                    </Text>
                  </Billboard>
                </>
              )}
            </>
          )}
        </group>
      ))}
    </group>
  );
}

function App() {
  const slides = [
    {
      component: <Slide1 />,
    },
    {
      component: <Slide2 />,
    },
    {
      component: <Slide3 />,
    },
    {
      component: <Slide4 />,
    },
    {
      component: <Slide5 />,
    },
    {
      component: <Slide6 />,
    },
    {
      component: <Slide7 />,
    },
    {
      component: <Slide8 />,
    },
    {
      component: <Slide9 />,
    },
    {
      component: <Slide10 />,
    },
    {
      component: <Slide11 />,
    },
  ];

  const fullFaceTransforms = useMemo(
    () => [
      { pos: [0, 0, 4], rot: [0, 0, 0] },
      { pos: [4, 0, 0], rot: [0, -Math.PI / 2, 0] },
      { pos: [0, 0, -4], rot: [0, Math.PI, 0] },
      { pos: [-4, 0, 0], rot: [0, Math.PI / 2, 0] },
      { pos: [0, 4, 0], rot: [-Math.PI / 2, 0, 0] },
      { pos: [0, -4, 0], rot: [Math.PI / 2, 0, 0] },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [started, setStarted] = useState(false);
  const displayIndex = currentSlide < 4 ? currentSlide : currentSlide % 4;
  const fullOrientations = useMemo(
    () => fullFaceTransforms.map((ft) => new THREE.Euler(...ft.rot)),
    [fullFaceTransforms]
  );

  const handleClick = (e) => {
    if (!started) {
      setStarted(true);
      return;
    }
    if (e.clientX < window.innerWidth / 2) {
      setCurrentSlide((s) => (s > 0 ? s - 1 : s));
    } else {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 300], fov: 45 }} dpr={[1, 2]} onClick={handleClick}>
        <ambientLight intensity={0.5} />
        <InteractiveBackground />
        <CameraAnimator started={started} currentSlide={currentSlide} />

        {(() => {
          switch (currentSlide) {
            case 9:
              return <Slide10 active={started} />
            case 10:
              return <Slide11 active={started} />
            default:
              return (
                <Cube
                  slides={slides}
                  faceTransforms={fullFaceTransforms}
                  cubeOrientations={fullOrientations}
                  currentSlide={currentSlide}
                  started={started}
                  displayIndex={displayIndex}
                />
              )
          }
        })()}
      </Canvas>
    </div>
  );
}

export default App;
