import { CompoundTimer } from './component/CompoundTimer';
import { Header } from './component/Header';
import { SimpleBottomNavigation } from './component/Pages';
import { Stopwatch } from './Test';

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <SimpleBottomNavigation />
    </>
  );
};

export { App };
