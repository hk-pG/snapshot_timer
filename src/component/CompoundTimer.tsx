import Timer from 'react-compound-timer';

const CompoundTimer = (): JSX.Element => {
  return (
    <>
      <Timer
        startImmediately={false}
        initialTime={60 * 1000}
        direction="forward"
        timeToUpdate={10}
        checkpoints={[
          {
            time: 0,
            callback: () => alert('countdown finished'),
          },
        ]}
      >
        <div>
          <div>
            <Timer.Seconds />
          </div>
          <div>
            <Timer.Milliseconds />
          </div>
        </div>
      </Timer>
    </>
  );
};

export { CompoundTimer };
