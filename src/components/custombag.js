import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { useGLTF } from '@react-three/drei'

export function Bag(props) {
  const { nodes, materials } = useGLTF('/female_bag.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.01, 0.17, 0]} scale={0}>
            <group position={[-4.78, -72.25, -0.28]}>
              <mesh geometry={nodes.Object_5.geometry} material={materials.baobao} />
            </group>
            <group position={[40.31, -28.69, 11.71]}>
              <mesh geometry={nodes.Object_7.geometry} material={materials.budai} />
              <mesh geometry={nodes.Object_8.geometry} material={materials.budai} />
            </group>
            <group position={[-4.78, -71.25, -0.27]}>
              <mesh geometry={nodes.Object_10.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_11.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_12.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_13.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_14.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_15.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_16.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_17.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_18.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_19.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_20.geometry} material={materials.daizi} />
              <mesh geometry={nodes.Object_21.geometry} material={materials.daizi} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Bag />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
