import { Decal, Float, OrbitControls, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../Loader'
import { Suspense } from 'react'

interface IProps {
  imageUrl: string
}

const Ball = ({ imageUrl }: IProps) => {
  const [decal] = useTexture([imageUrl])

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.75} />
      <directionalLight
        position={[0, 0, 0.05]}
        intensity={1}
      />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ imageUrl }: IProps) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imageUrl={imageUrl} />
      </Suspense>

      {/* <Preload all /> */}
    </Canvas>
  )
}

export default BallCanvas
