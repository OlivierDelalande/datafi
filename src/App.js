import React, { Component } from 'react';
import './App.css';
import { fetchCac } from './utils/fetcher';
import Rates from './Components/Rates';
import Chart from './Components/Chart';
import { parseRates } from './utils/numberUtils';


const URL = 'http://localhost:8000?count=20';

class App extends Component {
  state= {
    nas: [],
    cac: [],
  }

  componentDidMount() {
    this.fetcher()
    setInterval(this.fetcher, (1000))
  }

  componentWillUnmount() {
    clearInterval()
  }

  fetcher = () => {
    fetchCac(URL)
      .then(res => {
        let cac = [];
        let nas = [];
        res.forEach(item => {
          nas.push({value: parseRates(item.stocks.NASDAQ), id: item.index})
          cac.push({value: parseRates(item.stocks.CAC40), id: item.index})
        });
        this.setState({ nas, cac });
      })
  }

  updateState = (id, value, caption) => {
    let stateToUpdate = caption === 'CAC40' ? 'cac' : 'nas'
    const newArr = this.state[stateToUpdate];
    newArr[id].value = value;
    this.setState({ [stateToUpdate]: newArr })
  }

  render() {
    return (
      <div>
        <Chart nas={this.state.nas} cac={this.state.cac} />
        {this.state.nas && <Rates rates={this.state.nas} caption='NASDAQ' updateGlobalState={this.updateState}/>}
        {this.state.cac && <Rates rates={this.state.cac} caption='CAC40'updateGlobalState={this.updateState}/>}
      </div>
    );
  }
}

export default App;
