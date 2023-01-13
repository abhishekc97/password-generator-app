// import { useState } from "react";
import ReactSlider from "react-slider";
import "./Slider.css";

function Slider({value, handleChange}) {

    function handleChange(event) {
        // setLength(event.target.value);
    }
    return (
        <>
        
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            min={0}
            max={15}
            defaultValue={value}
            onChange={handleChange}
        />
        </>
        
    );
};
export default Slider;
