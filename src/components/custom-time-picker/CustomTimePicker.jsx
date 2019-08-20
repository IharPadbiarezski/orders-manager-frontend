import React, { Component } from 'react'
import TimePicker from 'react-time-picker'

class CustomTimePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '00:00',
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(time) {
    this.setState({ time })
  }

  render() {
    const { time } = this.state
    return <TimePicker value={time} onChange={this.onChange} />
  }
}

export default CustomTimePicker
