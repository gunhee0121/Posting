import React from 'react';

function Toast(props){
    return(
        <div className="toast">{props.children}</div>
    );
}

export default Toast;