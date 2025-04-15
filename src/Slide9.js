import React from 'react';
import { Billboard, Html } from '@react-three/drei';
import { PulseText } from './efects/TextAnimations';

// Slide9: References
const Slide9 = () => {
  // List of reference URLs and titles
  const references = [
    {
      href: 'https://www.politico.eu/article/assisted-dying-europe-inevitable-legalization-united-kingdom-europe-euthanasia/#:~:text=In%20several%20of%20the%20countries,up%2087%20percent%20from%202013',
      title: 'Politico: Assisted dying in Europe — inevitable legalization'
    },
    {
      href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2733179/#:~:text=match%20at%20L505%20forgoing%20of,in%202005',
      title: 'PMC Article (2005): Ethical considerations on forgoing life-sustaining treatment'
    },
    {
      href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8605061/#sec0015',
      title: 'PMC Article (2021): Global perspectives on euthanasia and assisted dying'
    },
    {
      href: 'https://www.britannica.com/topic/euthanasia',
      title: 'Britannica: Euthanasia'
    },
    {
      href: 'https://www.scie.org.uk/providing-care/dignity-in-care/death',
      title: 'SCIE: Providing dignity in care at end of life'
    },
    {
      href: 'https://worldpopulationreview.com/country-rankings/where-is-euthanasia-legal',
      title: 'World Population Review: Where is euthanasia legal?'
    }
  ];

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
          References
        </PulseText>
      </Billboard>

      {/* Render references as HTML overlay */}
      <Html position={[1.5, -0.5, 0]} center>
        <div
          style={{
            color: '#000',
            width: '80vw',         // Ocupa el 80% del ancho de la ventana
            textAlign: 'left',
            padding: '1em',        // Espacio interior para que se vea más amplio
            boxSizing: 'border-box'
          }}
        >
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {references.map((ref, index) => (
              <li key={index} style={{ marginBottom: '0.75em' }}>
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#ff0',
                    textDecoration: 'underline',
                    display: 'block',
                    width: '100%',      // Ahora ocupa todo el ancho del contenedor
                    padding: '0.5em 0'  // Altura de línea aumentada para más legibilidad
                  }}
                >
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Html>
    </>
  );
};

export default Slide9;
