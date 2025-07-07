import { useState } from 'react'
import './MirrorInput.css'

export const MirrorInput = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className='mirrorinput-container'>
            <input type="text" value={text} onChange={handleChange} />
            <p>Espejo: {text}</p>
        </div>
    )
}