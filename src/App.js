import './App.css';
import React, {Suspense} from "react";
import {Canvas} from 'react-three-fiber';
import {Car} from './Car';
import {OrbitControls, PerspectiveCamera, CubeCamera} from '@react-three/drei';

function App() {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>

                </Suspense>
            </Canvas>
        </>
    );
}

export default App;
