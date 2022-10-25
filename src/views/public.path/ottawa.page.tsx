import type { FC } from 'react';
import { Page } from 'src/components/Page';
import { WeatherBox } from './@shared/WeatherBox';

interface IProps {}

const OttawaPage: FC<IProps> = () => (
  <Page windowTitle="Ottawa Weather">
    <WeatherBox />
  </Page>
);

export default OttawaPage;
