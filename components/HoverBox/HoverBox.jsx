import { useState } from 'react'
import './HoverBox.css'

export const HoverBox = () => {
    const mouseEnter = (event) => {
        event.target.classList.add("hovered");
    };

    const mouseLeave = (event) => {
        event.target.classList.remove("hovered");
    };

    return (
        <div className='box'
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}></div>
    )
}