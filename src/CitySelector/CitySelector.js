import React, { Component } from 'react';
import { Actions } from '../action';
import { connect } from 'react-redux';

const mapStateTpProps = (state) => {
    return {
        selectedCityId: state.selectedCityId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSelectdCity: (selectedCityId) => {
            dispatch(Actions.fetchData(selectedCityId));
        }
    }
}

class CitySelector extends Component {
    render() {
        const {CityGroup, selectedCityId, changeSelectdCity} = this.props;
        return (
            <div>
                {
                    CityGroup.map( (city) => {
                        return <button key={city.id} onClick={() => changeSelectdCity(city.id)}>{city.name}</button>
                    })
                }
            </div>
        );
    }
}


export default connect(mapStateTpProps, mapDispatchToProps)(CitySelector);