import { ActionTypes } from "./ActionTypes";

export const updateLocation = (locationId) => {
    return {
        type: ActionTypes.UPDATELOCATION,
        locationId: locationId
    }
}

export const updateCalendar = (calendarId) => {
    return {
        type: ActionTypes.UPDATECALENDAR,
        calendarId: calendarId
    }
}

export const fetchDataStart = (locationId) => {
    return {
        type: ActionTypes.FETCHDATASTART,
        weatherInfo: 'Loading',
        locationId: locationId
    }
}

export const fetchDataSuccess = (locationId, weatherInfo) => {
    return {
        type: ActionTypes.FETCHDATASUCCESS,
        weatherInfo: weatherInfo,
        locationId: locationId
    }
}

export const fetchDataFail = (locationId) => {
    return {
        type: ActionTypes.FETCHDATAFAILED,
        weatherInfo: 'Get data failed!',
        locationId: locationId
    }
}

export const fetchData = (locationId) => {
    const requestUrl = `/weather/forecast?location=${CityGroup[locationId].code}&key=${settings.key}`;
    fetch(requestUrl).then((response) => {
        if(response.status !== 200) {
            return; 
        }
        response.json().then((rspJson) => {
            return rspJson.HeWeather6[0].daily_forecast;
        })
    })
}