import React from 'react';

export default function Child(props){
    return(
        <button onClick={props.method}>{props.buttonName}</button>
    )
}