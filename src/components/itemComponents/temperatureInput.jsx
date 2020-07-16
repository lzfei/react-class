import React from 'react'
import { Input } from 'antd';
import { scaleNames } from '../../constant'

export default class TemperatureInput extends React.Component {

  onChange = e => {
    this.props.onTemperatureChange(e.target.value)
  }
  render () {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <div>
        <p className="input-p">请输入{scaleNames[scale]}</p>
        <Input value={temperature} placeholder={ `请输入${scaleNames[scale]}` } allowClear onChange={this.onChange} />
      </div>
    )
  }
}