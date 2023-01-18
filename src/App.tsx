import { ChangeEvent, useState } from 'react';
import { optionType } from './types';

const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>('');
  const [options, setOptions] = useState<[]>([]);

  // Location API
  const fetchLoc = async (cityname: string) => {
    try {
      const fetchResult = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=5&appid=${process.env.REACT_APP_API_KEY}`);
      const locationRes = await fetchResult.json();
      setOptions(locationRes);
    }
    catch(error) {
      console.error(error);
    }
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value === '') return;
    fetchLoc(value);
  }

  // Weather API
  const onOptionSelect = (option: optionType) => {
    setTerm(option.name + ', '+ option.country);
    const fetchWeather = async (lat: number, lon: number) => {
      const fetchRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`);
      const weatherDet = await fetchRes.json();
      console.log(weatherDet);
    }
    fetchWeather(option.lat, option.lon);
  }

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="bg-white rounded bg-opacity-20 backdrop-blur-lg drop-shadow-lg w-full md:max-w-[500px] p-4 flex flex-col text-center justify-center md:px-10 lg:p-24 h-full sm:h-[500px] lg:h-[500px] text-zinc-700">
        <h1 className="text-4xl font-thin">Weather <span className="font-black">Forecast</span></h1>
        <p className="text-sm mt-3 mb-5">Enter below a place you want to know the weather of and select an option from dropdown</p>
        <div className='relative flex mt-4 justify-center'>
          <input type="text" value={term} onChange={onInputChange} className='px-2 py-1 rounded-l-md border-2 border-white outline-none text-black' />
          <ul className='bg-white rounded-b-md top-9 absolute ml-1 left-16 sm:left-20 md:left-8'>
            {
              options.map((option: optionType, index: number) => (
                <li key={index}>
                  <button className='text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1' onClick={() => onOptionSelect(option)}>{option.name}, {option.country}</button>
                </li>
              ))
            }
          </ul>
          <button className="rounded-r-md text-zinc-100 border-2 border-zinc-100 px-2 py-1 cursor-pointer hover:text-zinc-500">search</button>
        </div>
      </section>
    </main>
  );
}

export default App;
