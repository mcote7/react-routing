import React from 'react';

const ColorWord = (props) => {
    return(
        <h1 style={{
            backgroundColor: props.bgcolor,
            color: props.color
        }}>Welcome heres your colors . . .</h1>
    );
};

export default ColorWord;