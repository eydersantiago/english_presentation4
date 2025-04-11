// ./efects/TextAnimations.js
import React from 'react';
import { animated, useSpring } from '@react-spring/three';
import { Text, Billboard } from '@react-three/drei';


// Creamos un Text animado para poder aplicar las animaciones
const AnimatedText = animated(Text);

export function FadeInText({ children, color = 'white', active = true, ...props }) {
    // Anima directamente la propiedad scale del Text
    const { scale } = useSpring({
      scale: active ? 1 : 0,
      config: { tension: 1200, friction: 140 },
    });
  
    return (
      <Billboard>
        <AnimatedText
          {...props}
          scale={scale}
          color={color}
          depthTest={false}           // Para que se renderice encima de otros objetos
          material-toneMapped={false} // Asegura que el material se vea sin tone mapping
          //font="/fonts/helvetiker_regular.typeface.json" // Asegúrate de que la ruta sea correcta
        >
          {children}
        </AnimatedText>
      </Billboard>
    );
  }
// Otras animaciones...
export function SlideInText({ children, direction = 'top', active = true, ...props }) {
  let fromPosition = [0, 0, 0];
  const distance = 2;
  if (direction === 'top') fromPosition = [0, distance, 0];
  if (direction === 'bottom') fromPosition = [0, -distance, 0];
  if (direction === 'left') fromPosition = [-distance, 0, 0];
  if (direction === 'right') fromPosition = [distance, 0, 0];

  const [springs, api] = useSpring(() => ({
    position: fromPosition,
    config: { tension: 120, friction: 14 },
    immediate: true,
  }));

  React.useEffect(() => {
    if (active) {
      api.start({ position: [0, 0, 0], from: { position: fromPosition } });
    } else {
      api.start({ position: fromPosition, immediate: true });
    }
  }, [active]);

  return (
    <AnimatedText {...props} position={springs.position}>
      {children}
    </AnimatedText>
  );
}

export function ZoomInText({ children, active = true, ...props }) {
  const [springs, api] = useSpring(() => ({
    scale: [0, 0, 0],
    config: { tension: 170, friction: 12, duration: 1500 },
  }));

  React.useEffect(() => {
    if (active) {
      api.start({
        scale: [1, 1, 1],
        from: { scale: [0.5, 0.5, 0.5] },
        config: { duration: 1500 }, // Animación más lenta
      });
    } else {
      api.start({ scale: [0, 0, 0], immediate: true });
    }
  }, [active, api]);

  return (
    <AnimatedText {...props} scale={springs.scale}>
      {children}
    </AnimatedText>
  );
}


export function PulseText({ children, active = true, ...props }) {
  const [springs, api] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { tension: 150, friction: 5 },
  }));

  React.useEffect(() => {
    if (active) {
      api.start({
        loop: { reverse: true },
        from: { scale: [1, 1, 1] },
        to: { scale: [1.05, 1.05, 1.05] },
        config: { duration: 1000 },
      });
    } else {
      api.stop();
      api.start({ scale: [1, 1, 1], immediate: true });
    }
  }, [active]);

  return (
    <AnimatedText {...props} scale={springs.scale}>
      {children}
    </AnimatedText>
  );
}


export function BounceText({ children, active = true, ...props }) {
  const [springs, api] = useSpring(() => ({
    position: [0, 0, 0],
    config: { duration: 800 },
  }));

  React.useEffect(() => {
    if (active) {
      api.start({
        from: { position: [0, 0, 0] },
        to: { position: [0, 0.15, 0] }, // Solo se altera la coordenada Y
        loop: { reverse: true },
        config: { duration: 800 },
      });
    } else {
      api.stop();
      api.start({ position: [0, 0, 0], immediate: true });
    }
  }, [active, api]);

  return (
    <Billboard>
      <AnimatedText
        {...props}
        position={springs.position}
        depthTest={false}           // Se renderiza encima de otros objetos
        material-toneMapped={false} // Se muestra sin tone mapping
      >
        {children}
      </AnimatedText>
    </Billboard>
  );
}

export function ColorText({
  children,
  fromColor = 'orange',
  toColor = 'purple',
  active = true,
  ...props
}) {
  const [springs, api] = useSpring(() => ({
    color: fromColor,
    config: { tension: 120, friction: 20 },
    immediate: true,
  }));

  React.useEffect(() => {
    if (active) {
      api.start({ color: toColor, from: { color: fromColor } });
    } else {
      api.start({ color: fromColor, immediate: true });
    }
  }, [active, fromColor, toColor]);

  return (
    <AnimatedText {...props} color={springs.color}>
      {children}
    </AnimatedText>
  );
}
