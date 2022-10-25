import _ from 'lodash';
import { colors, responsiveFontSizes, createTheme as createMuiTheme, ThemeOptions } from '@mui/material';
import type { Theme as MuiTheme } from '@mui/material';
import type { Palette as MuiPalette, TypeBackground as MuiTypeBackground } from '@mui/material/styles/createPalette';
import { softShadows } from './shadows';
import typography from './typography';
import { Direction, ThemeName } from 'src/@types/theme';

interface TypeBackground extends MuiTypeBackground {
  dark: string;
}

interface Palette extends MuiPalette {
  background: TypeBackground;
}

export interface Theme extends MuiTheme {
  name: ThemeName;
  palette: Palette;
}

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  theme?: ThemeName;
}

const baseOptions: ThemeOptions = {
  direction: 'ltr',
  typography
};

const themesOptions: ThemeOptions[] = [
  {
    palette: {
      background: {
        default: colors.common.white,
        paper: '#EEF6FB'
      },
      primary: {
        main: '#5FB0E8'
      },
      secondary: {
        main: '#0b4b78'
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
      }
    },
    shadows: softShadows
  }
];

export const createTheme = (config: ThemeConfig = {}): Theme => {
  let themeOptions = themesOptions[0];

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(_.merge({}, baseOptions, themeOptions, { direction: config.direction }));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme as Theme;
};
