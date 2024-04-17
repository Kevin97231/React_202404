import { useEffect, useState } from "react";

export const FunctionComponent = () => {
  
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Function Component Mounted')

        return () => {
            console.log('Function Component unmounted')
        }
    }, [])

    return (
    <div>
        <h1>Function component</h1>
        <p>Je suis le composant fonction</p>
        <div className="flex w-fit border p-2 m-5">
            <p className="pr-5">{count}</p>
            <button className="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    </div>
  );
}