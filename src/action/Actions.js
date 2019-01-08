export const fetchDatat = (locationId) => {
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