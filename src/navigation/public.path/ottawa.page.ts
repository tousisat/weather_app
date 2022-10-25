import type { IRoute } from 'src/navigation/@types/route';
import { lazy } from 'react';
import { WeatherProvider } from 'src/context/useWeather';

const route: IRoute = {
  path: () => '/public/ottawa',
  component: lazy(() => import('src/views/public.path/ottawa.page')),
  providers: [({ ...other }) => WeatherProvider({ city: 'ottawa', ...other })]
};

export default route;
