import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const API_KEY = 'bac40554a1984e325822b622a582d76f';

function App() {
  const [city, setCity] = useState('Chennai');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchWeather(cityName) {
    const trimmed = cityName.trim();
    if (!trimmed) return;

    setLoading(true);
    setError('');

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        trimmed
      )}&appid=${API_KEY}&units=metric`;

      const res = await fetch(url);
      const data = await res.json();

      // OpenWeatherMap may return cod as number or string.
      if (!res.ok || String(data.cod) !== '200') {
        setWeather(null);
        setError('City not found. Please try another city.');
        return;
      }

      setWeather(data);
    } catch (e) {
      setWeather(null);
      setError('Something went wrong. Please check your internet and try again.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather('Chennai');
  }, []);

  function handleSearch(cityName) {
    setCity(cityName);
    fetchWeather(cityName);
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Weather App</h1>

        <SearchBar initialValue={city} onSearch={handleSearch} loading={loading} />

        {loading && <p className="status">Loading weather...</p>}
        {!loading && error && <p className="status status--error">{error}</p>}
        {!loading && !error && weather && <WeatherCard weather={weather} />}

        <p className="hint">Tip: Try cities like Mumbai, Delhi, London, Tokyo</p>
      </div>
    </div>
  );
}

export default App;
