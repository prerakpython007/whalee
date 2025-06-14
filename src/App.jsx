import { useState , Suspense } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Whale from './components/Whale'
// import { AmbientLight } from 'three'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <ambientLight intensity={1}/>
        {/* <OrbitControls/> */}
        <Suspense fallback={null}>
        <Whale/>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
