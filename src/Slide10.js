import React from 'react'
import WorldMapEcuador from './slides/WorldMapEcuador'
import { Billboard, OrbitControls } from '@react-three/drei'
import { PulseText } from './efects/TextAnimations'

export default function Slide10({ active }) {
  return (
    <>
      <OrbitControls 
        enableRotate={false}
        enableZoom={true}
        minDistance={50}
        maxDistance={500}
      />

        <WorldMapEcuador active={active} />

      <Billboard 
        position={[-90, 50, 2]} 
        renderOrder={100} 
        follow={false}
      >
        <PulseText
          fontSize={5}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={99}
          active={true}
        >
          law on euthanasia in Ecuador
        </PulseText>
      </Billboard>
    </>
  )
}