import { atom, useRecoilState } from 'recoil';
import { Stopwatch } from './StopWatch';

type TimeRecord = {
  recordedAt: Date;
  recordMilliseconds: number;
};

class TimeRecords {
  startDate: Date;
  finishDate: Date;
  records: TimeRecord[] = [];

  constructor(startDate: Date, finishDate: Date, records: TimeRecord[]) {
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.records = records;
  }

  startRecord() {
    this.startDate = new Date();
    return this;
  }

  addRecord(recordMilliseconds: number) {
    this.records.push({
      recordedAt: new Date(),
      recordMilliseconds: recordMilliseconds,
    });

    return this;
  }

  finishRecord() {
    this.finishDate = new Date();
    return this;
  }
}

const timeRecordsState = atom<TimeRecords[]>({
  key: 'timeRecords',
  default: [],
});

function TimerSampleApp() {
  return (
    <div>
      <Stopwatch />
    </div>
  );
}

export { TimerSampleApp, TimeRecords, timeRecordsState };
