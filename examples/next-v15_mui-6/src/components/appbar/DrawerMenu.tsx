'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const DrawerContentClient = dynamic(() => import('@/components/drawer'), { ssr: false });

const DrawerMenu = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const isPhone = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  /**
   * Add icons for github repo and docs link
   */
  return (
    <>
      {isPhone && (
        <>
          <IconButton aria-label="Menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            slotProps={{
              paper: {
                sx: { width: '70vw' }
              }
            }}
          >
            <DrawerContentClient />
          </Drawer>
        </>
      )}
    </>
  );
};

export default DrawerMenu;
