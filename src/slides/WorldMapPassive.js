import React, { useEffect, useState } from 'react'
import CountryMesh from '../efects/CountryMesh'

export default function WorldMapPasive({ active }) {
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
  

  const legalInfoPassive = {
    // — Legal —
    COL: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ESP: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    CAN: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    AUS: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    NLD: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ECU: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    BEL: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    PRT: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    NZL: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    LUX: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    IND: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    USA: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    NGA: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    BRA: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ETH: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    MEX: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    TUR: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    DEU: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    THA: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    GBR: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    FRA: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ZAF: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ITA: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    KOR: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ARG: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    UKR: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    POL: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    VEN: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    TWN: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ZMB: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    KAZ: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    CHL: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ROU: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    BOL: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    DOM: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ARE: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    SWE: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    CZE: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    AZE: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    GRC: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    HUN: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ISR: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    AUT: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    CHE: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    HKG: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    NIC: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    BGR: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    SRB: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    SLV: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    DNK: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    SGP: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    FIN: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    NOR: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    SVK: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    IRL: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    CRI: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    PAN: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    HRV: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    GEO: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    URY: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    PRI: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    BIH: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    NAM: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    MDA: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ARM: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    LTU: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ALB: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    SVN: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    LVA: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    MKD: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    TTO: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    CYP: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    EST: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    GUY: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    MNE: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    MLT: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    ISL: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    AND: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    FRO: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    GRL: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    GIB: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
    MCO: { legal: 'Legal',   details: 'Eutanasia pasiva legal' },
  
    // — Illegal —
    RUS: { legal: 'Illegal', details: 'Eutanasia pasiva ilegal' },
    KEN: { legal: 'Illegal', details: 'Eutanasia pasiva ilegal' },
    BLR: { legal: 'Illegal', details: 'Eutanasia pasiva ilegal' },
    BLZ: { legal: 'Illegal', details: 'Eutanasia pasiva ilegal' },
  };
  return (
    <group>
      {countries.map((feature, idx) => {
        // Se asume que el feature tiene una propiedad ISO_A3 para identificar el país.
        const iso = feature.properties.iso_a3 || `no-iso-${idx}`
        // Clonamos el objeto legalInfo y le añadimos el nombre real del país
        const baseInfo = legalInfoPassive[iso] || { legal: 'Unknown', details: 'Datos no disponibles' }
        const info = {
          ...baseInfo,
          name: feature.properties.name  // <-- aquí capturas el nombre
        }
        const key = `${iso}-${idx}`
        return (
          <CountryMesh key={key} feature={feature} countryData={info} active={active} />
        )
      })}
    </group>
  )
}
