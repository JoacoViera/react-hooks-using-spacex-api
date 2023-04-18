import { format } from 'date-fns';

interface Event {
  name: string;
  date: string;
}

const EventCard = ({ id, name, date }: Event): JSX.Element => {
  return (
    <div className="w-[20%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 ">
      <div className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
        <h5 className="mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
          {name}
        </h5>

        <p className="mb-3 text-black text-base dark:text-gray-400 truncate">
          {format(new Date(date), 'Pp')}
        </p>

        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            alert('In progress');
          }}
        >
          Add to calendar
        </button>
      </div>
    </div>
  );
};

export default EventCard;
