import { Card, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { createContext } from 'react';
import { number } from 'yargs';

type context = {
  result: number[];
  tookAt: Date;
};

const initialContext: context = {
  result: [],
  tookAt: new Date(),
};

const DataContext = createContext(initialContext);

const Timer = (): JSX.Element => {
  return <></>;
};
export { Timer, DataContext };
