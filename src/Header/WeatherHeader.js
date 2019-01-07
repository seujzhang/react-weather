import React, { Component } from 'react';
import {cityArray as CityGroup} from '../Utils';
import {WeatherTitle} from '../Title';
import {CitySelector} from "../CitySelector";

class WeatherHeader extends Component {
    render() {
        return (
            <div>
                <WeatherTitle title={CityGroup[this.props.selectedCityId].name} />
                <CitySelector CityGroup={CityGroup} changeSelectdCity={this.props.changeSelectdCity} />
            </div>
        );
    }
}

export default WeatherHeader;