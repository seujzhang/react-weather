import React, { Component } from 'react';
import WeatherHeader from './Header/WeatherHeader';
import WeatherPannel from './Pannel/WeatherPannel';
import {cityArray as CityGroup, settings} from './Utils';
import {Provider} from 'react-redux';
import store from './Stores';
import { Actions } from './action';
import './App.css';
import { Layout } from 'antd';

class App extends Component {

  componentDidMount() {
    store.dispatch(Actions.fetchData(CityGroup[0].id));
  }

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <WeatherHeader />
          <WeatherPannel />
        </Layout>
      </Provider>
    );
  }
}

export default App;