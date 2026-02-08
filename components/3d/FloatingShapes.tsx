"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Environment, Stars, Sparkles } from "@react-three/drei";

function AnimatedSphere({ position, color, size, speed }: { position: [number, number, number], color: string, size: number, speed: number }) {
    return (
        <Float speed={speed} rotationIntensity={1.5} floatIntensity={2.5}>
            <Sphere args={[size, 64, 64]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                    metalness={0.8}
                    bumpScale={0.01}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    radius={1}
                />
            </Sphere>
        </Float>
    );
}

export default function FloatingShapes() {
    return (
        <div className="absolute inset-0 -z-10 opacity-60">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#7C6CFF" />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#00D4FF" />

                {/* Primary soft purple sphere */}
                <AnimatedSphere position={[-2, 1, 0]} color="#7C6CFF" size={1.5} speed={2} />

                {/* Secondary cyan sphere */}
                <AnimatedSphere position={[3, -1, -2]} color="#00D4FF" size={1.2} speed={1.5} />

                {/* Accent pink sphere, smaller and further back */}
                <AnimatedSphere position={[1, 3, -5]} color="#FF7AA2" size={0.8} speed={1} />

                {/* Deep blue/night sphere */}
                <AnimatedSphere position={[-4, -3, -3]} color="#593E96" size={2} speed={0.8} />

                <Environment preset="night" />
            </Canvas>
        </div>
    );
}
