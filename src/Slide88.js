import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { PulseText } from './efects/TextAnimations';

// COLOCAR UN GIF DE DESPEDIDA
const Slide88 = () => {
  return (
    <>
      {/* Main title */}
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
          Conclusion
        </PulseText>
      </Billboard>




    <Billboard position={[1.3, 0.6, -0.1]}>
    <PulseText
        fontSize={0.15}
        color="#fff"
        anchorX="center"
        anchorY="middle"
        depthTest={false}
        renderOrder={3}
        active={true}
    >
        “The legalization of euthanasia in an ever‑increasing number{'\n'}of countries reflects a global recognition of the {'\n'}patient’s dignity and autonomy, always under{'\n'}strict safeguards to prevent abuse and protect {'\n'}the most vulnerable
    </PulseText>
    </Billboard>




{/* 
    <Billboard>
      <Image
        url="/statics/BE-EPS-02-6001.jpg"
        position={[1.8, -0.2, 0.1]}
        scale={[1.1, 1.1, 1.1]}
        depthTest={false}
        renderOrder={3}
      />
    </Billboard> */}

  <Billboard>
      <Image
        url="/statics/netherland.jpg"
        position={[0.6, 0.5, 0.1]}
        scale={[0.7, 0.7, 0.7]}
        depthTest={false}
        renderOrder={3}
      />
    </Billboard>

    <Billboard>
      <Image
        url="/statics/belgium.jpg"
        position={[0.675, -0.2, 0.1]}
        scale={[0.85, 0.7, 0.7]}
        depthTest={false}
        renderOrder={3}
      />
    </Billboard>

    <Billboard>
      <Image
        url="/statics/luxembourg.jpg"
        position={[0.6, -1.05, 0.1]}
        scale={[0.7, 1, 0.7]}
        depthTest={false}
        renderOrder={3}
      />
    </Billboard>

    <Billboard>
      <Image
        url="/statics/canada.jpg"
        position={[1.275, 0.5, 0.1]}
        scale={[0.85, 0.7, 0.7]}
        depthTest={false}
        renderOrder={3}
      />
    </Billboard>

    
    <Billboard>
      <Image
        url="/statics/spain.jpg"
        position={[1.5, -0.26, 0.1]}
        scale={[1.1, 0.9, 0.7]}
        depthTest={false}
        renderOrder={3}
      />
    </Billboard>


    <Billboard>
      <Image
        url="/statics/colombia.jpg"
        position={[1.2, -1.16, 0.1]}
        scale={[0.7, 1, 0.7]}
        depthTest={false}
        renderOrder={3}
      />
    </Billboard>

    <Billboard>
      <Image
        url="/statics/new_zealand.jpg"
        position={[2, 0.5, 0.1]}
        scale={[0.7, 0.7, 0.7]}
        depthTest={false}
        renderOrder={3}
      />
    </Billboard>
    
    </>
  );
};

export default Slide88;
