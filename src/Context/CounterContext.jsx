import { createContext, useState } from "react";



export let CounterContext =createContext();
export default function CounterContextProvider(props){
    const [count,setCount]=useState(0)
    function change(){
        setCount(Math.random())
    }
    return <CounterContext.Provider value={{count,change}}>
        {props.children}
    </CounterContext.Provider>
}