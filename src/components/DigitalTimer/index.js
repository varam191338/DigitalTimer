import {Component} from 'react'

class DigitalTimer extends Component {
  state = {isRunning: false, timeInMinutes: 25, timeInSeconds: 0}

  onClickImage = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  }

  onClickReset = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  }

  onDecrement = () => {
    const {timeInMinutes, timeInSeconds} = this.state
    if (timeInMinutes > 25) {
      this.setState(prevState => ({timeInMinutes: prevState.timeInMinutes - 1}))
    }
    return timeInMinutes
  }

  onIncrement = () => {
    this.setState(prevState => ({timeInMinutes: prevState.timeInMinutes + 1}))
  }

  render() {
    const {isRunning, timeInMinutes, timeInSeconds} = this.state
    const imageUrl = isRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const altText = isRunning ? 'pause icon' : 'play icon'
    const text = isRunning ? 'Pause' : 'Start'
    const pausedOrRunning = isRunning ? 'Running' : 'Paused'
    return (
      <div>
        <h1>Digital Timer</h1>
        <div>
          <h1>
            {timeInMinutes}:0{timeInSeconds}
          </h1>
          <p>{pausedOrRunning}</p>
          <button type="button" onClick={this.onClickImage}>
            <img src={imageUrl} alt={altText} />
          </button>
          <p>{text}</p>
          <button type="button" onClick={this.onClickReset}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt="reset-icon"
            />
          </button>
          <p>Reset</p>
          <p>Set timer Limit</p>
          <button type="button" onClick={this.onDecrement}>
            -
          </button>
          <p>{timeInMinutes}</p>
          <button type="button" onClick={this.onIncrement}>
            +
          </button>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
