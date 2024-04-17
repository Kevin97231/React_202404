import { useState } from "react"

export const useIncrement = ({initialValue = 0, max = Infinity, min = -Infinity}) => {
  
    const [state, setState] = useState(initialValue)

    const functionIncrement = () => setState(state < max ? state + 1 : state)
    const functionDecrement = () => setState(state > min ? state - 1 : state)

    return {
        count: state, 
        increment: functionIncrement, 
        decrement: functionDecrement
    }
  
}