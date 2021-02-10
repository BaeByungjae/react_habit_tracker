import React,{memo} from 'react';

const Reset = memo((props) => {
    const handleReset=()=>{
        return props.onReset();
    }
    return <button onClick={handleReset} className="reset-button">Reset All</button>;
}
);

export default Reset;