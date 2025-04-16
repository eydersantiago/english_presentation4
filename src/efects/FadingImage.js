import React, { useMemo, useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useSpring } from '@react-spring/three'
import { BrightnessContrastMaterial } from './BrightnessContrastMaterial'

export default function FadingImage({ active }) {
  // 1) Cargo la textura
  const tex = useLoader(TextureLoader, '/statics/image2.1.jpg')
  // 2) Creo la instancia de mi material
  const material = useMemo(() => new BrightnessContrastMaterial(), [])

  // 3) Asigno la textura al uniform
  useEffect(() => {
    material.uniforms.map.value = tex
    material.needsUpdate = true
  }, [tex, material])

  // 4) Creamos el spring con API, inicializamos sin animación
  const [springs, api] = useSpring(() => ({
    brightness: 1.0,
    contrast:   1.0,
  }))

  // 5) Cuando `active` cambie, lanzamos la animación
  useEffect(() => {
    api.start({
      brightness: active ? 0.3 : 1.0,
      contrast:   active ? 0.8 : 1.0,
      delay:      700,                     // opcional
      config:     { duration: 3000 },      // <— aquí tu 5 s
      // no hace falta immediate: false, es el valor por defecto
    })
  }, [active, api])


  // 6) Cada frame inyectamos los valores en el shader
  useFrame(() => {
    material.uniforms.brightness.value = springs.brightness.get()
    material.uniforms.contrast.value   = springs.contrast.get()
  })

  return (
    <mesh position={[0, 0, 0.1]}>
      <planeGeometry args={[7.3, 2.65]} />
      <primitive
        object={material}
        attach="material"
        transparent
        depthTest={false}
      />
    </mesh>
  )
}