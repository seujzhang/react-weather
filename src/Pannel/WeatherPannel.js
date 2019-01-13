import React, { Component } from 'react';
import SelectedCityWeather from '../SelectedCityWeather/SelectedCityWeather';
import WeatherCalendar from '../Calendar/WeatherCalendar';
import { connect } from 'react-redux';
import { Layout } from 'antd';

const mapStateToProps = (state) => {
    return {
        weatherInfo: state.weatherInfo
    }
}

class WeatherPannel extends Component {
    render() {
        const { weatherInfo } = this.props;
        if(!weatherInfo) {
            return <div>Init...</div>
        }
        
        if(typeof weatherInfo === 'string' || weatherInfo instanceof String){
            return <div>{weatherInfo}</div>
        }

        return (
            <Layout>
                <SelectedCityWeather />
                <WeatherCalendar />
            </Layout>
        );
    }
}

export default connect(mapStateToProps)(WeatherPannel);