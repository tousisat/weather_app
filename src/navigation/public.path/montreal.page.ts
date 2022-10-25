import type { IRoute } from 'src/navigation/@types/route';
import { lazy } from 'react';
import { WeatherProvider } from 'src/context/useWeather';

const route: IRoute = {
  path: () => '/public/montreal',
  component: lazy(() => import('src/views/public.path/montreal.page')),
  providers: [({ ...other }) => WeatherProvider({ city: 'montreal', ...other })]
};

export default route;
