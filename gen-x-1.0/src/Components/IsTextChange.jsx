import React, { useContext } from "react";
import { TextChanger } from "./ContextComp/TextChanger";

 const isTextStyleChanged = () =>{
    const {isTextChange , toggleText} = useContext(TextChanger)
    var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita alias eveniet animi error voluptatem odit, officia, assumenda porro ratione quo voluptas culpa inventore harum facere consequatur ab ad sunt? Minima."
    return (
        <>
            <h2>`${isTextChange === "small" ? text.toLowerCase() : text.toUpperCase()}`</h2>

            <button onClick={toggleText}> toggle text</button>
        </>
    )
}

export default isTextStyleChanged

