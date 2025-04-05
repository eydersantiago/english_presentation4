// ./efects/TextAnimations.js
import React from 'react';
import { animated, useSpring } from '@react-spring/three';
import { Text, Billboard } from '@react-three/drei';

// Creamos un Text animado para poder aplicar las animaciones
const AnimatedText = animated(Text);

export function FadeInText({ children, color = 'white', active = true, ...props }) {
  const [springs, api] = useSpring(() => ({
    opacity: 0,
    config: { tension: 120, friction: 14 },
    immediate: true,
  }));

  React.useEffect(() => {
    if (active) {
      api.start({ opacity: 1, from: { opacity: 0 } });
    } else {
      api.start({ opacity: 0, immediate: true });
    }
  }, [active, api]);

  return (
    // Uso de Billboard para asegurar que el texto esté siempre frente a la cámara
    <Billboard>
      <AnimatedText {...props} color={color} material-toneMapped={false}>
        {/* Nota: Algunos componentes Text ya aplican un material, por lo que en lugar de anidar un material animado,
            podemos animar la opacidad transformando el grupo que contiene el texto. */}
        <animated.group scale={[springs.opacity, springs.opacity, springs.opacity]}>
          {children}
        </animated.group>
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
    config: { tension: 170, friction: 12 },
    immediate: true,
  }));

  React.useEffect(() => {
    if (active) {
      api.start({ scale: [1, 1, 1], from: { scale: [0, 0, 0] } });
    } else {
      api.start({ scale: [0, 0, 0], immediate: true });
    }
  }, [active]);

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
        to: { scale: [1.2, 1.2, 1.2] },
        config: { duration: 500 },
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
