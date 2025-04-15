import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { PulseText } from './efects/TextAnimations';
//import Gif from './efects/Gif';



const Slide3 = () => {
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
          Types of Euthanasia
        </PulseText>
      </Billboard>

      <Billboard position={[-3, 0.5, 0.1]}>
        <PulseText
          fontSize={0.2}
          color="#fff"
          anchorX="left"
          anchorY="bottom"
          depthTest={false}
          renderOrder={3}
          active={true}
        >
          Active
        </PulseText>
      </Billboard>

      <Billboard>
        <Image
          url="/statics/drugs.png"
          position={[-1.8, -0.8, 0.1]}
          scale={[2.3, 2.3, 0.1]}
          depthTest={false}
          renderOrder={3}
        />
      </Billboard>

      <Billboard position={[0, 0.5, 0.1]}>
        <PulseText
          fontSize={0.2}
          color="#fff"
          anchorX="left"
          anchorY="bottom"
          depthTest={false}
          renderOrder={3}
          active={true}
        >
          Passive
        </PulseText>
      </Billboard>

      <Billboard>
        <Image
          url="/statics/no_drugs.png"
          position={[2.3, 0.5, 0.1]}
          scale={[2.3, 2.3, 0.1]}
          depthTest={false}
          renderOrder={3}
        />
      </Billboard>

      <Billboard position={[-3, -2.3, 0.1]}>
        <PulseText
          fontSize={0.15}
          color="#fff"
          anchorX="left"
          anchorY="bottom"
          depthTest={false}
          renderOrder={3}
          active={true}
        >
          Are you agree with involuntary euthanasia?
        </PulseText>
      </Billboard>


      {/* <Billboard>
        <Image
          url="/statics/letter.jpg"
          position={[-1.8, -1.8, 0.1]}
          scale={[1.1, 1.1, 1.1]}
          depthTest={false}
          renderOrder={3}
        />
      </Billboard> */}


      <Billboard position={[0, -1.1, 0.1]}>
        <PulseText
          fontSize={0.2}
          color="#fff"
          anchorX="left"
          anchorY="bottom"
          depthTest={false}
          renderOrder={3}
          active={true}
        >
          Involuntary
        </PulseText>
      </Billboard>

      <Billboard>
        <Image
          url="/statics/coma.png"
          position={[2.3, -1.8, 0.1]}
          scale={[2.3, 2.3, 0.1]}
          depthTest={false}
          renderOrder={3}
        />
      </Billboard>

{/* 
      <Gif 
        url="/statics/reloj.mp4" 
        position={[-2.7, 0, 0.1]}
        scale={[1.2, 1.5]} 
        renderOrder={3}
      />

      <Billboard>
        <Image
          url="/statics/blood3.png"
          position={[-1, 0, 0.1]}
          scale={[1.5, 1.5, 1.5]}
          depthTest={false}
          renderOrder={3}
        />
      </Billboard>

      <Billboard>
        <Image
          url="/statics/blood5.png"
          position={[0.7, 0, 0.1]}
          scale={[1.5, 1.5, 1.5]}
          depthTest={false}
          renderOrder={3}
        />
      </Billboard>
      

      <Gif 
        url="/statics/gif_tosiendo.mp4" 
        position={[2.4, 0, 0.1]}
        scale={[1.5, 1.5]} 
        renderOrder={3}
      /> */}
    </>
  );
};

export default Slide3;
