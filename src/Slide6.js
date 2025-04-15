import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { PulseText } from './efects/TextAnimations';
//import Gif from './efects/Gif';


//acá digo que evita el sufrimiento para el afectado y su familia, y que es un acto de amor y compasión.
const Slide6 = () => {
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
          active={true}
        >
          Arguments in favor
        </PulseText>
      </Billboard>

        <Billboard position={[0, 1.4, -0.1]}>
            <PulseText
                fontSize={0.5}
                color="#fff"
                anchorX="center"
                anchorY="middle"
                depthTest={false}
                renderOrder={3}
                active={true}
            >
                of euthanasia
            </PulseText>
        </Billboard>

        

        <Billboard position={[3, -1.75, -0.1]}>
            <PulseText
                fontSize={0.15}
                color="#fff"
                anchorX="left"
                anchorY="bottom"
                depthTest={false}
                renderOrder={3}
                active={true}
            >
                What is my opinion?
            </PulseText>
        </Billboard>

        <Billboard>
            <Image
              url="/statics/agree.png"
              position={[0, 0, 0.1]}
              scale={[1.5, 1.5, 1.5]}
              depthTest={false}
              renderOrder={3}
            />
          </Billboard>
    </>
  );
};

export default Slide6;
