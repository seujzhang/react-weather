import React, { Component } from 'react';
import {cityArray as CityGroup} from '../Utils';
import {WeatherTitle} from '../Title';
import {CitySelector} from "../CitySelector";
import { Layout } from 'antd';

class WeatherHeader extends Component {
    render() {
        return (
            <Layout>
                <WeatherTitle CityGroup={CityGroup} />
                <CitySelector CityGroup={CityGroup} />
            </Layout>
        );
    }
}

export default WeatherHeader;