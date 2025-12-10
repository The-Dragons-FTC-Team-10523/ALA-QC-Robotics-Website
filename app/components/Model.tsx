// src/app/components/Model.jsx
import { useGLTF, Center } from '@react-three/drei'
import React from 'react'

// @ts-expect-error because props is any
export function RobotModel(props) {
    // R3F handles the loading of this asset via useGLTF
    const { scene } = useGLTF('/hat-transformed.glb')

    // Apply rotation fix
    const rotationFix = [-Math.PI / 2, Math.PI, 0];

    return (
        <Center top>
            <primitive object={scene} {...props} rotation={rotationFix} />
        </Center>
    )
}