import React, { useEffect, useState } from "react"

function Timer() {

    const [time, setTime] = useState(new Date());
    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [time])

return(
    <div>
        <h2>Time {time.toLocaleTimeString()}</h2>
    </div>
)
}

export default Timer