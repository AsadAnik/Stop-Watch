import React, { Component } from 'react'
import './Title.css'

class Title extends Component{

    constructor(props){
        super(props)

        this.state = {
            title: 'Stop Watch',
            color: '#000',
            isInput: false
        }
    }

    editFunc(){//Edit function...
        this.setState({
            ...this.state,
            isInput: true
        })
    }

    inputChange(event){//Change txt function...
        // console.log(event.target.value)
        this.setState({
            ...this.state,
            title: event.target.value
        })
    }

    KeyPressHandler(event){//keypress function...
        // console.log(event.key)
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput: false
            })
        }
    }

    blurHandler(){//focusout function...
        this.setState({
            ...this.state,
            isInput: false
        })
    }

    render(){

        let output = null

        if(this.state.isInput){
            output = (
                <div className="form-group">
                    <input className = "form-control" value = { this.state.title } 
                    onChange = { (event) => this.inputChange(event) }
                    onKeyPress = { (event) => this.KeyPressHandler(event) }
                    onBlur = { () => this.blurHandler() } 
                    />
                </div>
            )
        }else{
            output = (
                <div className="d-flex Title">
                    <h1 className="display-4"><font color={this.state.color}>{ this.state.title }</font></h1>
                    <span onClick={ () => this.editFunc() } className="ml-auto edit-icon">
                        <i className="fas fa-pencil-alt"></i>
                    </span>
                </div>
            )
        }

        return(
            <div className="Title">
                { output }
            </div>
        )
    }
}

export default Title