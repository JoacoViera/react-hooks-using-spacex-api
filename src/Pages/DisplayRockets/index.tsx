import ErrorPage from '../ErrorPage';
import Loader from '../Loader';
import useFetch from '../../hooks/useFetch';
import Card from '../../components/Card';

interface Rocket {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
}

const DisplayRockets = (): JSX.Element => {
  const { error, loading, data } = useFetch<Rocket[]>(
    'https://api.spacexdata.com/v4/rockets'
  );

  if (error != null) {
    return <ErrorPage />;
  }

  if (data == null || loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-wrap justify-center">
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

export default DisplayRockets;
