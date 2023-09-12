import React, {useRef, useEffect, useState} from "react";
import {useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {proxy} from "valtio";
import {useProxy} from 'valtio/utils';

export const state = proxy({
    current: null,
    items: {
        main: 'red',
        windows: "white",
        shell: 'black',
        bodyKit: "black",
        doors: "red",
        no3: 'black'
    }
});

export function Car(props) {
    const group = useRef();
    const snap = useProxy(state);
    const [hovered, set] = useState(null);


    const {nodes, materials} = useGLTF("/car.glb");
    return (
        <group ref={group} {...props} dispose={null}
            //onPointerOver={(e) =>
            //e.stopPropagation(console.log(e.object.material.name))}
               onPointerOver={(e) => {
                   e.stopPropagation();
                   set(e.object.material.name);
               }}
               onPointerOut={(e) => {
                   e.intersections.length === 0 && set(null);
               }}
               onPointerDown={(e) => {
                   e.stopPropagation();
                   state.current = e.object.material.name;
               }}
               onPointerMissed={(e) => {
                   state.current = null;
               }}
        >
            <group
                position={[0.008, -2.257, 0.46]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.772}
            >
                <mesh
                    castShadow
                    receiveShadow
                    material-color={snap.items.main}
                    geometry={nodes.body_1.geometry}
                    material={materials.main}
                />
                <mesh
                    castShadow
                    receiveShadow
                    material-color={snap.items.bodyKit}
                    geometry={nodes.body_2.geometry}
                    material={materials.bodyKit}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_3.geometry}
                    material={materials.main1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    material-color={snap.items.windows}
                    geometry={nodes.body_4.geometry}
                    material={materials.windows}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_5.geometry}
                    material={materials.mirrors}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.body_6.geometry}
                    material={materials["black metal"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.shell.geometry}
                material={materials.shell}
                position={[0.588, -0.015, -2.637]}
                rotation={[-3.14, 0, 0]}
                scale={[-0.002, -0.014, -0.018]}
            />
            <group
                position={[-0.649, -0.083, -2.619]}
                rotation={[-3.134, -0.142, 0.046]}
                scale={-0.099}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle.geometry}
                    material={materials["light bulb"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle_1.geometry}
                    material={materials["dodge plastic black"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle_2.geometry}
                    material={materials["Material.009"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle_3.geometry}
                    material={materials["lights mirror"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle_4.geometry}
                    material={materials["Material.010"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.no1.geometry}
                material={materials.no31}
                position={[-0.649, -0.083, -2.619]}
                rotation={[-3.134, -0.142, 0.046]}
                scale={-0.099}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.no15.geometry}
                material-color={snap.items.shell}
                material={materials.shell}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[-0.002, -0.014, -0.018]}
            />
            <mesh
                castShadow
                receiveShadow
                material-color={snap.items.shell}
                geometry={nodes.no2.geometry}
                material={materials.shell}
                position={[0.034, -0.472, -2.541]}
                rotation={[-3.14, 0, 0]}
                scale={[-0.002, -0.014, -0.018]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.no5.geometry}
                material={nodes.no5.material}
                position={[0.649, 0.315, 2.682]}
                rotation={[0.334, 0.09, 0.039]}
                scale={-0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.no10.geometry}
                material={nodes.no10.material}
                position={[-0.445, -0.09, -2.661]}
                rotation={[2.904, -0.108, -3.122]}
                scale={-0.02}
            />
            <mesh
                castShadow
                receiveShadow
                material-color={snap.items.shell}
                geometry={nodes.no16.geometry}
                material={materials.shell}
                position={[0.102, 0.228, -2.301]}
                rotation={[Math.PI, 0.002, 1.574]}
                scale={[-0.002, -0.011, -0.016]}
            />
            <mesh
                castShadow
                receiveShadow
                material-color={snap.items.shell}
                geometry={nodes.no17.geometry}
                material={materials.shell}
                position={[0.72, 0.153, -1.393]}
                rotation={[-1.574, 0.09, 1.587]}
                scale={[-0.002, -0.013, -0.006]}
            />
            <group
                position={[0.004, -0.218, 0.027]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1.121, 1.125, 1.121]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_1.geometry}
                    material={materials["sw2_light__env_50_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_2.geometry}
                    material={materials["sw2_int__spec_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_3.geometry}
                    material={materials["sw2_stitch__env_50_spec_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_4.geometry}
                    material={materials["Matte__FF2D2D2D__spec_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_5.geometry}
                    material={materials["Matte__FF141414__spec_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_6.geometry}
                    material={materials["Matte__FF1E1E1E__spec_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_7.geometry}
                    material={materials["Matte__FF0D0D0D__env_50_spec_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_8.geometry}
                    material={materials["Matte__FF232323__spec_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_9.geometry}
                    material={materials["Matte__FF666666__spec_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_10.geometry}
                    material={materials["sw2_interior__spec_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_11.geometry}
                    material={materials["sw2_tilling__spec_.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.no20_12.geometry}
                    material={materials["188_S13_01_L__spec_.001"]}
                />
            </group>
            <group
                position={[0.008, -2.257, 0.46]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.772}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.doors_1.geometry}
                    material={materials.main}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.doors_2.geometry}
                    material={materials.bodyKit}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.doors_3.geometry}
                    material={materials.windows}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.doors_4.geometry}
                    material={materials.sw2_int__spec_}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.doors_5.geometry}
                    material={materials.Matte__FF2D2D2D__spec_}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.doors_6.geometry}
                    material={materials.sw2_stitch__env_50_spec_}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.doors_7.geometry}
                    material={materials.Matte__FF141414__spec_}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.doors_8.geometry}
                    material={materials.Matte__FF1E1E1E__spec_}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.doors_9.geometry}
                    material={materials.sw2_mask__env_50_spec_}
                />
            </group>
            <group
                position={[0.007, 0.112, 2.699]}
                rotation={[2.994, 0, 0]}
                scale={[1.143, 1.018, 1.004]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tailight.geometry}
                    material={materials.lightss}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tailight_1.geometry}
                    material={materials["lights black"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tailight_2.geometry}
                    material={materials["lights white"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tailight_3.geometry}
                    material={materials.tailight}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelf.geometry}
                material={materials.wheelf}
                position={[1.013, -0.481, -1.785]}
                scale={[0.924, 1.246, 1.246]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelr.geometry}
                material={materials.wheelr}
                position={[-0.005, -0.481, 1.587]}
                scale={[0.924, 1.246, 1.246]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.no11.geometry}
                material={materials.no11}
                position={[1.102, -0.106, -1.161]}
                rotation={[1.945, 1.495, -1.853]}
                scale={-0.036}
            />
        </group>
    );
}

useGLTF.preload("/car.glb");
