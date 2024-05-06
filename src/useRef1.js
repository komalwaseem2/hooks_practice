import React, { useRef} from 'react';

export default function InputRef(){

    const btn = useRef("");
    
    return (
        <div>
            <button ref={btn}>Click</button>
            <button onClick={()=>btn.current.disabled=true}>Disable Click</button>
        </div>
    );
}