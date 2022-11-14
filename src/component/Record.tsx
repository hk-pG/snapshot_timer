import {
  Alert,
  Card,
  css,
  Divider,
  Fab,
  List,
  ListItemButton,
  ListItemText,
  Snackbar,
} from '@mui/material';
import { test } from './StopWatch';

import './css/Record.module.css';
import { Delete, TimerTwoTone } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const listItem = css`
  padding: 20px;
  margin: 10px;
  text-align: center;
  font-size: 2em;
`;

const dateTitle = css({
  fontWeight: 'bold',
  fontSize: '1.2rem',
});

const Record = (): JSX.Element => {
  const [_, render] = useState(0);

  const [open, setOpen] = useState(false);

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
      <List component="nav">
        {test.map((record, i) => {
          const { millisecond, editAt } = record;
          const _millisecond = millisecond;

          const {
            year,
            month,
            day,
            date,
            hours,
            minutes,
            seconds,
            milliseconds,
          } = editAt;
          const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

          const dateString = `${year}/${month + 1}/${day} (${
            dayOfWeek[date]
          }) ${hours}:${minutes}:${seconds}:${milliseconds}`;

          const shortDateString = `${hours}:${minutes}:${seconds}${milliseconds}`;

          return (
            <div key={i}>
              <ListItemButton css={listItem}>
                {!!_millisecond ? (
                  <div>
                    <ListItemText>
                      <div>
                        <span>
                          {
                            //
                            (
                              '0' + Math.floor((_millisecond / 1000 / 60) % 60)
                            ).slice(-2)
                          }
                          :
                        </span>
                        <span>
                          {
                            //
                            (
                              '0' + Math.floor((_millisecond / 1000) % 60)
                            ).slice(-2)
                          }
                          :
                        </span>
                        <span>
                          {
                            //
                            ('0' + ((_millisecond / 10) % 100)).slice(-2)
                          }
                        </span>
                      </div>
                    </ListItemText>
                  </div>
                ) : (
                  <>
                    <TimerTwoTone />
                    <h2 css={dateTitle}>{dateString}</h2>
                  </>
                )}
              </ListItemButton>
              <Divider />
            </div>
          );
        })}

        <Card
          style={{
            opacity: 0,
          }}
          css={listItem}
        >
          ...
        </Card>
      </List>
      <Fab
        onClick={() => {
          while (test.length > 0) {
            test.pop();
          }
          handleClick();
          render(_ + 1);
        }}
        css={{
          position: 'fixed',
          bottom: '10%',
          right: '10%',
        }}
      >
        <Delete />
      </Fab>
      <Snackbar
        //
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert severity="success">記録を削除しました</Alert>
      </Snackbar>
    </>
  );
};
export { Record };
