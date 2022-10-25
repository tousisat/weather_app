import publicPath from './public.path';

import { IRoute } from 'src/navigation/@types/route';

const route: IRoute = {
  path: () => '/',
  guards: [],
  providers: [],
  routes: [publicPath],
  redirect: publicPath.path()
};

export default route;
