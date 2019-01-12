import reducer from './Reducer';
import {createStore, compose, applyMiddleware} from 'redux';
import { ComstumThunkMiddleWare, ComstumLogMiddleWare } from './customMiddleWares';

const initvalues = {
    selectedCityId: 0,
    selectedCalendarId: 0,
    weatherInfo: {}
}

const middleWares = [ComstumThunkMiddleWare, ComstumLogMiddleWare];

const enhancers = compose(applyMiddleware(...middleWares));

export default createStore(reducer, initvalues, enhancers);