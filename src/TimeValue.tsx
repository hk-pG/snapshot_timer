export class TimeValue {
  constructor(
    public originMilliseconds: number = 0,
    public minutes: number = 0,
    public seconds: number = 0,
    public milliseconds: number = 0,
  ) {}

  public addOriginMilliseconds(addition: number): TimeValue {
    return this.setOriginMilliseconds(this.originMilliseconds + addition);
  }
  public setOriginMilliseconds(milliseconds: number): TimeValue {
    this.originMilliseconds = milliseconds;

    this.milliseconds = Math.floor((milliseconds / 10) % 100);

    // convert milliseconds to seconds
    this.seconds = Math.floor((milliseconds / 1000) % 60);

    // convert milliseconds to minutes
    this.minutes = Math.floor((milliseconds / 1000 / 60) % 60);

    return new TimeValue(
      this.originMilliseconds,
      this.minutes,
      this.seconds,
      this.milliseconds,
    );
  }

  public displayTime() {
    return (
      <div>
        <span>
          {
            //
            `0${this.minutes.toString.slice(-2)}`
          }
          :
        </span>
        <span>
          {
            //
            `'0'${this.seconds.toString().slice(-2)}`
          }
          :
        </span>
        <span>
          {
            //
            `'0'${this.milliseconds.toString().slice(-2)}`
          }
        </span>
      </div>
    );
  }
}
