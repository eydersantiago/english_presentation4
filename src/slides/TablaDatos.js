import React from 'react';
import { Html } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/web';

// Componente para animar la barra de porcentaje
const AnimatedBar = ({ baseWidth, color }) => {
  const props = useSpring({
    from: { width: baseWidth },
    to: { width: baseWidth * 1.1 },
    loop: { reverse: true },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{
        height: '10px',
        backgroundColor: color,
        borderRadius: '4px',
        ...props,
      }}
    />
  );
};

const EuthanasiaData = [
  { pais: 'Netherland', p2023: 5.4, p2022: 5.1 },
  { pais: 'Belgium', p2023: 3.1, p2022: 2.5 },
  { pais: 'luxembourg', p2023: null, p2022: 1.0 },
  { pais: 'Canada', p2023: 4.7, p2022: 4.1 },
  { pais: 'Spain', p2023: null, p2022: 0.07 },
  { pais: 'Colombia', p2023: 0.1, p2022: 0.05 },
  { pais: 'New Zealand', p2023: 1.0, p2022: 0.8 },
];

export default function TablaEutanasia() {
  return (
    <Html>
      <div
        style={{
          padding: '1rem',
          maxWidth: '1000px', // Aumenta el ancho máximo
          margin: 'auto',
          background: 'rgba(238, 206, 170, 0.9)',
          borderRadius: '8px',
          transform: 'scale(0.85)', // Aumenta el tamaño en un 20%
          transformOrigin: 'center',
        }}
      >
        <h2 style={{ color: '#333', textAlign: 'center' }}>
          Data by year and country
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#eee' }}>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>Country</th>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>2023</th>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>2022</th>
            </tr>
          </thead>
          <tbody>
            {EuthanasiaData.map((item, idx) => {
              // Multiplicamos el valor por 10 para obtener una anchura (ej: 5.4% => 54px)
              const barWidth2023 = item.p2023 ? item.p2023 * 13 : 0;
              const barWidth2022 = item.p2022 ? item.p2022 * 13 : 0;
              // Definimos un ancho fijo para el contenedor de la barra (por ejemplo, 70px)
              const fixedBarContainer = { width: '100px', display: 'inline-block' };

              return (
                <tr key={idx} style={{ borderBottom: '1px solid #ccc' }}>
                  <td style={{ padding: '0.5rem' }}>{item.pais}</td>
                  
                  <td style={{ padding: '0.5rem' }}>
                    {item.p2023 !== null ? (
                      <>
                        <span style={{ marginRight: '0.5rem' }}>
                          {item.p2023}%
                        </span>
                        <div style={fixedBarContainer}>
                          <AnimatedBar baseWidth={barWidth2023} color="#3f7" />
                        </div>
                      </>
                    ) : (
                      <em style={{ color: '#999' }}>No data</em>
                    )}
                  </td>
                  
                  <td style={{ padding: '0.5rem' }}>
                    {item.p2022 !== null ? (
                      <>
                        <span style={{ marginRight: '0.5rem' }}>
                          {item.p2022}%
                        </span>
                        <div style={fixedBarContainer}>
                          <AnimatedBar baseWidth={barWidth2022} color="#3af" />
                        </div>
                      </>
                    ) : (
                      <em style={{ color: '#999' }}>No data</em>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Html>
  );
}
