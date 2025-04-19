import React from 'react'
import WorldMapActive from './slides/WorldMapActive'
import { Billboard, OrbitControls } from '@react-three/drei'
import { PulseText } from './efects/TextAnimations'

export default function Slide4({ active }) {
  return (
    <>
      <OrbitControls 
        enableRotate={false}
        enableZoom={true}
        minDistance={50}
        maxDistance={500}
      />

      <WorldMapActive active={active} />

      <Billboard 
        position={[-170, 100, 2]} 
        renderOrder={100} 
        follow={false}
      >
        <PulseText
          fontSize={10}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={101}
          active={true}
        >
          Euthanasia active in the world
        </PulseText>
      </Billboard>
    </>
  )
}