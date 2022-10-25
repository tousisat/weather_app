import { ThemeProvider } from '@mui/material';
import { useSettings } from 'src/context/useSettings';
import { HashRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { createTheme } from 'src/theme';
import navigation from 'src/navigation';

import GlobalStyles from 'src/components/GlobalStyles';

import type { FC } from 'react';

const App: FC = () => {
  const { settings } = useSettings();

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider dense maxSnack={3}>
        <HashRouter>
          <GlobalStyles />
          {navigation}
        </HashRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
