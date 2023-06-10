import { useState } from "react"
import Switch from './component/Switch'
import Timer from "./component/Timer";

import './styles/App.css';

function App() {

  const [energia, setEnergia] = useState(false)

  return (
    <div className='body'>
      <button onClick={() => setEnergia(!energia)}>Energia {energia ? "Encendida" : "Apagada"}</button>
      <Timer />
      {energia && <Switch />}
    </div>
  )
}

export default App;
