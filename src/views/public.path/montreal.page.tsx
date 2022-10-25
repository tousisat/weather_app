import type { FC } from 'react';
import { Page } from 'src/components/Page';
import { WeatherBox } from './@shared/WeatherBox';

interface IProps {}

const MontrealPage: FC<IProps> = () => (
  <Page windowTitle="Montreal Weather">
    <WeatherBox />
  </Page>
);

export default MontrealPage;
