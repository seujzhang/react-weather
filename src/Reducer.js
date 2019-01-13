import { ActionTypes } from "./action";

export default (state, action) => {
  switch (action.type) {
    case ActionTypes.UPDATELOCATION:
      return {...state, selectedCityId: action.selectedCityId}; 
    case ActionTypes.UPDATECALENDAR:
      return {...state, selectedCalendarId: action.selectedCalendarId};
    case ActionTypes.FETCHDATASTART:
      return {...state, weatherInfo: action.weatherInfo, selectedCityId: action.selectedCityId};
    case ActionTypes.FETCHDATASUCCESS:
      return {...state, weatherInfo: action.weatherInfo, selectedCityId: action.selectedCityId};
    case ActionTypes.FETCHDATAFAILED:
      return {...state, weatherInfo: action.weatherInfo, selectedCityId: action.selectedCityId};
    default:
      return state;
  }
};
