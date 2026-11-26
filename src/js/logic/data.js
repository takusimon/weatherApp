async function fetchTempData(cleanUserInput) {
  const [city, countryOrState] = cleanUserInput;

  const metricUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${countryOrState}?unitGroup=metric&include=current,days&elements=datetime,tempmax,tempmin,temp,humidity,conditions&contentType=json`;
  const imperialUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${countryOrState}?unitGroup=us&include=current,days&elements=datetime,tempmax,tempmin,temp,humidity,conditions&contentType=json`;

  const fetchedMetricPromise = fetch(metricUrl);
  const fetchedImperialPromise = fetch(imperialUrl);

  const fetchedPromises = await Promise.all([
    fetchedMetricPromise,
    fetchedImperialPromise,
  ]);

  if (fetchedPromises.every((response) => response.ok)) {
    return fetchedPromises;
  } else {
    throw new Error("Failed to Fetch weather Data");
  }
}

async function parseFetchedData(response){
        const [metricObjData,imperialObjData] = response;
        return [await metricObjData.json(),await imperialObjData.json()];
      }