import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RobotProps {
  position: [number, number, number];
  color: string;
  speed: number;
  direction: number;
}

const Robot = ({ position, color, speed, direction }: RobotProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const walkDirection = useRef(direction);
  const currentPosition = useRef(position[0]);

  useFrame((state) => {
    if (groupRef.current) {
      // Walking animation - bob up and down
      const time = state.clock.getElapsedTime();
      groupRef.current.position.y = position[1] + Math.sin(time * 8) * 0.1;
      
      // Move horizontally
      currentPosition.current += walkDirection.current * speed;
      groupRef.current.position.x = currentPosition.current;
      
      // Reverse direction when reaching edges
      if (currentPosition.current > 15) {
        walkDirection.current = -1;
        groupRef.current.rotation.y = Math.PI;
      } else if (currentPosition.current < -15) {
        walkDirection.current = 1;
        groupRef.current.rotation.y = 0;
      }
      
      // Animate limbs
      if (leftLegRef.current) leftLegRef.current.rotation.x = Math.sin(time * 6) * 0.3;
      if (rightLegRef.current) rightLegRef.current.rotation.x = Math.sin(time * 6 + Math.PI) * 0.3;
      if (leftArmRef.current) leftArmRef.current.rotation.x = Math.sin(time * 6 + Math.PI) * 0.2;
      if (rightArmRef.current) rightArmRef.current.rotation.x = Math.sin(time * 6) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshLambertMaterial color={color} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.1, 1.6, 0.2]} castShadow>
        <sphereGeometry args={[0.05]} />
        <meshLambertMaterial color="#00ffff" />
      </mesh>
      <mesh position={[0.1, 1.6, 0.2]} castShadow>
        <sphereGeometry args={[0.05]} />
        <meshLambertMaterial color="#00ffff" />
      </mesh>
      
      {/* Antenna */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <boxGeometry args={[0.02, 0.2, 0.02]} />
        <meshLambertMaterial color="#ffff00" />
      </mesh>
      <mesh position={[0, 1.9, 0]} castShadow>
        <sphereGeometry args={[0.03]} />
        <meshLambertMaterial color="#ff0000" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.8, 0.3]} />
        <meshLambertMaterial color={color} />
      </mesh>
      
      {/* Arms */}
      <mesh ref={leftArmRef} position={[-0.4, 0.9, 0]} castShadow>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshLambertMaterial color={color} />
      </mesh>
      <mesh ref={rightArmRef} position={[0.4, 0.9, 0]} castShadow>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshLambertMaterial color={color} />
      </mesh>
      
      {/* Legs */}
      <mesh ref={leftLegRef} position={[-0.15, 0.1, 0]} castShadow>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshLambertMaterial color={color} />
      </mesh>
      <mesh ref={rightLegRef} position={[0.15, 0.1, 0]} castShadow>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshLambertMaterial color={color} />
      </mesh>
      
      {/* Feet */}
      <mesh position={[-0.15, -0.15, 0.1]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.3]} />
        <meshLambertMaterial color="#333333" />
      </mesh>
      <mesh position={[0.15, -0.15, 0.1]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.3]} />
        <meshLambertMaterial color="#333333" />
      </mesh>
    </group>
  );
};

const WalkingRobots = () => {
  const robots = useMemo(() => [
    { position: [-10, -2, -5] as [number, number, number], color: '#ff6b6b', speed: 0.02, direction: 1 },
    { position: [8, -1.5, -3] as [number, number, number], color: '#4ecdc4', speed: 0.015, direction: -1 },
    { position: [-5, -2.5, -8] as [number, number, number], color: '#45b7d1', speed: 0.025, direction: 1 },
    { position: [12, -1.8, -6] as [number, number, number], color: '#96ceb4', speed: 0.018, direction: -1 },
    { position: [0, -2.2, -10] as [number, number, number], color: '#feca57', speed: 0.022, direction: 1 },
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 60 }}
        shadows
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {robots.map((robot, index) => (
          <Robot
            key={index}
            position={robot.position}
            color={robot.color}
            speed={robot.speed}
            direction={robot.direction}
          />
        ))}
        
        {/* Invisible ground plane for shadows */}
        <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default WalkingRobots;