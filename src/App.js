import React, { Component } from 'react';
import WeatherHeader from './Header/WeatherHeader';
import WeatherPannel from './Pannel/WeatherPannel';
import {cityArray as CityGroup, settings} from './Utils';
import {Provider} from 'react-redux';
import store from './Stores';
import { Actions } from './action';

class App extends Component {

  //如果weatherInfo初始化为一个空数组，怎么破？(因为是一个异步操作，所以会报错)
  constructor() {
    super();
    this.state = {
      //selectedCityId: 0,
      selectedCalendarId: 0,
      weatherInfo: [{"cond_code_d":"100",
      "cond_code_n":"100",
      "cond_txt_d":"晴",
      "cond_txt_n":"晴",
      "date":"2019-01-08",
      "hum":"24",
      "mr":"09:00",
      "ms":"19:06",
      "pcpn":"0.0",
      "pop":"0",
      "pres":"1039",
      "sr":"07:35",
      "ss":"17:07",
      "tmp_max":"1",
      "tmp_min":"-10",
      "uv_index":"4",
      "vis":"10",
      "wind_deg":"237",
      "wind_dir":"西南风",
      "wind_sc":"1-2",
      "wind_spd":"9"}]
    }
  }

  componentDidMount() {
    // const requestUrl = `/weather/forecast?location=${CityGroup[this.state.selectedCityId].code}&key=${settings.key}`;
    // fetch(requestUrl).then((response) => {
    //   if(response.status !== 200) {
    //     console.log('Fetch data fail!');
    //     return; 
    //   }
    //   response.json().then((rspJson) => {
    //     console.log(rspJson.HeWeather6[0].daily_forecast);
    //     this.setState({
    //       weatherInfo: rspJson.HeWeather6[0].daily_forecast
    //     })
    //   })
    // })
    store.dispatch(Actions.fetchData(CityGroup[0].id));
  }

  changeSelectdCity(id) {
    const requestUrl = `/weather/forecast?location=${CityGroup[id].code}&key=${settings.key}`;
    fetch(requestUrl).then((response) => {
      if(response.status !== 200) {
        console.log('Fetch data fail!');
        return; 
      }
      response.json().then((rspJson) => {
        console.log(rspJson.HeWeather6[0].daily_forecast);
        this.setState({
          selectedCityId: id,
          weatherInfo: rspJson.HeWeather6[0].daily_forecast
        })
      })
    })
  }

  changeSelectedCalendar(id) {
    this.setState({
      selectedCalendarId: id
    })
  }

  render() {
    return (
      <Provider store={store}>
        <WeatherHeader />
        <WeatherPannel weatherInfo={this.state.weatherInfo} selectedCalendarId={this.state.selectedCalendarId} changeSelectedCalendar={(id) => this.changeSelectedCalendar(id)} />
      </Provider>
    );
  }
}

export default App;