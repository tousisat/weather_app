import { Box, Grid, Typography } from '@mui/material';
import type { FC } from 'react';
import { Image } from 'src/components/Image';
import { useWeather } from 'src/context/useWeather';

interface IProps {}

const WeatherBox: FC<IProps> = () => {
  const { isLoadingWeather, weatherDays } = useWeather();
  if (isLoadingWeather) return <Box>Loading...</Box>;
  if (weatherDays.length < 5) return <Box>API did not fetch properly</Box>;

  const firstEl = weatherDays[0];
  const otherEls = weatherDays.slice(1, 5);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={12} border="5px solid white" p={2}>
          <Box display="flex" justifyContent="center" mb={4}>
            <Typography variant="h2">Today</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box display="flex">
              <Image height={200} src={firstEl.image} alt={firstEl.description} />
              <Box ml={-8}>
                <Typography variant="h1">{firstEl.temperature}°</Typography>
                <Box ml={2}>
                  <Typography variant="h2">{firstEl.description}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        {otherEls.map((weatherDay, i) => (
          <Grid
            item
            key={weatherDay.dateFormated}
            md={3}
            border="5px solid white"
            p={2}
            mt={-1}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box>
              <Typography variant="h3">{weatherDay.dateFormated}</Typography>
            </Box>
            <Image height={100} src={weatherDay.image} alt={weatherDay.description} />
            <Box>
              <Typography variant="h3" fontWeight="bold">
                {weatherDay.temperature}°
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { WeatherBox };
