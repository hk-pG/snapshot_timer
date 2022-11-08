import { useContext } from 'react';
import { DataContext } from './Timer';

const Record = (): JSX.Element => {
  const dataContext = useContext(DataContext);
  console.table(dataContext);

  return (
    <>
      <div>Record Component</div>
    </>
  );
};
export { Record };
