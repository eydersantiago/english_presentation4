import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { ZoomInText } from './efects/TextAnimations';
//import Gif from './efects/Gif';


//Las leyes tienen defectos, hay personas que pueden usar la eutanasia sin justificación dado a los vacíos legales y eso es un problema.
const Slide77 = () => {
  return (
    <>
      <Billboard position={[0, 2, 0.1]}>
        <ZoomInText
          fontSize={0.7}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={3}
          active={true}
        >
          Arguments against
        </ZoomInText>
      </Billboard>

        <Billboard position={[0, 1.4, 0.1]}>
            <ZoomInText
                fontSize={0.5}
                color="#fff"
                anchorX="center"
                anchorY="middle"
                depthTest={false}
                renderOrder={3}
                active={true}
            >
                of euthanasia
            </ZoomInText>
        </Billboard>

        

        <Billboard position={[-3, -1.75, 0.1]}>
            <ZoomInText
                fontSize={0.15}
                color="#fff"
                anchorX="left"
                anchorY="bottom"
                depthTest={false}
                renderOrder={3}
                active={true}
            >
                What is my opinion?
            </ZoomInText>
        </Billboard>


        <Billboard>
            <Image
              url="/statics/disagree.png"
              position={[0, 0, 0.1]}
              scale={[1.5, 1.5, 1.5]}
              depthTest={false}
              renderOrder={3}
            />
          </Billboard>
    </>
  );
};

export default Slide77;
