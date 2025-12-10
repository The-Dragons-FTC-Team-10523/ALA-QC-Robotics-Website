'use client'

import {Canvas} from '@react-three/fiber'
// Import the new component
import {Loader, OrbitControls, Preload, Stage} from '@react-three/drei'
import {RobotModel} from './Model' // Import the new Model component
import React, {Suspense} from 'react'

export default function RobotViewer() {
    return (<div style={{height: '100vh', width: '100vw'}}>
            <Canvas
                dpr={[1, 2]}
                camera={{fov: 45, position: [0, 0, 15]}}
            >
                <color attach="background" args={['#101010']}/>

                <Suspense fallback={null}>

                    {/* This is where the model is rendered */}
                    <Stage environment="city" intensity={0.6}>
                        <RobotModel/>
                    </Stage>

                    {/* 2. The Preload component tells R3F to start loading all assets
             (like hat-transformed.glb) as soon as the app starts. */}
                    <Preload all/>
                </Suspense>

                <OrbitControls
                    // autoRotate
                    enablePan={false}
                    enableZoom={false}
                    target={[0, 0, 0]}
                />
            </Canvas>

            {/* 3. The Loader component shows a progress bar while Preload is running */}
            <Loader/>
        </div>)
}