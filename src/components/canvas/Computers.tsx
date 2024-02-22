import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../Loader'
import { useMediaQuery } from '@/hooks'
import { EScreenSize } from '@/enums'

const modelPCConfig = {
  mobile: {
    scale: 0.7,
    position: [0, -3, -2.2]
  },
  desktop: {
    scale: 0.75,
    position: [0, -3.5, -1.5]
  }
}
const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const isMobile = useMediaQuery(`(max-width: ${EScreenSize.MOBILE})`)

  return (
    <mesh>
      <ambientLight
        intensity={1}
        color='white'
      />
      <directionalLight
        intensity={1}
        color='white'
      />
      <hemisphereLight intensity={1} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        rotation={[-0.01, -0.2, -0.1]}
        {...modelPCConfig[isMobile ? 'mobile' : 'desktop']}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // only allow to rotate the camera left and right
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas
