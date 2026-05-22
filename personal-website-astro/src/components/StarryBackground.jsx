import { useRef } from 'react';
import { ReactNebula } from '@flodlc/nebula';

export default function StarryBackground() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <ReactNebula
        config={{
          starsCount: 300,
          starsColor: '#ffffff',
          starsRotationSpeed: 2,
          cometFrequence: 12,
          nebulasIntensity: 8,
          sunScale: 0,
          planetsScale: 0,
          solarSystemOrbite: 0,
          solarSystemSpeedOrbit: 0,
        }}
      />
    </div>
  );
}
