// CountryMesh.js
import { geoMercator } from 'd3-geo'
import * as THREE from 'three'
import React, { useMemo, useState } from 'react'
import { Html } from '@react-three/drei'

// 1) Configura tu proyección Mercator:
//    - scale: ajusta el zoom (prueba valores entre 50 y 300).
//    - translate: centra en (0,0) para que el mapa quede alrededor del origen.
const projection = geoMercator()
  .scale(55)             // ← ajusta hasta que veas el mapa completo
  .translate([0, 40])      // centro en (0,0) en tu escena 3D :contentReference[oaicite:0]{index=0}

// 2) Función para convertir lon/lat a THREE.Shape
function createShapeFromCoordinates(coords) {
  const shape = new THREE.Shape()
  coords.forEach(([lon, lat], i) => {
    const [x, y0] = projection([lon, lat])
    const y = -y0   // invierte Y
    if (i === 0) shape.moveTo(x, y)
    else        shape.lineTo(x, y)
  })
  return shape
}

export default function CountryMesh({ feature, countryData, active }) {
    const [hovered, setHovered] = useState(false)
    const [tooltipPos, setTooltipPos] = useState([0, 0, 0])
  
    // 1) Generamos los shapes como antes
    const shapes = useMemo(() => {
      const { type, coordinates } = feature.geometry
      const allShapes = []
      if (type === 'Polygon') {
        allShapes.push(createShapeFromCoordinates(coordinates[0]))
      } else if (type === 'MultiPolygon') {
        coordinates.forEach(polygon => {
          allShapes.push(createShapeFromCoordinates(polygon[0]))
        })
      }
      return allShapes
    }, [feature])
  
    // 2) Usa ShapeGeometry en lugar de ExtrudeGeometry
    const geometry = useMemo(() => {
      if (!shapes.length) return null
      return new THREE.ShapeGeometry(shapes)
    }, [shapes])
  
    // 3) Color según estado legal
    const color =
      countryData.legal === 'Legal'   ? 'green'  :
      countryData.legal === 'Illegal' ? 'red'    :
                                        'gray'
  
    if (!geometry) return null
  
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
        {/* 
          Forzamos el relleno plano y siempre por encima:
          - side: ambas caras
          - depthTest: false => dibuja sin comprobar z-buffer
        */}
        <meshBasicMaterial
          color={color}
          side={THREE.DoubleSide}
          //depthTest={false}
        />
  
        {/* Bordes */}
        <lineSegments geometry={new THREE.EdgesGeometry(geometry)}>
          <lineBasicMaterial color="white" />
        </lineSegments>
  
        {/* Tooltip */}
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
            {countryData.legal}
    </div>
            </Html>
            )}
      </mesh>
    )
  }