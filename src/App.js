import './App.css';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import { a, useSpring } from '@react-spring/three';

import Slide1 from './Slide1';

// Camera animator: starts from afar and animates to [0,0,10]
function CameraAnimator({ started }) {
  const { camera } = useThree();
  const [{ position }, api] = useSpring(() => ({
    position: [0, 30, 10],
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  useEffect(() => {
    if (started) {
      api.start({ position: [0, 0, 10] });
    }
  }, [started, api]);

  useFrame(() => {
    camera.position.set(...position.get());
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Cube component: renders the full cube with 6 faces,
// but only displays content on the 4 “active” faces.
function Cube({ slides, faceTransforms, cubeOrientations, currentSlide, started, displayIndex }) {
  // Fallback to ensure cubeOrientations is defined
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
      await next({ color: "#001f3f", config: { duration: 10000 } }); // en 10 segundos pasa a azul oscuro
      await next({ color: "#333", config: { duration: 10000 } });    // en los siguientes 10 regresa al original
    },
    loop: true,
  });


  return (
    <group ref={cubeRef}>
      {faceTransforms.map((ft, i) => (
        <group key={i} position={ft.pos} rotation={ft.rot}>
          <mesh>
            <planeGeometry args={[8, 8]} />
            <a.meshBasicMaterial
              color={color}
              opacity={0.8}
              transparent
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Only render content on the active face (indices 0-3) */}
          {started && i < 4 && i === displayIndex && (
            <>
              {slides[currentSlide].component ? (
                // Render custom component if provided for this slide
                slides[currentSlide].component
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
  // Define slides: the first slide now uses the custom Slide1 component,
  // while the others remain as text objects.
  const slides = [
    {
      component: <Slide1 />, // Custom slide imported from a separate file
    },
    {
      title: "Types of Euthanasia",
      content:
        "• Voluntary: with patient consent.\n• Non-voluntary: patient unable to consent.\n• Involuntary: against patient's will (illegal).\n• Active: deliberate act (e.g. lethal injection).\n• Passive: withholding life-sustaining treatment.",
    },
    {
      title: "Legal and Ethical Issues",
      content:
        "• Legal in a few countries under strict conditions (e.g. Netherlands, Belgium).\n• Illegal in many places; often seen as against medical ethics.\n• Ethical debates: autonomy vs sanctity of life, doctors' duties, slippery slope.",
    },
    {
      title: "Arguments For",
      content:
        "• Respects personal choice and the right to die with dignity.\n• Can prevent unbearable suffering when no recovery is possible.\n• Provides a way to avoid prolonged pain and loss of quality of life.",
    },
    {
      title: "Arguments Against",
      content:
        "• Preservation of life: not all terminal illness causes unmanageable pain.\n• Palliative care can relieve suffering without killing the patient.\n• Risk of abuse or pressure on vulnerable people; slippery slope concerns.",
    },
    {
      title: "Global Perspectives",
      content:
        "• Active euthanasia is legal in only a few countries (e.g. BE, NL, CA).\n• Some places allow physician-assisted suicide (e.g. certain US states).\n• Most nations prohibit it; debates continue worldwide.",
    },
  ];

  // Define complete face transforms for the cube
  const fullFaceTransforms = useMemo(
    () => [
      { pos: [0, 0, 4], rot: [0, 0, 0] }, // Front
      { pos: [4, 0, 0], rot: [0, -Math.PI / 2, 0] }, // Right
      { pos: [0, 0, -4], rot: [0, Math.PI, 0] }, // Back
      { pos: [-4, 0, 0], rot: [0, Math.PI / 2, 0] }, // Left
      { pos: [0, 4, 0], rot: [-Math.PI / 2, 0, 0] }, // Top
      { pos: [0, -4, 0], rot: [Math.PI / 2, 0, 0] }, // Bottom
    ],
    []
  );

  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [started, setStarted] = useState(false);
  const displayIndex = currentSlide < 4 ? currentSlide : currentSlide % 4;
  const fullOrientations = useMemo(
    () => fullFaceTransforms.map((ft) => new THREE.Euler(...ft.rot)),
    [fullFaceTransforms]
  );

  // Click handler: first click starts the animation, then left/right click navigates
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
      <Canvas camera={{ position: [0, 30, 10], fov: 50 }} dpr={[1, 2]} onClick={handleClick}>
        <ambientLight intensity={0.5} />
        <CameraAnimator started={started} />
        <Cube
          slides={slides}
          faceTransforms={fullFaceTransforms}
          cubeOrientations={fullOrientations}
          currentSlide={currentSlide}
          started={started}
          displayIndex={displayIndex}
        />
      </Canvas>
    </div>
  );
}

export default App;
