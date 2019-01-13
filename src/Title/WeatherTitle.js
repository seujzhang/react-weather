import React, { Component } from 'react';
import { connect } from 'react-redux';
import './WeatherTitle.css';

const getCityName = (CityGroup, selectedCityId) => {
    let cityName = undefined;
    CityGroup.forEach((item) => {
        if(item.id === selectedCityId) {
            cityName = item.name;
        }
    })
    return cityName;
}

const mapStateToProps = (state, ownProps) => {
    return {
        title: getCityName(ownProps.CityGroup, state.selectedCityId)
    }
}

class WeatherTitle extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className="title">{title}</div>
        );
    }
}

// export default WeatherTitle;
export default connect(mapStateToProps)(WeatherTitle);