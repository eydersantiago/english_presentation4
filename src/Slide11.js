import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { BounceText, PulseText } from './efects/TextAnimations';
import TablaEutanasia from './slides/TablaDatos';
//import Gif from './efects/Gif';



const Slide11 = () => {
  return (
    <>
    <Billboard position={[0, 2, -0.1]}>
      <BounceText
        fontSize={0.65}
        color="#fff"
        anchorX="center"
        anchorY="middle"
        depthTest={false}
        renderOrder={3}
        active={true}
      >
        Next
      </BounceText>
    </Billboard>

   


    

    


    </>
  );
};

export default Slide11;
