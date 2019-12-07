import React, { Component } from 'react';

class Controller extends Component{

    constructor(props){
        super(props)

        this.state = {
            start: true,
            pause: false,
            lab: false,
            reset: false
        }

    }

    startHandler(event){
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lab: true
        })

     //Called the function with props from another component..   
        this.props.start()
    }
    pauseHandler(event){
        this.setState({
            ...this.state,
            start: true,
            lab: false,
            reset: true
        })

     //Called the function with props from another Component..   
        this.props.pause()
    }

    lapHandler(event){
        this.props.laps()
    }

    resetHandler(event){
        this.setState({
            start: true,
            pause: false,
            lab: false,
            reset: false
        })

     //Called the function with props from another Component..   
        this.props.reset()
    }

    controllerFunction(){//The Controller Function...
            let output = null

            if(this.state.start && !this.state.reset){
                output = (
                    <div className="py-5">
                        <button className="btn btn-success btn-lg px-4 mx-3" 
                        onClick={ event => {this.startHandler(event)} }>Start</button>
                    </div>
                )

            }else if(this.state.pause && this.state.lab){
                output = (
                    <div className="py-5">
                        <button className="btn btn-primary btn-lg px-4 mx-3" 
                        onClick={ event => {this.pauseHandler(event)} }>Pause</button>

                        <button className="btn btn-warning btn-lg px-4 mx-3" 
                        onClick={ event => {this.lapHandler(event)} }>Lab</button>
                    </div>
                )

            }else if(this.state.start && this.state.reset){
                output = (
                    <div className="py-5">
                        <button className="btn btn-success btn-lg px-4 mx-3" 
                        onClick={ event => {this.startHandler(event)} }>Start</button>

                        <button className="btn btn-danger btn-lg px-4 mx-3" 
                        onClick={ event => {this.resetHandler(event)} }>Reset</button>
                    </div>
                )
            }

            return output
    }

    render(){//Return Function...
        return this.controllerFunction()
    }
}

export default Controller;