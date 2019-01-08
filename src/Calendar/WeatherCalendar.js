import React, { Component } from 'react';

class WeatherCalendar extends Component {
    render() {
        const {weatherInfo,changeSelectedCalendar} = this.props;
        return (
            <div>
                {
                    weatherInfo.map((obj, index) => {
                        return (
                            <div key={obj.date} onClick={() => changeSelectedCalendar(index)}>
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

export default WeatherCalendar;