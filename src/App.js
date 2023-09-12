import './App.css';
import React, {Suspense} from "react";
import {Canvas} from 'react-three-fiber';
import {Car} from './Car';
import {OrbitControls, PerspectiveCamera, CubeCamera, Environment, Sky, Stars} from '@react-three/drei';
import {Ground} from "./Ground";
import {FloatingGroundGrid} from './FloatingGround';
import {Boxes} from './Boxes';
import {ColourPicker} from "./ColourPicker";

function App() {
    return (
        <>
            <ColourPicker/>
            <Canvas shadows>
                <Suspense fallback={null}>
                    <CubeCamera resolution={1024} frames={Infinity}>
                        {(texture) => (
                            <>
                                <Environment map={texture}/>
                                <Car receiveShadow
                                     castShadow
                                     envMapIntensity={20}
                                     position={[0, 0.85, 0]}/>
                            </>
                        )}
                    </CubeCamera>
                    <OrbitControls
                        target={[0, 0.35, 0]}
                        maxPolarAngle={1.45}
                        maxDistance={10}
                        minDistance={5}
                    />
                    <PerspectiveCamera makeDefault fov={50} position={[-2, -6, -5]}/>
                    <ambientLight
                        color={'white'}
                        intensity={1}
                    />
                    <spotLight
                        color={'white'}
                        intensity={1.5}
                        angle={0.6}
                        penumbra={0.5}
                        position={[5, 5, 0]}
                        castShadow
                        shadow-bias={-0.0001}/>
                    <spotLight
                        color={'white'}
                        intensity={2}
                        angle={0.6}
                        penumbra={0.5}
                        position={[-5, 5, 0]}
                        castShadow
                        shadow-bias={-0.0001}
                    />
                    <Stars radius={90} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5}/>
                    <Sky distance={450000} sunPosition={[5, 1, -8]} inclination={0} azimuth={0.25}/>
                    <Boxes/>
                    <Ground/>
                    <FloatingGroundGrid/>
                </Suspense>
            </Canvas>
        </>
    );
}

export default App;
