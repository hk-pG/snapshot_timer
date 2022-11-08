import { CompoundTimer } from './component/CompoundTimer';
import { Header } from './component/Header';
import { SimpleBottomNavigation } from './component/Pages';
import TimerSampleApp from './component/TimerSample';

const App = () => {
  return (
    <>
      <Header />
      <SimpleBottomNavigation />
      <TimerSampleApp />
    </>
  );
};

export { App };
