import { forecastType } from '../types';
import Degree from './Degree';
import Sunrise from './Icons/Sunrise';
import Sunset from './Icons/Sunset';
import { getSunTime, getWindDirection } from '../helper/index';
import Tile from './Tile';

const Forecast = ({data}: {data: forecastType}): JSX.Element => {
  const today = data.list[0];
  return (
    <div className='w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
        <div className='mx-auto w-[300px]'>
            <section className='text-center'>
                <h2 className='text-2xl font-black'>{data.name}<span className='font-thin'> {data.country}</span>
                </h2>
                <p className='font-bold text-3xl'><Degree temp={today.main.temp} /></p>
                <p className='text-m font-medium'>{today.weather[0].main} ({today.weather[0].description})</p>
                <p className='font-medium'>H: <Degree temp={Math.ceil(today.main.temp_max)}/> L: <Degree temp={Math.floor(today.main.temp_min)}/></p>
                <section className='flex overflow-x-scroll mt-4 pb-2 mb-5'>
                    {
                        data.list.map((item, i) => (
                            <div key={i} className='w-[50px] inline-block text-center flex-shrink-0'>
                                <p className='text-sm font-medium'>{i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}</p>
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather" />
                                <p className='text-sm font-bold'><Degree temp={item.main.temp} /></p>
                            </div>
                        ))
                    }
                </section>
                <section className='flex flex-wrap justify-between text-zinc-700'>
                    <div className='w-[145px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5'>
                        <Sunrise />
                        <p className='pt-2 font-bold'>{getSunTime(data.sunrise)}</p>
                    </div>
                    <div className='w-[145px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5'>
                        <Sunset />
                        <p className='pt-2 font-bold'>{getSunTime(data.sunset)}</p>
                    </div>
                </section>
                <section>
                    <Tile icon='wind' title='Wind' info={`${Math.round(data.list[0].wind.speed)} km/h`} description={`${getWindDirection(data.list[0].wind.deg)}, gusts ${data.list[0].wind.gust.toFixed(1)} km/h`} />
                </section>    
            </section>
        </div>
    </div>
  );
}

export default Forecast;