import React, { Component } from 'react'
import './Title.css'

class Title extends Component{

    constructor(props){
        super(props)

        this.state = {
            title: 'Stop Watch',
            color: '#000',
            isInput: false,
            isColor: false
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

    clickColor(){
        this.setState({
            ...this.state,
            isColor: true
        })
    }

    inputColor(event){
        // console.log(event.target.value)
        let colorValue = event.target.value
        this.setState({
            ...this.state,
            color: colorValue
        })
        console.log(this.state.color)
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

        ///The OutPut2....
            let output2 = null

            if(this.state.isColor){
                output2 = (
                    <input type="color" onFocus={ (event) => this.inputColor(event) } />
                )
            }else{
                output2 = (
                    <span className="colorIcon" onClick={ () => this.clickColor() }>
                        <i class="fa fa-paint-brush" aria-hidden="true"></i>
                    </span>
                )
            }

        return(
            <div className="Title">
                { output }
                { output2 }
            </div>
        )
    }
}

export default Title