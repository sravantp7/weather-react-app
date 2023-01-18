import Search from './components/Search';
import useForecast from './hooks/useForecast';
import Forecast from './components/Forecast';

const App = (): JSX.Element => {
  const {
    term,
    city,
    weather,
    options,
    onInputChange,
    onOptionSelect,
    fetchWeather
  } = useForecast(); // Custom Hook

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 w-full">
      {
        !weather ? <Search term={term} city={city} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} fetchWeather={fetchWeather} /> : <Forecast data={weather} />
      }
    </main>
  );
}

export default App;
