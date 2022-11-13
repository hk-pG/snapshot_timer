import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import { Timer } from '@mui/icons-material';
import { Record } from './Record';
import { TimerSampleApp } from './TimerSample';
import './css/Pages.module.css';

const SimpleBottomNavigation = () => {
  const [pageIndex, setValue] = React.useState(0);

  const pages = [
    // Timer and record
    <TimerSampleApp />,
    <Record />,
  ];

  return (
    <main>
      <div>{pages[pageIndex]}</div>
      <Box
        sx={{
          //
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          marginTop: '10px',
        }}
      >
        <BottomNavigation
          showLabels
          value={pageIndex}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="測定" icon={<Timer />} />
          <BottomNavigationAction label="履歴" icon={<RestoreIcon />} />
        </BottomNavigation>
      </Box>
    </main>
  );
};

export { SimpleBottomNavigation };
