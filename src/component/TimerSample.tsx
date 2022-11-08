/** @jsxImportSource @emotion/react */

import { PlayArrow, RestartAlt, Save, Stop } from '@mui/icons-material';
import { Button, Card, Fab, Grid, Typography } from '@mui/material';
import Timer, { TimerStateValues } from 'react-compound-timer';
import React, { useState } from 'react';

import { css, keyframes } from '@emotion/react';
import './TimerSample.css';

const timerContainer = css`
  text-align: center;
`;

const time = css`
  margin: 60px;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  font-weight: 900;
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
`;

const buttonSpace = css`
  margin: 5px;
`;

const MyStopwatch = (): JSX.Element => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <>
      <Timer
        startImmediately={false}
        initialTime={0}
        direction="forward"
        timeToUpdate={10}
        checkpoints={[
          {
            time: 0,
            callback: () => {},
          },
        ]}
      >
        {({
          //
          start,
          resume,
          pause,
          stop,
          reset,
          timerState,
        }: {
          start: () => void;
          resume: () => void;
          pause: () => void;
          stop: () => void;
          reset: () => void;
          timerState: TimerStateValues;
        }) => {
          return (
            <>
              <div css={timerContainer}>
                <Card css={time} variant="outlined">
                  <Timer.Hours
                    formatValue={(value) => {
                      return value.toString().padStart(2, '0');
                    }}
                  />
                  :
                  <Timer.Minutes
                    formatValue={(value) => {
                      return value.toString().padStart(2, '0');
                    }}
                  />
                  :
                  <Timer.Seconds
                    formatValue={(value) => {
                      return value.toString().padStart(2, '0');
                    }}
                  />
                  :
                  <Timer.Milliseconds
                    formatValue={(value) => {
                      return value.toString().padStart(3, '0');
                    }}
                  />
                </Card>
              </div>
              <div css={buttonContainer}>
                {!isRunning ? (
                  <Fab
                    css={buttonSpace}
                    variant="circular"
                    color="primary"
                    onClick={() => {
                      resume();
                      setIsRunning((running) => !running);
                    }}
                  >
                    <PlayArrow />
                  </Fab>
                ) : (
                  <Fab
                    css={buttonSpace}
                    variant="circular"
                    color="secondary"
                    onClick={() => {
                      pause();
                      setIsRunning((notRunning) => !notRunning);
                    }}
                  >
                    <Stop />
                  </Fab>
                )}
                <Fab
                  //
                  css={buttonSpace}
                  variant="circular"
                  onClick={reset}
                >
                  <RestartAlt />
                </Fab>
              </div>
            </>
          );
        }}
      </Timer>
    </>
  );
};

export default function TimerSampleApp() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}
