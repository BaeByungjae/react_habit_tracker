import React, { useRef,useEffect,memo } from 'react';

const Habitinput = memo((props) => {
    const inputRef=useRef();
    const submitRef=useRef();
    useEffect(()=>{
        inputRef.current.focus();
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=inputRef.current.value;
        inputRef.current.focus();
        inputRef.current.value='';
        name&&props.onAdd(name);
    }
    return (
        <form ref={submitRef} onSubmit={handleSubmit}>
            <input ref={inputRef} className="input-text" type="text"></input>
            <button type="submit" className="input-btn">Add</button>
        </form>
    );
});

export default Habitinput;