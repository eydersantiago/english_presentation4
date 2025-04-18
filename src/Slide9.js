import React from 'react'
import WorldMapSpain from './slides/WorldMapSpain'
import { Billboard, OrbitControls } from '@react-three/drei'
import { PulseText } from './efects/TextAnimations'

export default function Slide9({ active }) {
  return (
    <>
      <OrbitControls 
        enableRotate={false}
        enableZoom={true}
        minDistance={50}
        maxDistance={500}
      />

        <WorldMapSpain active={active} />

      <Billboard 
        position={[-155, 80, 2]} 
        renderOrder={100} 
        follow={false}
      >
        <PulseText
          fontSize={8}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={99}
          active={true}
        >
          law on euthanasia in Spain
        </PulseText>
      </Billboard>
    </>
  )
}