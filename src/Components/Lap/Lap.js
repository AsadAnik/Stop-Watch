import React from 'react';

const Lap = (props) => {

    return(
        <ul className="list list-group-flush">
            { props.laps.map((Lap, index) => {
                return(
                    <li key={ index } className="list list-group-item">
                    <h4>
                        <span className="text-dark">Minute: </span>
                        <span className="text-danger">{ Lap.min }</span>
                        
                        <span className="text-dark">Second: </span>
                        <span className="text-danger">{ Lap.sec }</span>

                        <span className="text-dark">Mili: </span>
                        <span className="text-danger">{ Lap.mili }</span>
                    </h4>
                </li>
                )
            }) }
        </ul>
    )

}

export default Lap