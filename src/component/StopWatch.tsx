/** @jsxImportSource @emotion/react */
import { Pause, PlayArrow, RestartAlt, Save, Stop } from '@mui/icons-material';
import { Alert, Button, Card, Fab, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { css, keyframes } from '@emotion/react';
import './TimerSample.css';

const timerContainer = css`
  text-align: center;
`;

const timeField = css`
  margin: 60px;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  font-weight: 900;
  display: flex;
  justify-content: space-evenly;
`;

const buttonContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const buttonSpace = css`
  margin: 5px;
`;

export const Stopwatch = (): JSX.Element => {
  const [timeValue, setTimeValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeValue((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const reset = () => setTimeValue((_) => 0);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div css={timerContainer}>
        <Card css={timeField} variant="elevation">
          <div>
            <span>
              {
                //
                ('0' + Math.floor((timeValue / 1000 / 60) % 60)).slice(-2)
              }
              :
            </span>
            <span>
              {
                //
                ('0' + Math.floor((timeValue / 1000) % 60)).slice(-2)
              }
              :
            </span>
            <span>
              {
                //
                ('0' + ((timeValue / 10) % 100)).slice(-2)
              }
            </span>
          </div>

          <Button
            //
            css={buttonSpace}
            variant="outlined"
            onClick={() => {
              setIsRunning((_) => false);
              reset();
            }}
          >
            <RestartAlt />
          </Button>
        </Card>
      </div>
      <div css={buttonContainer}>
        <Button
          //
          variant="contained"
          color="primary"
          onClick={() => {
            handleClick();
            if (!isRunning) {
              // タイマー開始ボタンも兼ねている
              setIsRunning((_) => true);
            }
          }}
          css={css({
            lineHeight: '2em',
            fontSize: '2em',
            margin: '100px 20px 0 20px',
            padding: '50px',
            borderRadius: '30px',
          })}
        >
          記録する
        </Button>
        <Snackbar
          //
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
        >
          <Alert severity="success">記録しました</Alert>
        </Snackbar>
      </div>
    </>
  );
};
