import React from 'react';
import { Billboard, Image } from '@react-three/drei';
import { BounceText } from './efects/TextAnimations';
import TablaEutanasia from './slides/TablaDatos';
//import Gif from './efects/Gif';



const Slide4 = () => {
  return (
    <>
    <Billboard position={[0, 2.3, -0.1]}>
      <BounceText
        fontSize={0.7}
        color="#fff"
        anchorX="center"
        anchorY="middle"
        depthTest={false}
        renderOrder={3}
        active={true}
      >
        Active euthanasia data
      </BounceText>
    </Billboard>

    <Billboard position={[0, 1.65, -0.1]}>
      <BounceText
        fontSize={0.5}
        color="#fff"
        anchorX="center"
        anchorY="middle"
        depthTest={false}
        renderOrder={3}
        active={true}
      >
        by country
      </BounceText>
    </Billboard>

    <Billboard position={[3, 1.2, -0.1]}>
      <TablaEutanasia />
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
        position={[0.5, 0.5, 0.1]}
        scale={[0.7, 0.7, 0.7]}
        depthTest={false}
        renderOrder={3}
      />
    </Billboard>

    <Billboard>
      <Image
        url="/statics/belgium.jpg"
        position={[0.575, -0.2, 0.1]}
        scale={[0.85, 0.7, 0.7]}
        depthTest={false}
        renderOrder={3}
      />
    </Billboard>

    <Billboard>
      <Image
        url="/statics/luxembourg.jpg"
        position={[0.5, -1.05, 0.1]}
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

export default Slide4;
