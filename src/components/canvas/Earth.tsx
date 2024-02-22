import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../Loader'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Earth = () => {
  const earth = useGLTF('planet/scene.gltf')

  return (
    <mesh>
      <ambientLight intensity={1} />
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      gl={{ preverveDrawingBuffer: true }}
      frameloop='demand'
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas
