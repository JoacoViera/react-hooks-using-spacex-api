interface CardProps {
  name: string;
  description: string;
  image: string;
  link?: boolean;
}

const Card = ({
  name,
  description,
  image,
  link = false,
}: CardProps): JSX.Element => {
  return (
    <div className="w-[25%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={image}
          alt={`${name}-preview-image`}
        />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        {link ? (
          <a href={description} target="_blank" rel="noreferrer">
            <p className="mb-3 text-blue-700 font-sm dark:text-gray-400 truncate">
              {description}
            </p>
          </a>
        ) : (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        )}
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
