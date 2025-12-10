'use client'

import { Canvas } from '@react-three/fiber'
// Import the new component
import {OrbitControls, Preload, Loader, Stage} from '@react-three/drei'
import { RobotModel } from './Model' // Import the new Model component
import React, { Suspense } from 'react'

export default function RobotViewer() {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <Canvas
                dpr={[1, 2]}
                camera={{ fov: 45, position: [0, 0, 15] }}
            >
                <color attach="background" args={['#101010']} />

             {/*   /!* 1. Use Suspense to handle the initial loading state *!/*/}
             {/*   <Suspense fallback={null}>*/}
             {/*       <ambientLight intensity={0.5} />*/}
             {/*       <pointLight position={[10, 10, 10]} />*/}

             {/*       /!* This is where the model is rendered *!/*/}
             {/*       <RobotModel />*/}

             {/*       /!* 2. The Preload component tells R3F to start loading all assets*/}
             {/*(like hat-transformed.glb) as soon as the app starts. *!/*/}
             {/*       <Preload all />*/}
             {/*   </Suspense>*/}

                <Suspense fallback={null}>

                    {/* This is where the model is rendered */}

                    {/*<Stage environment="city" intensity={0.6}>*/}
                        {/* ROTATION FIX:
            [-Math.PI / 2, 0, 0] rotates it -90 degrees on X to stand it up.
            If it is upside down, change the minus (-) to a plus (+).
          */}           <ambientLight intensity={0.5} />
                               <pointLight position={[10, 10, 10]} />
                        <RobotModel />
                    {/*</Stage>*/}

                    {/* 2. The Preload component tells R3F to start loading all assets
             (like hat-transformed.glb) as soon as the app starts. */}
                    <Preload all />
                </Suspense>

                <OrbitControls
                    // autoRotate
                    enablePan={false}
                    enableZoom={false}
                    target={[0, 0, 0]}
                />
            </Canvas>

            {/* 3. The Loader component shows a progress bar while Preload is running */}
            <Loader />
        </div>
    )
}