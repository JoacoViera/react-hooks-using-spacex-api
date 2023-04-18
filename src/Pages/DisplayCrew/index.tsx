import ErrorPage from '../ErrorPage';
import Loader from '../Loader';
import useFetch from '../../hooks/useFetch';
import CrewMemberCard from '../../components/CrewMemberCard';

interface CrewMember {
  id: string;
  name: string;
  wikipedia: string;
  image: string;
}

const DisplayCrew = (): JSX.Element => {
  const { error, loading, data } = useFetch<CrewMember[]>(
    'https://api.spacexdata.com/v4/crew'
  );

  if (error != null) {
    return <ErrorPage />;
  }

  if (data == null || loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((member: CrewMember) => (
        <CrewMemberCard
          key={member.id}
          name={member.name}
          image={member.image}
          link={member.wikipedia}
        />
      ))}
    </div>
  );
};

export default DisplayCrew;
