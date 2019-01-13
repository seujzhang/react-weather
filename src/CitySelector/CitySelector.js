import React, { Component } from 'react';
import { Actions } from '../action';
import { connect } from 'react-redux';
import { Button } from 'antd';

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
        const {CityGroup, changeSelectdCity} = this.props;
        return (
            <div style={{margin:'12px'}}>
                {
                    CityGroup.map( (city) => {
                        return <Button style={{marginLeft: '15px'}} key={city.id} onClick={() => changeSelectdCity(city.id)}>{city.name}</Button>
                    })
                }
            </div>
        );
    }
}


export default connect(mapStateTpProps, mapDispatchToProps)(CitySelector);