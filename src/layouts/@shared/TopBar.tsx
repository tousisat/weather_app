import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

import MontrealPage from 'src/navigation/public.path/montreal.page';
import TorontoPage from 'src/navigation/public.path/toronto.page';
import OttawaPage from 'src/navigation/public.path/ottawa.page';

import type { FC } from 'react';
import { Theme } from 'src/theme';

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
  activeMenu: {
    color: theme.palette.primary.main
  }
}));

const TopBar: FC<IProps> = () => {
  const classes = useStyles();

  const menu = [
    {
      title: 'Montreal',
      link: MontrealPage.path()
    },
    {
      title: 'Toronto',
      link: TorontoPage.path()
    },
    {
      title: 'Ottawa',
      link: OttawaPage.path()
    }
  ];
  return (
    <Box display="flex">
      {menu.map((m) => (
        <Box key={m.link} p={2}>
          <Button
            sx={{
              color: (theme) => theme.palette.text.secondary,
              padding: '10px 8px',
              justifyContent: 'flex-start',
              textTransform: 'none',
              letterSpacing: 0,
              width: '100%',
              fontWeight: (theme) => theme.typography.fontWeightLight
            }}
            component={NavLink}
            activeClassName={classes.activeMenu}
            to={m.link}
          >
            <Typography variant="h2">{m.title}</Typography>
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export { TopBar };
