// MyBlurImage.js
import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { SRGBColorSpace } from 'three';
import { a, useSpring } from '@react-spring/three';

const MyBlurImage = ({ url, ...props }) => {
  // Cargamos la textura con Three.js
  const texture = useLoader(THREE.TextureLoader, url);
  // Evitamos “tintes” raros forzando sRGB para texturas 2D
  texture.encoding = SRGBColorSpace;


  // Animación: de blur=1 a blur=0 en 1 segundo
  // Se ejecuta en cada montaje de este <MyBlurImage />
  const { blur } = useSpring({
    from: { blur: 1 },
    to:   { blur: 0 },
    config: { duration: 1000 } // 1s
  });

  return (
    <a.mesh {...props}>
      {/* Tu plano */}
      <planeGeometry args={[1, 1]} />
      {/* Nuestro shaderMaterial */}
      <a.shaderMaterial
        toneMapped={false}
        // uniforms "reactivos" (react-spring inyecta el valor a uBlurAmount)
        uniforms={{
          uTexture:    { value: texture },
          uBlurAmount: { value: blur },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </a.mesh>
  );
};

export default MyBlurImage;

// === Shaders ===
const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix
                * modelViewMatrix
                * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uBlurAmount;

  void main() {
    // Cantidad base de blur
    float blurSize = 0.005 * uBlurAmount;  // Ajusta a gusto

    // Tomamos varias muestras alrededor
    vec4 sum = vec4(0.0);
    sum += texture2D(uTexture, vUv + vec2(-4.0, -4.0) * blurSize);
    sum += texture2D(uTexture, vUv + vec2(-4.0,  4.0) * blurSize);
    sum += texture2D(uTexture, vUv + vec2( 4.0, -4.0) * blurSize);
    sum += texture2D(uTexture, vUv + vec2( 4.0,  4.0) * blurSize);

    sum += texture2D(uTexture, vUv + vec2(-2.0, -2.0) * blurSize);
    sum += texture2D(uTexture, vUv + vec2(-2.0,  2.0) * blurSize);
    sum += texture2D(uTexture, vUv + vec2( 2.0, -2.0) * blurSize);
    sum += texture2D(uTexture, vUv + vec2( 2.0,  2.0) * blurSize);

    // Centro
    sum += texture2D(uTexture, vUv);

    // Promediamos
    gl_FragColor = sum / 9.0;
  }
`;
