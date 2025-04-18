// WorldMapColombia.js
import React, { useMemo, useState } from 'react'
import * as THREE from 'three'
import geoData from './countries.json'
import { geoMercator } from 'd3-geo'
import { Html } from '@react-three/drei'

// 1) Proyección Mercator centrada
const projection = geoMercator()
  .scale(500)
  .translate([0, 0])

function createShapeFromCoords(coords) {
  const shape = new THREE.Shape()
  coords.forEach(([lon, lat], i) => {
    const [x, y0] = projection([lon, lat])
    const y = -y0
    i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y)
  })
  return shape
}

export default function WorldMapSpain({ active }) {
  const [hovered, setHovered] = useState(false)
  const [tooltipPos, setTooltipPos] = useState([0, 0, 0])

  // 2) Feature de Colombia
  const spain = useMemo(
    () => geoData.features.find(f => f.properties.iso_a3 === 'ESP'),
    []
  )

  // 3) Genera shapes
  const shapes = useMemo(() => {
    if (!spain) return []
    const { type, coordinates } = spain.geometry
    const coordsList =
      type === 'Polygon'
        ? coordinates[0]
        : coordinates[0][0]
    return [createShapeFromCoords(coordsList)]
  }, [spain])

  // 4) ShapeGeometry centrada
  const geometry = useMemo(() => {
    if (shapes.length === 0) return null
    const geom = new THREE.ShapeGeometry(shapes)
    geom.computeBoundingBox()
    const center = new THREE.Vector3()
    geom.boundingBox.getCenter(center)
    geom.translate(-center.x, -center.y, 0)
    return geom
  }, [shapes])

  if (!geometry) return null

  // 5) Datos para el popup
  const countryData = {
    name: 'Spain',
    legal: 'Legal',
    details: '25-06-2021, Passed by the Cortes Generales'
  }

  return (
    <mesh
      geometry={geometry}
      onPointerOver={e => {
        e.stopPropagation()
        setHovered(true)
        setTooltipPos([e.point.x, e.point.y, e.point.z + 1])
        e.object.scale.set(1.05, 1.05, 1.05)
      }}
      onPointerOut={e => {
        setHovered(false)
        e.object.scale.set(1, 1, 1)
      }}
    >
      <meshBasicMaterial
        color="green"
        side={THREE.DoubleSide}
      />

      {hovered && (
        <Html
          position={tooltipPos}
          center
          style={{
            pointerEvents: 'none',
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div style={{
            background: 'rgba(0,0,0,0.75)',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '4px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            fontSize: '14px',
            whiteSpace: 'nowrap',
          }}>
            <strong>{countryData.name}</strong><br/>
            {countryData.legal}<br/>
            <small>{countryData.details}</small>
          </div>
        </Html>
      )}
    </mesh>
  )
}
