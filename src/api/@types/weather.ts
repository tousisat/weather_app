export type WeatherCities = 'ottawa' | 'toronto' | 'montreal';

export interface IGetWeatherRequest {
  city: WeatherCities;
}

//REF: https://github.com/Yeqzids/7timer-issues/wiki/Wiki#civil-and-civil-light
export interface IGetWeatherResponse {
  product: 'civillight';
  init: string;
  dataseries: [
    {
      date: number;
      weather:
        | 'clear'
        | 'pcloudy'
        | 'mcloudy'
        | 'cloudy'
        | 'humid'
        | 'lightrain'
        | 'oshower'
        | 'ishower'
        | 'lightsnow'
        | 'rain'
        | 'snow'
        | 'rainsnow'
        | 'ts'
        | 'tsrain';
      temp2m: {
        max: number;
        min: number;
      };
      wind10m_max: number;
    }
  ];
}
