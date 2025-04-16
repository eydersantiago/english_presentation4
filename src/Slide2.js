// Slide2.js
import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { ZoomInText } from './efects/TextAnimations';
import Gif from './efects/Gif';



const Slide2 = () => {
  return (
    <>
      <Billboard position={[0, 2, -0.1]}>
        <ZoomInText
          fontSize={0.7}
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
      
      {/* Agregamos el GIF animado */}
      <Gif 
        url="/statics/gif_tosiendo.mp4" 
        position={[2.4, 0, 0.1]}
        scale={[1.5, 1.5]} 
        renderOrder={3}
      />

        <Gif 
          url="/statics/latidos.mp4" 
          position={[1.5, -1.7, 0.1]}
          scale={[4.5, 0.73125]} 
          renderOrder={3}
        />
        <Gif 
          url="/statics/latidos.mp4" 
          position={[1.5, -2.4, 0.1]}
          scale={[4.5, 0.73125]} 
          renderOrder={3}
        />
    </>
  );
};

export default Slide2;
