import Switch from './Switch'
import Timer from "./Timer";
import '../styles/App.css';
import { useState } from "react"

function LightApp() {

    const [energia, setEnergia] = useState(false)
    return (
        <>
            <button onClick={() => setEnergia(!energia)}>Energia {energia ? "Encendida" : "Apagada"}</button>
            <Timer />
            {energia && <Switch />}
        </>
    )
}

export default LightApp;