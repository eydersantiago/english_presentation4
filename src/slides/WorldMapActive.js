import React, { useEffect, useState } from 'react'
import CountryMesh from '../efects/CountryMesh'

export default function WorldMapActive({ active }) {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('/data/countries.json')
      .then(res => res.json())
      .then(data => {
        console.log('Países cargados:', data.features.length)
        setCountries(data.features)
      })
      .catch(err => console.error('Error al cargar GeoJSON:', err))
  }, [])
  

  // Datos legales de ejemplo; ajustar según la fuente.
  const legalInfoActive = {
    // — Legal —
    COL: { legal: 'Legal',   details: 'Eutanasia activa legal' },
    ESP: { legal: 'Legal',   details: 'Eutanasia activa legal' },
    CAN: { legal: 'Legal',   details: 'Eutanasia activa legal' },
    AUS: { legal: 'Legal',   details: 'Eutanasia activa legal' },
    NLD: { legal: 'Legal',   details: 'Eutanasia activa legal' },
    ECU: { legal: 'Legal',   details: 'Eutanasia activa legal' },
    BEL: { legal: 'Legal',   details: 'Eutanasia activa legal' },
    PRT: { legal: 'Legal',   details: 'Eutanasia activa legal' },
    NZL: { legal: 'Legal',   details: 'Eutanasia activa legal' },
    LUX: { legal: 'Legal',   details: 'Eutanasia activa legal' },

    // — Illegal —
    IND: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    USA: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    NGA: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    BRA: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    RUS: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ETH: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    MEX: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    TUR: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    DEU: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    THA: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    GBR: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    FRA: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ZAF: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ITA: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    KEN: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    KOR: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ARG: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    UKR: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    POL: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    VEN: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    TWN: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ZMB: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    KAZ: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    CHL: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ROU: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    BOL: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    DOM: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ARE: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    SWE: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    CZE: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    AZE: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    GRC: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    HUN: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ISR: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    AUT: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    BLR: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    CHE: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    HKG: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    NIC: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    BGR: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    SRB: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    SLV: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    DNK: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    SGP: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    FIN: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    NOR: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    SVK: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    IRL: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    CRI: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    PAN: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    HRV: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    GEO: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    URY: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    PRI: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    BIH: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    NAM: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    MDA: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ARM: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    LTU: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ALB: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    SVN: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    LVA: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    MKD: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    TTO: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    CYP: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    EST: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    GUY: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    MNE: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    MLT: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    BLZ: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    ISL: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    AND: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    FRO: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    GRL: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    GIB: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
    MCO: { legal: 'Illegal', details: 'Eutanasia activa ilegal' },
  }

  return (
    <group>
      {countries.map((feature, idx) => {
        // Se asume que el feature tiene una propiedad ISO_A3 para identificar el país.
        const iso = feature.properties.iso_a3 || `no-iso-${idx}`
        const info = legalInfoActive[iso] || { legal: 'Unknown', details: 'Datos no disponibles' }
        const key = `${iso}-${idx}`
        return (
          <CountryMesh key={key} feature={feature} countryData={info} active={active} />
        )
      })}
    </group>
  )
}


// // WorldMap.js
// import React, { useEffect, useState } from 'react'
// import CountryMesh from '../efects/CountryMesh'

// export default function WorldMap({ active }) {
//   const [countries, setCountries] = useState([])

//   useEffect(() => {
//     fetch('/data/countries.json')
//       .then(res => res.json())
//       .then(data => {
//         console.log('Países cargados:', data.features.length)
//         setCountries(data.features)
//       })
//       .catch(err => console.error('Error al cargar GeoJSON:', err))
//   }, [])

//   // Datos legales de ejemplo
//   const legalInfo = {
//     NLD: { legal: 'Legal', details: 'Eutanasia activa legal' },
//     BEL: { legal: 'Legal', details: 'Eutanasia activa legal' },
//     USA: { legal: 'Illegal', details: 'Eutanasia ilegal' },
//   }

//   // Filtramos por iso_a3 (minúsculas)
//   const testIsos = ['NLD', 'BEL', 'USA']
//   const toRender = countries.filter(
//     f => testIsos.includes(f.properties.iso_a3)
//   )

//   return (
//     <group>
//       {toRender.map((feature, idx) => {
//         const iso = feature.properties.iso_a3    // <— usa iso_a3
//         const info = legalInfo[iso]
//         const key = `${iso}-${idx}`
//         console.log('Render country:', iso)      // para depurar
//         return (
//           <CountryMesh
//             key={key}
//             feature={feature}
//             countryData={info}
//             active={active}
//           />
//         )
//       })}
//     </group>
//   )
// }
