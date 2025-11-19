import { useState } from "react"
import React from "react"

const Parent = () => {

    const[name,setName]=useState("Shiva")


    return (

        <React.Fragment>
            <Child1 name={name} />
            <Child2 name={name} />


        </React.Fragment>
        
    )
}

const Child1=(props) => {

    return (

        console.log(props.name)

    )
}

const Child2 = (props) => {
    return (

                console.log(props.name)

        
    )
}

export default Parent;