import {useProxy} from "valtio/utils";
import React from "react";
import {state} from "./Car";
import {HexColorPicker} from "react-colorful";

export function ColourPicker() {
    const snap = useProxy(state);
    return (
        <div style={{display: snap.current ? "block" : "none"}}>
            <HexColorPicker
                className="cpicker"
                color={snap.items[snap.current]}
                onChange={(color) => (state.items[snap.current] = color)}
            />
            <h1>{'Choose for : ' + snap.current}</h1>
        </div>
    );
}
