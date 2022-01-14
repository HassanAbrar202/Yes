import React,{useRef,useEffect,useState} from 'react';
function Button2Api(props) {
    let data=props.sigpad.current.fromDataURL(props.signature);
    console.log({data})
    return (
        <div>

        </div>
    )
}

export default Button2Api
