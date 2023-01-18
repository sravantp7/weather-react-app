import Search from './components/Search';
import useWeather from './hooks/useWeather';

const App = (): JSX.Element => {
  const {
    term,
    city,
    weather,
    options,
    onInputChange,
    onOptionSelect,
    fetchWeather
  } = useWeather(); // Custom Hook

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {
        !weather ? <Search term={term} city={city} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} fetchWeather={fetchWeather} /> : <h1>{weather.id}</h1>
      }
    </main>
  );
}

export default App;
