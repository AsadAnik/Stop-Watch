import React from 'react';
import Digit from './Digit/Digit';

const Countdown = (props) => {//FunctionalBase...
    return(
        <div className="Countdown d-flex my-4">
            <Digit color="palegreen" value={ props.time.min } />
            <Digit color="skyblue" value={ props.time.sec } />
            <Digit color="salmon" value={ props.time.mili } />
        </div>
    )
}

export default Countdown;