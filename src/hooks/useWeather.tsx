import { optionType } from "../types";
import { useState, ChangeEvent } from "react";

type weatherType = {
    id: number
  }

const useWeather = () => {
    const [term, setTerm] = useState<string>('');
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<optionType | null>(null);
    const [weather, setWeather] = useState<weatherType | null>(null);
  
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
  
    const onOptionSelect = (option: optionType) => {
      setCity(option);
      setTerm(option.name + ', '+ option.country);
      setOptions([]); // Clearing options once location selected.
    }
  
    // Weather API
    const fetchWeather = async (city: optionType) => {
      try {
        const fetchRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_API_KEY}`);
        const weatherDetails = await fetchRes.json();
        setWeather(weatherDetails);
        console.log(weatherDetails);
      }
      catch(error) {
        console.error(error);
      }
    }

    return {
        term,
        city,
        weather,
        options,
        onInputChange,
        onOptionSelect,
        fetchWeather
    }
}

export default useWeather;