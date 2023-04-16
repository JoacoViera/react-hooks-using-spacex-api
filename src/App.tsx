import './App.css';
import Card from './components/Card';
import useFetch from './hooks/useFetch';
import ErrorPage from './Pages/ErrorPage';

import Loader from './Pages/Loader';

interface Rocket {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
}

const App = (): JSX.Element => {
  const { error, loading, data } = useFetch(
    'https://api.spacexdata.com/v4/rockets?limit=10&offset=10'
  );

  console.log('request', data);

  if (loading === true) {
    return <Loader />;
  }

  if (error != null) {
    return <ErrorPage />;
  }

  return (
    <div className="App flex flex-wrap justify-center">
      {data.map((rocket: Rocket) => (
        <Card
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket?.flickr_images[0]}
        />
      ))}
    </div>
  );
};

export default App;
