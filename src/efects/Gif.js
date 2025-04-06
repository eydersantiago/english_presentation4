import React, { useMemo } from 'react';
import { Billboard } from '@react-three/drei';
import * as THREE from 'three';

const Gif = ({ url, position = [0, 0, 0], scale = [1, 1], renderOrder = 3 }) => {
  const video = useMemo(() => {
    const vid = document.createElement('video');
    vid.src = url;
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.autoplay = true;
    vid.play();
    return vid;
  }, [url]);

  const texture = useMemo(() => {
    const tex = new THREE.VideoTexture(video);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.format = THREE.RGBAFormat;
    return tex;
  }, [video]);

  return (
    <Billboard>
      <mesh position={position}>
        <planeGeometry args={[scale[0], scale[1]]} />
        <meshBasicMaterial 
          map={texture} 
          transparent={true} 
          depthTest={false} 
          renderOrder={renderOrder} 
        />
      </mesh>
    </Billboard>
  );
};

export default Gif;