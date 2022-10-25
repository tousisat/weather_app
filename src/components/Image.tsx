import type { FC } from 'react';
import { Box } from '@mui/material';

interface LogoProps {
  src: string;
  alt?: string;
  height: string | number | undefined;
  padding?: number;
}

const Image: FC<LogoProps> = (props) => {
  const { src, alt = 'Image', height, padding = 0 } = props;
  return (
    <Box p={padding}>
      <img height={height} alt={alt} src={src} />
    </Box>
  );
};

export { Image };
