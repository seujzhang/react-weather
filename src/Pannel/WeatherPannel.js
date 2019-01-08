import React, { Component } from 'react';
import SelectedCityWeather from '../SelectedCityWeather/SelectedCityWeather';
import WeatherCalendar from '../Calendar/WeatherCalendar';

class WeatherPannel extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state({

    //     // })
    // }

    render() {
        return (
            <div>
                <SelectedCityWeather selectedCalendarId={this.props.selectedCalendarId} weatherInfo={this.props.weatherInfo} />
                <WeatherCalendar weatherInfo={this.props.weatherInfo} changeSelectedCalendar={this.props.changeSelectedCalendar} />
            </div>
        );
    }
}

export default WeatherPannel;