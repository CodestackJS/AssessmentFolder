// import React from 'react'

import { useState } from "react";
import Button from "./Button"

const Counter = () => {
    const [counter, setCounter] = useState(0);
        const increment = () => {
            setCounter(prevCounter => prevCounter + 1)
        }
        const decrement = () => {
            setCounter(prevCounter => prevCounter - 1)
        }


  return (
    <>
 
    <Button btnClick={increment}>increase</Button>
    <span className="m-5"> {counter} </span>
    <Button btnClick={decrement}>decrease</Button>
    
    
    </>
  )
}

export default Counter