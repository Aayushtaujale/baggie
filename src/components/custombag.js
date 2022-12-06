import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy } from "valtio";
import { useProxy } from "valtio";
import '../styles/customize.css';



// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.
const state = proxy({
  current: null,
  items: {
    daizi: "#ffffff",
    budai: "#ffffff",
    baobao: "#ffffff",
 
  },
});

function Shoe() {
  const ref = useRef()
  const snap = useProxy(state)
  // Drei's useGLTF hook sets up draco automatically, that's how it differs from useLoader(GLTFLoader, url)
  // { nodes, materials } are extras that come from useLoader, these do not exist in threejs/GLTFLoader
  // nodes is a named collection of meshes, materials a named collection of materials
  const { nodes, materials } = useGLTF("female_bag.glb")

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = 0.1 - (1 + Math.sin(t / 1.5)) / 20
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  // Cursor showing current color
  const [hovered, set] = useState(null)
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
  }, [hovered])
  

  // Using the GLTFJSX output here to wire in app-state and hook up events
  return (
    
    <group className='mains'
      ref={ref}
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.01, 0.17, 0]} scale={2}></group>
      <group position={[-1.78, -40.25, -49.28]}>
              <mesh material-color={snap.items.baobao} geometry={nodes.Object_5.geometry} material={materials.baobao} />
            </group>
      <group position={[0.78, -3.25, -99.27]}>
              <mesh material-color={snap.items.budai} geometry={nodes.Object_7.geometry} material={materials.budai} />
              <mesh material-color={snap.items.budai} geometry={nodes.Object_8.geometry} material={materials.budai} />
            </group>
            {/* <group position={[-2.78, -71.25, -205.27]}>
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_10.geometry} material={materials.daizi} />
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_11.geometry} material={materials.daizi} /> 
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_12.geometry} material={materials.daizi} />
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_13.geometry} material={materials.daizi} />
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_14.geometry} material={materials.daizi} />
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_15.geometry} material={materials.daizi} />
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_16.geometry} material={materials.daizi} />
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_17.geometry} material={materials.daizi} /> 
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_18.geometry} material={materials.daizi} />
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_19.geometry} material={materials.daizi} />
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_20.geometry} material={materials.daizi} />
              <mesh material-color={snap.items.daizi} geometry={nodes.Object_21.geometry} material={materials.daizi} />
            </group> */}
            </group>
            </group>
          
        
   
    </group>
  
  )
}

function Picker() {
  const snap = useProxy(state)
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1>{snap.current}</h1>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 2.75] }}>
      
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={20} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          <Shoe />
          <Environment files="royal_esplanade_1k.hdr" />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={100} height={100} blur={2} far={1} />
        </Suspense>
        <OrbitControls minPolarAngle={-Math.PI / -2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} enableRotate={true}/>
      </Canvas>
      <Picker />
    </>
  )
}
