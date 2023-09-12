import './App.css';
import React, {Suspense} from "react";
import {Canvas} from 'react-three-fiber';
import {Car} from './Car';
import {OrbitControls, PerspectiveCamera, CubeCamera, Environment} from '@react-three/drei';

function App() {
    return (
        <>
            <Canvas>
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
                    <OrbitControls/>
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
                </Suspense>
            </Canvas>
        </>
    );
}

export default App;
