import React from 'react';

const WordOrNum = (props) => {
    const nums = /^\d+$/;
    const words = /^\D*$/;
    if(props.anything.match(nums)) {
        return(
            <h1>Welcome your number is . . . {props.anything}</h1>
        );
    }
    else if(props.anything.match(words)) {
        return(
            <h1>Welcome your word is . . . {props.anything}</h1>
        );
    }
    else {
        return(
            <p>please enter number only, or word only!</p>
        );
    }

};

export default WordOrNum;