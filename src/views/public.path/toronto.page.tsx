import type { FC } from 'react';
import { Page } from 'src/components/Page';
import { WeatherBox } from './@shared/WeatherBox';

interface IProps {}

const TorontoPage: FC<IProps> = () => (
  <Page windowTitle="Toronto Weather">
    <WeatherBox />
  </Page>
);

export default TorontoPage;
