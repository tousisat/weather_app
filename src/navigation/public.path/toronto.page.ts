import type { IRoute } from 'src/navigation/@types/route';
import { lazy } from 'react';
import { WeatherProvider } from 'src/context/useWeather';

const route: IRoute = {
  path: () => '/public/toronto',
  component: lazy(() => import('src/views/public.path/toronto.page')),
  providers: [({ ...other }) => WeatherProvider({ city: 'toronto', ...other })]
};

export default route;
