import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler() {
    console.log('classClicked')
  }

  render() {
    return (
      <div>
        {/* Event handlick onClick is a function, not a function call; Do not add parenthesis 
        * must also use the 'THIS' keyword*/}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
