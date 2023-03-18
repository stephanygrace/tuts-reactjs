import React, { Component } from "react";

export class Counter extends Component {
    constructor(props) {
    super(props)

      this.state = {
            count: 0
      }
    }

    increment() {
      // parameter for setState (object that sets the current value, arrow function for new current value)
        this.setState({
          count: this.state.count + 1
        },
        () => {
          console.log('Callback Value', this.state.count)
        }
      )
        console.log(this.state.count)
    }

    render() { 
      return (
        <div>Count - {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
        </div>
      )
    }
}

export default Counter;