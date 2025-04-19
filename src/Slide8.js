import React from 'react'
import WorldMapColombia from './slides/WorldMapColombia'
import { Billboard, OrbitControls } from '@react-three/drei'
import { PulseText } from './efects/TextAnimations'

export default function Slide8({ active }) {
  return (
    <>
      <OrbitControls 
        enableRotate={false}
        enableZoom={true}
        minDistance={50}
        maxDistance={500}
      />

        <WorldMapColombia active={active} />

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
          renderOrder={99}
          active={true}
        >
          law on euthanasia in Colombia
        </PulseText>
      </Billboard>
    </>
  )
}