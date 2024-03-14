import React from 'react';

const UseCallbackButtons = (props) => {
    return (
        <div className="UseCallbackButtons">
            <button onClick={_=>props.inc(6)} className="btn">+6</button>
            <button onClick={_=>props.inc(12)} className="btn">+12</button>
            <button onClick={_=>props.inc(18)} className="btn">+18</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons);
