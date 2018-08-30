import React, { Component } from 'react'
import { LineChart } from 'react-easy-chart'


export default class Chart extends Component {
  render() {
    const mixedArray = [...this.props.cac.map(item => parseFloat(item.value)), ...this.props.nas.map(item => parseFloat(item.value))];
    const cacChart = this.props.cac.map((item, index) => {
      return {x: index, y: item.value};
    })
    const nasChart = this.props.nas.map((item, index) => {
      return {x: index, y: item.value};
    })
    return (
      <div>
        <LineChart
          margin={{top: 0, right: 0, bottom: 30, left: 100}}
          axes
          width={1000 }
          height={500}
          interpolate={'cardinal'}
          xDomainRange={[0, 20]}
          yDomainRange={[Math.min( ...mixedArray) - 1, Math.max( ...mixedArray) + 1]}
          grid
          verticalGrid
          axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
          data={[ cacChart, nasChart ]}
        />
      </div>
    )
  }
}
