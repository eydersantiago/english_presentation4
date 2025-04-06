import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { ZoomInText } from './efects/TextAnimations';

const Slide2 = () => {
  return (
    <>
      {/* Title at the top (translated to English) */}
      <Billboard position={[0, 2, -0.1]}>
        <ZoomInText
          fontSize={0.8}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={3}
          active={true}
        >
          What is euthanasia?
        </ZoomInText>
      </Billboard>

      {/* Presented by text at the bottom left */}
      <Billboard position={[3.5, 1.1, -0.1]}>
        <ZoomInText
          fontSize={0.15}
          color="#fff"
          anchorX="left"
          anchorY="bottom"
          depthTest={false}
          renderOrder={3}
          active={true}
        >
           The act of intentionally ending a person's life to relieve them of suffering.
        </ZoomInText>
      </Billboard>

      {/* Example image loaded from the static folder */}
      <Image
        url="/statics/image1.png"
        position={[-2.7, 0, 0.1]}
        scale={[1.5, 1.5, 1.5]}
      />
    </>
  );
};

export default Slide2;
