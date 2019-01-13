import React, { Component } from 'react';
import { Actions } from '../action';
import { connect } from 'react-redux';
import './WeatherCalendar.css';

const mapStateToProps = (state) => {
    return {
        weatherInfo: state.weatherInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSelectedCalendar: (selectedCalendarId) => {
            dispatch(Actions.updateCalendar(selectedCalendarId))
        }
    }
}



class WeatherCalendar extends Component {
    render() {
        const {weatherInfo,changeSelectedCalendar} = this.props;
        return (
            <div className="weather-canlendar">
                {
                    weatherInfo.map((obj, index) => {
                        return (
                            <div className="weather-data" key={obj.date} onClick={() => changeSelectedCalendar(index)}>
                                <div>{obj.date}</div>
                                <div>
                                    <img alt="img" src={require('../img/status_icon/' + obj.cond_code_n + '.png')} />
                                </div>
                                <div>{obj.tmp_min}~{obj.tmp_max}℃</div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCalendar);