import React from 'react';
import { Billboard, Image, Html } from '@react-three/drei';
import { ZoomInText } from './efects/TextAnimations';
import Gif from './efects/Gif';

const Slide7 = () => {
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
          Legal framework 
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

      <Gif 
        url="/statics/ley1.mp4" 
        position={[2.4, 0, 0.1]}
        scale={[1.5, 1.5]} 
        renderOrder={3}
      />

      <Gif 
        url="/statics/ley2.mp4" 
        position={[0, 0, 0.1]}
        scale={[1.5, 1.5]} 
        renderOrder={3}
      />

      <Billboard>
        <Image
          url="/statics/ley3.jpg"
          position={[-2.3, 0, 0.1]}
          scale={[1.5, 1.5, 1.5]}
          depthTest={false}
          renderOrder={3}
        />
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
          Is the law for euthanasia flexible?
        </ZoomInText>
      </Billboard>

      {/* Aquí insertamos el enlace */}
      <Html position={[0, -2.5, 0.1]} center>
        <a
          href="https://worldpopulationreview.com/country-rankings/where-is-euthanasia-legal"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            fontSize: '1.2em',
            textDecoration: 'underline'
          }}
        >
          More information →
        </a>
      </Html>
    </>
  );
};

export default Slide7;
