import { format } from 'date-fns';

interface Event {
  name: string;
  date: string;
}

const EventCard = ({ name, date }: Event): JSX.Element => {
  return (
    <div className="w-[20%] flex bg-stone-700 hover:bg-stone-900 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 m-5">
      <div className="m-2 ml-2 flex flex-col w-full justify-start mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
        <p className="mb-2 text-white text-left text-sm truncate">
          {format(new Date(date), 'yyyy-MM-dd')}
        </p>

        <h5 className="mt-2 mb-2 text-base self-center font-bold justify-center text-blue-200 truncate">
          {name}
        </h5>

        <p className="mb-4 text-white text-xs text-center truncate">
          {format(new Date(date), 'ppp')}
        </p>

        <div>
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
    </div>
  );
};

export default EventCard;
