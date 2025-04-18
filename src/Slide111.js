import React, { useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { Billboard } from '@react-three/drei'
import { PulseText } from './efects/TextAnimations'

const Slide111 = () => {
  // 1) Crea el <video> una sola vez
  const videoRef = useRef(document.createElement('video'))

  // 2) Configura la carga y reproducción
  useEffect(() => {
    const video = videoRef.current
    video.src = '/statics/video5.mp4'        // tu mp4 en public/
    video.crossOrigin = 'anonymous'
    video.loop = true
    video.muted = true
    video.playsInline = true

    const onCanPlay = () => {
      video.play().catch(console.error)
      video.removeEventListener('canplay', onCanPlay)
    }
    video.addEventListener('canplay', onCanPlay)
    video.load()

    return () => {
      video.removeEventListener('canplay', onCanPlay)
    }
  }, [])

  // 3) Define la VideoTexture _una sola vez_
  const videoTexture = useMemo(() => {
    const tex = new THREE.VideoTexture(videoRef.current)
    tex.minFilter = THREE.LinearFilter
    tex.magFilter = THREE.LinearFilter
    tex.format = THREE.RGBAFormat
    return tex
  }, [])

  return (
    <>
      <Billboard position={[0, 2, -0.1]}>
        <PulseText
          fontSize={0.7}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={3}
          active
        >
          Types of Euthanasia
        </PulseText>
      </Billboard>

      <Billboard position={[-3, 0.5, -0.1]}>
        <PulseText
          fontSize={0.2}
          color="#fff"
          anchorX="left"
          anchorY="bottom"
          depthTest={false}
          renderOrder={3}
          active
        >
          Vídeo about euthanasia
        </PulseText>
      </Billboard>

      {/* 4) Usa videoTexture sin que esté indefinido */}
      <mesh position={[3, 1, -0.2]} renderOrder={1}>
        <planeGeometry args={[4, 2.25]} />
        <meshBasicMaterial
          map={videoTexture}
          toneMapped={false}
        />
      </mesh>
    </>
  )
}

export default Slide111
