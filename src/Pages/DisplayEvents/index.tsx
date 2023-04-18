import ErrorPage from '../ErrorPage';
import Loader from '../Loader';
import useFetch from '../../hooks/useFetch';

import EventCard from '../../components/EventCard';

interface Event {
  id: string;
  name: string;
  date_local: string;
  details: string;
  image: string;
}

const DisplayEvents = (): JSX.Element => {
  const { error, loading, data } = useFetch<Event[]>(
    'https://api.spacexdata.com/v4/launches/upcoming'
  );

  if (error != null) {
    return <ErrorPage />;
  }

  if (data == null || loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-wrap justify-center content-center">
      {data.map((event: Event) => (
        <EventCard key={event.id} date={event.date_local} name={event.name} />
      ))}
    </div>
  );
};

export default DisplayEvents;
