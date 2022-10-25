import type { IRoute } from 'src/navigation/@types/route';
import PublicLayout from 'src/layouts/public.layout';
import montrealPage from './montreal.page';
import ottawaPage from './ottawa.page';
import torontoPage from './toronto.page';

const route: IRoute = {
  path: () => '/public',
  guards: [],
  layout: PublicLayout,
  routes: [montrealPage, ottawaPage, torontoPage],
  redirect: montrealPage.path()
};

export default route;
