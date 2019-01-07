import React, { Component } from 'react';
import WeatherHeader from './Header/WeatherHeader';

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedCityId: 0
    }
  }

  componentDidMount() {
    // this.setState({
    //   selectedCityId: 1
    // })
  }

  changeSelectdCity(id) {
    this.setState({
      selectedCityId: id
    })
  }

  render() {
    return (
      <div>
        <WeatherHeader selectedCityId={this.state.selectedCityId} changeSelectdCity={(id) => this.changeSelectdCity(id)} />
      </div>
    );
  }
}

export default App;