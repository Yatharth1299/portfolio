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
      const time = state.clock.getElapsedTime();
      
      // Realistic walking bob
      groupRef.current.position.y = position[1] + Math.sin(time * 4) * 0.05;
      
      // Move horizontally with smooth motion
      currentPosition.current += walkDirection.current * speed;
      groupRef.current.position.x = currentPosition.current;
      
      // Reverse direction when reaching edges
      if (currentPosition.current > 10) {
        walkDirection.current = -1;
        groupRef.current.rotation.y = Math.PI;
      } else if (currentPosition.current < -10) {
        walkDirection.current = 1;
        groupRef.current.rotation.y = 0;
      }
      
      // Natural walking animation
      const walkCycle = time * 4;
      if (leftLegRef.current) leftLegRef.current.rotation.x = Math.sin(walkCycle) * 0.4;
      if (rightLegRef.current) rightLegRef.current.rotation.x = Math.sin(walkCycle + Math.PI) * 0.4;
      if (leftArmRef.current) leftArmRef.current.rotation.x = Math.sin(walkCycle + Math.PI) * 0.3;
      if (rightArmRef.current) rightArmRef.current.rotation.x = Math.sin(walkCycle) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Head - rounded and cute */}
      <mesh position={[0, 1.6, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshPhongMaterial color="#ff9999" />
      </mesh>
      
      {/* Big cute eyes */}
      <mesh position={[-0.12, 1.65, 0.25]} castShadow>
        <sphereGeometry args={[0.08]} />
        <meshPhongMaterial color="#000000" />
      </mesh>
      <mesh position={[0.12, 1.65, 0.25]} castShadow>
        <sphereGeometry args={[0.08]} />
        <meshPhongMaterial color="#000000" />
      </mesh>
      
      {/* Eye highlights */}
      <mesh position={[-0.1, 1.68, 0.32]} castShadow>
        <sphereGeometry args={[0.02]} />
        <meshPhongMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.14, 1.68, 0.32]} castShadow>
        <sphereGeometry args={[0.02]} />
        <meshPhongMaterial color="#ffffff" />
      </mesh>
      
      {/* Body - rounded */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.35, 0.7, 16]} />
        <meshPhongMaterial color="#ffb3b3" />
      </mesh>
      
      {/* Chest panel */}
      <mesh position={[0, 0.9, 0.36]} castShadow>
        <boxGeometry args={[0.25, 0.4, 0.02]} />
        <meshPhongMaterial color="#e6e6e6" />
      </mesh>
      
      {/* Arms - rounded */}
      <mesh ref={leftArmRef} position={[-0.45, 1.1, 0]} castShadow>
        <capsuleGeometry args={[0.08, 0.4]} />
        <meshPhongMaterial color="#ff9999" />
      </mesh>
      <mesh ref={rightArmRef} position={[0.45, 1.1, 0]} castShadow>
        <capsuleGeometry args={[0.08, 0.4]} />
        <meshPhongMaterial color="#ff9999" />
      </mesh>
      
      {/* Legs - rounded */}
      <mesh ref={leftLegRef} position={[-0.15, 0.3, 0]} castShadow>
        <capsuleGeometry args={[0.09, 0.5]} />
        <meshPhongMaterial color="#ff9999" />
      </mesh>
      <mesh ref={rightLegRef} position={[0.15, 0.3, 0]} castShadow>
        <capsuleGeometry args={[0.09, 0.5]} />
        <meshPhongMaterial color="#ff9999" />
      </mesh>
      
      {/* Feet - rounded */}
      <mesh position={[-0.15, -0.1, 0.1]} castShadow>
        <boxGeometry args={[0.18, 0.08, 0.25]} />
        <meshPhongMaterial color="#ffcccc" />
      </mesh>
      <mesh position={[0.15, -0.1, 0.1]} castShadow>
        <boxGeometry args={[0.18, 0.08, 0.25]} />
        <meshPhongMaterial color="#ffcccc" />
      </mesh>
    </group>
  );
};

const WalkingRobots = () => {
  const robot = useMemo(() => ({
    position: [0, -2, -5] as [number, number, number], 
    color: '#ff9999', 
    speed: 0.02, 
    direction: 1 
  }), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 60 }}
        shadows
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        <Robot
          position={robot.position}
          color={robot.color}
          speed={robot.speed}
          direction={robot.direction}
        />
        
        {/* Invisible ground plane for shadows */}
        <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <shadowMaterial transparent opacity={0.1} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default WalkingRobots;