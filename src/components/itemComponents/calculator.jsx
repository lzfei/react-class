import React from 'react';
import TemperatureInput from './temperatureInput'
import { toCelsius, toFahrenheit } from '../../utils/util'

export default class Calculator extends React.Component {
  state = {
    temperature: '',
    scale: 'c'
  }

  handelCelsiusChange = (temperature) => {
    this.setState({
      temperature: temperature,
      scale: 'c'
    })
  }

  handelFahrenheitChange = (temperature) => {
    this.setState({
      temperature: temperature,
      scale: 'f'
    })
  }

  render() {
    const {scale, temperature} = this.state
    const celsius = scale === 'f' ? toCelsius(temperature) : temperature
    const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature
    return (
      <div className="temperature-input">
        <TemperatureInput 
          scale="c"
          temperature ={celsius}
          onTemperatureChange = {this.handelCelsiusChange}
        ></TemperatureInput>
        <TemperatureInput 
          scale="f"
          temperature ={fahrenheit}
          onTemperatureChange = {this.handelFahrenheitChange}
        ></TemperatureInput>
      </div>
    )
  }
}