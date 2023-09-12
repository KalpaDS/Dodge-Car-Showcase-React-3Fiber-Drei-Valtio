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
                </Suspense>
            </Canvas>
        </>
    );
}

export default App;
