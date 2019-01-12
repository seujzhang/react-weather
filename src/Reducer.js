import { ActionTypes } from "./action";

export default (state, action) => {
  switch (action.type) {
    case ActionTypes.UPDATELOCATION:
      return {...state, locationId: action.locationId}; 
    case ActionTypes.UPDATECALENDAR:
      return {...state, calendarId: action.calendarId};
    case ActionTypes.FETCHDATASTART:
      return {...state, weatherInfo: action.weatherInfo, locationId: action.locationId};
    case ActionTypes.FETCHDATASUCCESS:
      return {...state, weatherInfo: action.weatherInfo, locationId: action.locationId};
    case ActionTypes.FETCHDATAFAILED:
      return {...state, weatherInfo: action.weatherInfo, locationId: action.locationId};
    default:
      return state;
  }
};
