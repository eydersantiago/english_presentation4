import React from 'react';
import { Billboard, Image } from '@react-three/drei'; // añadimos Image
import { PulseText } from './efects/TextAnimations';

const Slide100 = () => (   // uso de retorno implícito
  <>
    <Image
      url="/statics/thanks.png"
      position={[0, 0, 0.1]}
      scale={[8, 3.1, 1]}
      transparent={true}
      alphaTest={0.1}
      depthTest={false}
      renderOrder={3}
    />

  </>
);

export default Slide100;
