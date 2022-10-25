import { forwardRef } from 'react';
import type { HTMLProps, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/material';

interface IProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  windowTitle: string;
}

const Page = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { children, windowTitle } = props;

  return (
    <Box ref={ref as any} flexGrow={1} width="100%">
      <Helmet>
        <title>{windowTitle}</title>
      </Helmet>
      {children}
    </Box>
  );
});

export { Page };
