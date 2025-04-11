import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { PulseText } from './efects/TextAnimations';
//import Gif from './efects/Gif';


//cOLOCAR UN GIF DE DESPEDIDA
const Slide9 = () => {
  return (
    <>
      <Billboard position={[0, 2, 0.1]}>
        <PulseText
          fontSize={0.7}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={3}
          active={true}
        >
          Bibliografía
        </PulseText>
      </Billboard>


    </>
  );
};

export default Slide9;
