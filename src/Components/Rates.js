import React, { Component } from 'react'

export default class Rates extends Component {
  state = {
      newValue: null,
  }
  onChange = (index) => e => {
    this.setState({ newValue: e.target.value });
    const { updateGlobalState, caption } = this.props;
    updateGlobalState(index, e.target.value, caption)
  }

  render() {
    const { rates, caption } = this.props;
    console.log('rates', rates)
    return (
      <div style={{ display: 'flex' }}>
        <div style={{marginLeft: '20px', marginRight: '20px', width:'60px'}}>
          {caption}
        </div>
        {rates.map((item, index) => {
            return <div
                key={item.id}
                style={{ border: '1px solid black', fontSize: 12, padding: 5 }}
                >
                    <input
                        style={{ width: 50 }}
                        id={item.id}
                        type="number"
                        placeholder={item.value}
                        value={this.setState.newValue}
                        onChange={this.onChange(index)}
                    />
                  </div>
                })}
            </div>
    )
  }
}
