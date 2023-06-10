import { useState, useEffect } from 'react';
import Bulb from './Bulb';
import '../styles/App.css'

function Switch() {

    const [isON, setIsOn] = useState(false)
    const [switchClass, setSwitchClass] = useState('cube-switch')
    const [counter, setCounter] = useState(10)
    const [intervalTime, setIntervalTime] = useState(1000)


    //INICIAR CUANDO COUNTER LLEGUE A 0 Y CAMBIAR EL ISON CADA 2segundos
    useEffect(() => {
        setSwitchClass(isON ? "cube-switch active" : "cube-switch")       
    }, [isON])

    //MODIFICAR EL CONTADOR HASTA 0
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter > 0 ? counter - 1 : 0)
            counter === 0 ? setIsOn(!isON) : setIsOn(isON)
            counter === 0 ? setIntervalTime(2000): setIntervalTime(1000)
        }, intervalTime);
        
        return () => clearInterval(interval);
       
    }, [counter, isON])


    return (
        <>
            <h1>{counter}</h1>
            <div className={switchClass}>
                <span className="switch" onClick={() => { setIsOn(!isON) }}>
                    <span className="switch-state off">Off</span>
                    <span className="switch-state on">On</span>
                </span>


            </div>
            <div className='bulbs'>
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
                <Bulb isON={isON} />
                <Bulb isON={!isON} />
            </div>
        </>
    );
}

export default Switch;