'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage, Center } from '@react-three/drei'

// @ts-expect-error because it is any
function Model(props) {
    const { scene } = useGLTF('/hat-transformed.glb')

    // We wrap the model in <Center> to force the pivot point to the middle
    return (
        <Center top>
            <primitive object={scene} {...props} />
        </Center>
    )
}

export default function RobotViewer() {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <Canvas dpr={[1, 2]}
                camera={{
                fov: 45,
                // New camera position: x=0, y=0, z=15
                // Z=15 moves the camera far back to see the whole model.
                position: [0, 0, 15]
            }}>
                <color attach="background" args={['#101010']} />

                <Stage environment="city" intensity={0.6}>
                    {/* ROTATION FIX:
            [-Math.PI / 2, 0, 0] rotates it -90 degrees on X to stand it up.
            If it is upside down, change the minus (-) to a plus (+).
          */}
                    <Model rotation={[-Math.PI / 2, 0, -1.2]} />
                </Stage>

                <OrbitControls
                    // autoRotate
                    enablePan={false}
                    enableZoom={false}
                    /* This ensures the camera rotates around the center of the mass */
                    target={[0, 0, 0]}
                />
            </Canvas>
        </div>
    )
}