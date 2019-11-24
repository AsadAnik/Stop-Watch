import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './Title/Title'
import Countdown from './CountDown/Countdown';
import Controller from './Controller/Controller';

class App extends Component{//main class...

  constructor(props){//Constructor..
      super(props)

      this.state = {
        time: {
          min: 0,
          sec: 0,
          mili: 0,
        },
      }
  }

  setStart(){///The Function for Start button of Controller Area...
    this.intervalID = setInterval( () => {
      let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mili = this.state.time.mili;

      if(mili >= 10){
        sec = sec+1;
        mili = 0;
      }
      if(sec >= 60){
        min = min+1;
        sec = 0;
      }

      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mili: mili+1
        }
      })

    }, 100 )
  }///END of the setStart Function...

  setPause(){///Function for Pause button to Pause interval function...
    clearInterval(this.intervalID)
  }//END of the Pause function..abs

  setReset(){///For Reset the Values of Stop_Watch...
    this.setState({
      ...this.state,
      time: {
        min: 0,
        sec: 0,
        mili: 0
      }
    })
  }//END of the reset function...

  render(){//Render Function...
    return (
      <div className="App">
        <div className="container jumbotron">
            <div className="row">
               <div className="col-sm-8 offset-sm-2">
                 <Title />
                 <Countdown time={ this.state.time } />
                 <Controller start={ this.setStart.bind(this) }
                 pause={ this.setPause.bind(this) } 
                 reset={ this.setReset.bind(this) } />
               </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
