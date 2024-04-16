import { useState } from "react";

export const HookUseState = () => {

    const [count, setCount] = useState(10);

    const increment = () => {
        // setCount(count + 1)
        setCount(prevValue => prevValue + 1)

    }

    const decrement = () => {
        // setCount(count - 1)
        setCount(prevValue => prevValue - 1)
    }

    return(
        <>
            <h1>Le hook useState</h1>
            <p>{count}</p>
            <button onClick={increment} className="btn">Incrémenter</button>
            <button onClick={decrement} className="btn">Décrémenter</button>
        </>
    )

}