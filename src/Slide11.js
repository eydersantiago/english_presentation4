import React from 'react'
import WorldMapPassive from './slides/WorldMapPassive'
import { Billboard, OrbitControls } from '@react-three/drei'
import { PulseText } from './efects/TextAnimations'

export default function Slide11({ active }) {
  return (
    <>
      <OrbitControls 
        enableRotate={false}
        enableZoom={true}
        minDistance={50}
        maxDistance={500}
      />

      <WorldMapPassive active={active} />

      <Billboard 
        position={[-180, 100, 2]} 
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
          Euthanasia passive in the world
        </PulseText>
      </Billboard>
    </>
  )
}