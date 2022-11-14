import {
  Card,
  css,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { test } from './StopWatch';

import './css/Record.module.css';
import { Timer, TimerTwoTone } from '@mui/icons-material';

const listItem = css`
  padding: 20px;
  margin: 10px;
  text-align: center;
  font-size: 2em;
`;

const dateTitle = css({
  fontWeight: 'bold',
});

const Record = (): JSX.Element => {
  return (
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
          <>
            <ListItemButton css={listItem}>
              {!!_millisecond ? (
                <div>
                  <ListItemText>
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
                        ('0' + Math.floor((_millisecond / 1000) % 60)).slice(-2)
                      }
                      :
                    </span>
                    <span>
                      {
                        //
                        ('0' + ((_millisecond / 10) % 100)).slice(-2)
                      }
                    </span>
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
          </>
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
  );
};
export { Record };
