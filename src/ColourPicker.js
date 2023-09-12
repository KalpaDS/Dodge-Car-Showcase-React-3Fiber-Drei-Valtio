import {useProxy} from "valtio/utils";
import React from "react";
import {state} from "./Car";
import {HexColorPicker} from "react-colorful";

export function ColourPicker() {
    const snap = useProxy();
    return (
        <div>
            <HexColorPicker/>
        </div>
    );
}
