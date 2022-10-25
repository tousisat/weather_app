import { axios } from 'src/utils/axios';
import queryString from 'query-string';
import { IGetWeatherRequest, IGetWeatherResponse } from './@types/weather';
import { cityCoords } from 'src/constants/cityCoords';
import { config } from 'src/config';

class WeatherAPI {
  async getWeather(query: IGetWeatherRequest) {
    const adaptedQuery = { ...cityCoords[query.city], product: 'civillight', output: 'json' };
    const myURL = queryString.stringifyUrl({
      url: config.WEATHER_URL,
      query: { ...adaptedQuery }
    });
    const { data } = await axios.get<IGetWeatherResponse>(myURL);
    return data;
  }
}

const weatherAPI = new WeatherAPI();

export { weatherAPI };
