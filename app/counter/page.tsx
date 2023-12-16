"use client"
import { useState } from "react"


export default function Counter(){
    
    const [nameIndex,setnameIndex] = useState(0)
    const name = ["Usman","Hassan","Awais","Shabaz","Qasim","Adeel"]
    const nextName = ()=>{
        setnameIndex(nameIndex+1)
    }
    const prevName = ()=>{
        setnameIndex(nameIndex-1)
    }
    
    return(
        
        <div>
            <span>{name[nameIndex]}</span>
            <div>
            <button onClick={prevName} style={{backgroundColor:"blue"}}>Prev</button>
            <button onClick={nextName} style={{backgroundColor:"yellow"}}>Next</button>
            </div>
        </div>
    )
}