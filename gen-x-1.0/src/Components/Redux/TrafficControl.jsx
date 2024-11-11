import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stop , go , reset} from "./TrafficeSlice";
const TrafficControl = () =>{
    const trafficeColor = useSelector(state => state.traffice.color)
    const dispatch = useDispatch()
    return (
        <>
        <h2>Traffice Control {trafficeColor}</h2>
        <button onClick={ () => dispatch(stop())}>Stop</button>
        <button onClick={ () => dispatch(go())}>Go</button>
        <button onClick={ () => dispatch(reset())}>Reset</button>
        </>
    )

}

export default TrafficControl