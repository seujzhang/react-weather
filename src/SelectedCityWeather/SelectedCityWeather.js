import React, { Component } from 'react';

class SelectedCityWeather extends Component {
    render() {
        const {selectedCalendarId,weatherInfo} = this.props;
        const {cond_txt_d,cond_code_d,tmp_min,tmp_max,wind_sc,wind_dir,wind_deg,wind_spd} = weatherInfo[selectedCalendarId];
        return (
            <div>
                <div>{cond_txt_d}</div>
                <div>
                    <img alt="pic" src={require("../img/status_icon/"+cond_code_d+".png")} />
                    <span>{tmp_min}~{tmp_max}℃</span>
                </div>
                <div>
                    <div>风力等级: {wind_sc}</div>
                    <div>风向角度(0~360): {wind_dir} {wind_deg}</div>
                    <div>风速(km):{wind_spd}</div>
                </div>
            </div>
        );
    }
}

export default SelectedCityWeather;