import {useFrame, useLoader} from "@react-three/fiber";
import React, {useEffect} from "react";
import {RepeatWrapping, TextureLoader} from "three";

export function FloatingGroundGrid() {
    return (
        <>
            <mesh rotation-x={-Math.PI * 0.5} position={[0, 0, 0]}>
                <planeGeometry color={'red'} args={[35, 35]}/>
                <meshBasicMaterial
                    color={[1, 1, 1]}
                    opacity={0.15}
                    map={diffuse}
                    alphaMap={diffuse}
                    transparent={true}
                />
            </mesh>
        </>
    )
}
