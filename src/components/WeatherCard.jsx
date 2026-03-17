function WeatherCard({ weather }) {
  const cityName = weather?.name ?? '';
  const temperature = weather?.main?.temp;
  const condition = weather?.weather?.[0]?.main ?? '';
  const conditionDesc = weather?.weather?.[0]?.description ?? '';
  const humidity = weather?.main?.humidity;
  const windSpeed = weather?.wind?.speed;

  return (
    <div className="weather">
      <h2 className="weather__city">{cityName}</h2>

      <div className="weather__main">
        <div className="weather__temp">
          {typeof temperature === 'number' ? Math.round(temperature) : '--'}°C
        </div>
        <div className="weather__condition">
          <div className="weather__conditionTitle">{condition}</div>
          <div className="weather__conditionDesc">{conditionDesc}</div>
        </div>
      </div>

      <div className="weather__grid">
        <div className="weather__item">
          <div className="weather__label">Humidity</div>
          <div className="weather__value">
            {typeof humidity === 'number' ? humidity : '--'}%
          </div>
        </div>
        <div className="weather__item">
          <div className="weather__label">Wind Speed</div>
          <div className="weather__value">
            {typeof windSpeed === 'number' ? windSpeed : '--'} m/s
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
