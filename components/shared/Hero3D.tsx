"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import { useTheme } from "next-themes"
import { useRef, useState } from "react"
import * as THREE from "three"

function FloatingOrb({ position, color, scale, speed, distort }: { position: [number, number, number]; color: string; scale: number; speed: number; distort: number }) {
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <Sphere args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={1.5}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  )
}

function ParticleField({ count = 200, color }: { count?: number; color: string }) {
  const mesh = useRef<THREE.Points>(null!)
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return arr
  })

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.03
      mesh.current.rotation.x += delta * 0.01
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  )
}

export function Hero3D() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const primary = isDark ? "#818cf8" : "#6d28d9"
  const secondary = isDark ? "#c084fc" : "#a855f7"
  const accent = isDark ? "#67e8f9" : "#06b6d4"

  return (
    <div className="absolute inset-0 -z-10 h-full w-full opacity-70 dark:opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color={secondary} />

        <FloatingOrb position={[0, 0, 0]} color={primary} scale={1.4} speed={1.5} distort={0.35} />
        <FloatingOrb position={[2.5, 1.5, -2]} color={secondary} scale={0.6} speed={2} distort={0.5} />
        <FloatingOrb position={[-2.5, -1, -1]} color={accent} scale={0.4} speed={2.5} distort={0.6} />

        <ParticleField count={150} color={primary} />
      </Canvas>
    </div>
  )
}

