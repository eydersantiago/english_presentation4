import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { ZoomInText } from './efects/TextAnimations';
import Gif from './efects/Gif';



const Slide5 = () => {
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
{/* 
      <Billboard>
        <Image
          url="/statics/drugs.png"
          position={[-1.8, -0.2, 0.1]}
          scale={[1.1, 1.1, 1.1]}
          depthTest={false}
          renderOrder={3}
        />
      </Billboard>

      <Billboard position={[0.7, 0.5, 0.1]}>
        <PulseText
          fontSize={0.15}
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
          position={[1.8, -0.2, 0.1]}
          scale={[1.1, 1.1, 1.1]}
          depthTest={false}
          renderOrder={3}
        />
      </Billboard>

      <Billboard position={[-3, -1.1, 0.1]}>
        <PulseText
          fontSize={0.15}
          color="#fff"
          anchorX="left"
          anchorY="bottom"
          depthTest={false}
          renderOrder={3}
          active={true}
        >
          Voluntary
        </PulseText>
      </Billboard>

      <Billboard>
        <Image
          url="/statics/letter.jpg"
          position={[-1.8, -1.8, 0.1]}
          scale={[1.1, 1.1, 1.1]}
          depthTest={false}
          renderOrder={3}
        />
      </Billboard>


      <Billboard position={[0.7, -1.1, 0.1]}>
        <PulseText
          fontSize={0.15}
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
          position={[1.8, -1.8, 0.1]}
          scale={[1.1, 1.1, 1.1]}
          depthTest={false}
          renderOrder={3}
        />
      </Billboard> */}
    </>
  );
};

export default Slide5;
