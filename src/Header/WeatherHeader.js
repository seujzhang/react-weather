import React, { Component } from 'react';
import {cityArray as CityGroup} from '../Utils';
import {WeatherTitle} from '../Title';
import {CitySelector} from "../CitySelector";

class WeatherHeader extends Component {
    render() {
        return (
            <div>
                <WeatherTitle CityGroup={CityGroup} />
                <CitySelector CityGroup={CityGroup} />
            </div>
        );
    }
}

export default WeatherHeader;