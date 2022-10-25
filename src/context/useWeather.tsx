import { useContext } from 'react';
import { createContext, useState } from 'react';
import type { FC, ReactNode } from 'react';
import _ from 'lodash';
import { useAsync } from 'src/hooks/useAsync';
import moment from 'moment';
import { WeatherCities } from 'src/api/@types/weather';
import { weatherAPI } from 'src/api/weather';

interface WeatherDay {
  image: string;
  temperature: number;
  description: string;
  dateFormated: string;
}

interface IWeatherContext {
  weatherDays: WeatherDay[];
  isLoadingWeather: boolean;
  getWeather: (payload: { city: WeatherCities }) => Promise<WeatherDay[] | undefined>;
}

interface IProps {
  children?: ReactNode;
  city: WeatherCities;
}

const WeatherContext = createContext<IWeatherContext>({
  weatherDays: [],
  isLoadingWeather: false,
  getWeather: () => Promise.resolve([])
});

export const WeatherProvider: FC<IProps> = ({ children, city }) => {
  const [weatherDays, setWeatherDays] = useState<WeatherDay[]>([]);

  const _getWeather = async ({ city }: { city: WeatherCities }): Promise<WeatherDay[]> => {
    const { dataseries } = await weatherAPI.getWeather({ city });
    const weatherDays = dataseries.map((weatherDay) => ({
      image: '/weather_icons/' + weatherDay.weather + '.svg',
      temperature: (weatherDay.temp2m.max + weatherDay.temp2m.min) / 2,
      description: weatherDay.weather,
      dateFormated: moment(`${weatherDay.date}`).format('ddd')
    }));
    return weatherDays;
  };

  const { isLoading: isLoadingWeather, doAsync: getWeather } = useAsync({
    asyncFunction: _getWeather,
    params: { city },
    executeOnMount: true,
    onSuccess: (res) => {
      setWeatherDays(res);
    }
  });

  return (
    <WeatherContext.Provider
      value={{
        weatherDays,
        isLoadingWeather,
        getWeather
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): IWeatherContext => useContext(WeatherContext);
