import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { FadeInText } from './efects/TextAnimations';
import  FadingImage from './efects/FadingImage';
//import Gif from './efects/Gif';

const Slide1 = ({ active }) => {
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
      <Billboard position={[-3.6, -2.5, 0]} renderOrder={2}>
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
      <FadingImage active={active} />
      <Image
        url="/statics/border1.png"
        position={[0, 0, 0.1]}
        scale={[9, 12, 0.1]}
        transparent={true}      // habilita transparencia
        alphaTest={0.1}         // descarta píxeles con alpha < 0.1
        depthTest={false}       // siempre encima de lo que haya detrás
        renderOrder={3}
      />


    </>
  );
};

export default Slide1;
