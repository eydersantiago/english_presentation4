import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { FadeInText } from './efects/TextAnimations';

const Slide1 = () => {
  return (
    <>
      {/* Título animado en la parte superior */}
      <Billboard position={[0, 2, 0]} renderOrder={2}>
        <FadeInText
          position={[0, 0, 0.1]} // Pequeño offset en Z para que quede por delante
          fontSize={0.8}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          active={true}
        >
          Euthanasia
        </FadeInText>
      </Billboard>

      {/* Texto "Presentado por" */}
      <Billboard position={[-3.5, -2, 0]} renderOrder={2}>
        <FadeInText
          position={[0, 0, 0.1]}
          fontSize={0.2}
          color="#fff"
          anchorX="left"
          anchorY="bottom"
          active={true}
        >
          Presented by{'\n'}Eyder Santiago Suarez Chavez{'\n'}2322714-3743
        </FadeInText>
      </Billboard>

      {/* Imagen de ejemplo */}
      <Image
        url="/statics/image1.png"
        position={[-2.7, -0.35, 0.1]}
        scale={[1.5, 1.5, 1.5]}
      />
    </>
  );
};

export default Slide1;
