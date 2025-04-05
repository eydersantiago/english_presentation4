import React from 'react';
import { Billboard, Text, Image } from '@react-three/drei';

const Slide2 = () => {
  return (
    <>
      {/* Title at the top (translated to English) */}
      <Billboard position={[0, 2, 0]}>
        <Text
          fontSize={0.8}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={2}
        >
          Euthanasia
        </Text>
      </Billboard>

      {/* Presented by text at the bottom left */}
      <Billboard position={[-3.5, -2, 0]}>
        <Text
          fontSize={0.2}
          color="#fff"
          anchorX="left"
          anchorY="bottom"
          depthTest={false}
          renderOrder={3}
        >
          Presented by{'\n'}Eyder Santiago Suarez Chavez{'\n'}2322714-3743
        </Text>
      </Billboard>

      {/* Example image loaded from the static folder */}
      {/* <Image
        url="/static/myGif.gif"  // Ensure this path points to your gif/image in the public/static folder
        position={[2, 0, 0]}
        scale={[2, 2, 2]} // Adjust scale as needed
      /> */}

      {/* You can add more images or gifs similarly */}
      <Image
        url="/statics/image1.png"
        position={[-2.7, 0, 0.1]}
        scale={[1.5, 1.5, 1.5]}
      />
    </>
  );
};

export default Slide2;
