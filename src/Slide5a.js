// Slide5a.js
import React, { useState } from 'react';
import { Billboard, Html } from '@react-three/drei';
import { ZoomInText } from './efects/TextAnimations';

const Slide5a = () => {
  const [showMap, setShowMap] = useState(true);

  return (
    <>
      {/* Título */}
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
          Legal framework 
        </ZoomInText>
      </Billboard>

      <Billboard position={[0, 1.4, -0.1]}>
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

      {/* Aquí insertamos el iframe del mapa */}
      {showMap && (
        <Html
          position={[0, 0, -0.1]}       // Ajusta la posición en tu escena
          transform                   // Para que respete la escala/rotación del grupo
          occlude                      // Opcional: oculta cuando quede detrás de otros meshes
          style={{
            width: '1920px',           // Ancho del iframe
            height: '1080px',          // Alto del iframe
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          }}
        >
          <iframe
            title="Mapa Eutanasia"
            src="https://worldpopulationreview.com/country-rankings/where-is-euthanasia-legal"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </Html>
      )}

      {/* Pregunta */}
      <Billboard position={[0, -2, 0.1]}>
        <ZoomInText
          fontSize={0.15}
          color="#fff"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={3}
          active={true}
        >
          ¿Es flexible la ley de eutanasia?
        </ZoomInText>
      </Billboard>
    </>
  );
};

export default Slide5a;
