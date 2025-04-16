import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'

const vertexShader = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`

const fragmentShader = `
  uniform sampler2D map;
  uniform float brightness;
  uniform float contrast;
  varying vec2 vUv;

  void main(){
    vec4 color = texture2D(map, vUv);
    color.rgb += (brightness - 1.0);
    color.rgb = (color.rgb - 0.5) * contrast + 0.5;
    gl_FragColor = color;
  }
`

export const BrightnessContrastMaterial = shaderMaterial(
  { map: null, brightness: 1.0, contrast: 1.0 },
  vertexShader,
  fragmentShader
)

extend({ BrightnessContrastMaterial })