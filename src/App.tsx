import './App.css';
import useFetch from './hooks/useFetch';
import ErrorPage from './Pages/ErrorPage';

import Loader from './Pages/Loader';

const App = (): JSX.Element => {
  const { error, loading, data } = useFetch(
    'https://api.spacexdata.com/v4/rockets'
  );

  console.log('request', { data, error, loading });

  if (loading === true) {
    return <Loader />;
  }

  if (error != null) {
    return <ErrorPage />;
  }

  return (
    <div className="App">
      <h1>Hello Word</h1>
    </div>
  );
};

export default App;
