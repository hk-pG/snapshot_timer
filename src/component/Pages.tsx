import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import { Timer } from '@mui/icons-material';
import { Timer as TimerField } from './Timer';
import { Record } from './Record';

const SimpleBottomNavigation = () => {
  const [pageIndex, setValue] = React.useState(0);

  const pages = [
    // Timer and record
    <TimerField />,
    <Record />,
  ];

  return (
    <>
      {pages[pageIndex]}
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
          showLabels
          value={pageIndex}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="測定" icon={<Timer />} />
          <BottomNavigationAction label="記録" icon={<RestoreIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
};

export { SimpleBottomNavigation };
