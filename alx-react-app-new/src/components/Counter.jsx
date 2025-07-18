import React, { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const Increment = () => {setCount(count + 1 )}
    const Decrement = () => {setCount(count - 1 )}
    const Reset = () => {setCount(0)}

    return(
        <div className="visit-times" style={{border:"1px solid yellow"}}>
            <h3>Number of Visits</h3>
            <p>I've been visited {count} Times</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}