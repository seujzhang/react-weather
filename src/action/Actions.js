import * as ActionTypes from "./ActionTypes";
import { cityArray as CityGroup, settings } from "../Utils";

export const updateLocation = selectedCityId => {
  return {
    type: ActionTypes.UPDATELOCATION,
    selectedCityId: selectedCityId
  };
};

export const updateCalendar = calendarId => {
  return {
    type: ActionTypes.UPDATECALENDAR,
    calendarId: calendarId
  };
};

export const fetchDataStart = selectedCityId => {
  return {
    type: ActionTypes.FETCHDATASTART,
    weatherInfo: "Loading",
    selectedCityId: selectedCityId
  };
};

export const fetchDataSuccess = (selectedCityId, weatherInfo) => {
  return {
    type: ActionTypes.FETCHDATASUCCESS,
    weatherInfo: weatherInfo,
    selectedCityId: selectedCityId
  };
};

export const fetchDataFail = selectedCityId => {
  return {
    type: ActionTypes.FETCHDATAFAILED,
    weatherInfo: "Get data failed!",
    selectedCityId: selectedCityId
  };
};

export const fetchData = selectedCityId => {
  return (dispatch, getState) => {
    if (selectedCityId === getState().selectedCityId) {
      return;
    }

    let cityCode = undefined;
    CityGroup.forEach(item => {
      if (selectedCityId === item.id) {
        cityCode = item.code;
      }
    });

    if (!cityCode) {
      dispatch(fetchDataFail(selectedCityId));
    }

    dispatch(fetchDataStart(selectedCityId));

    const requestUrl = `/weather/forecast?location=${cityCode}&key=${settings.key}`;
    fetch(requestUrl).then(response => {
      if (response.status !== 200) {
        dispatch(fetchDataFail(selectedCityId));
        return;
      }
      response.json().then(rspJson => {
        dispatch(fetchDataSuccess(selectedCityId, rspJson.HeWeather6[0].daily_forecast))
      }).catch((error) => {
        dispatch(fetchDataFail(selectedCityId));
      });
    });
  };
};
