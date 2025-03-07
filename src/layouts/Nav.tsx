import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="bg-gray-800 w-64 min-h-screen">
      <div className="flex flex-col space-y-2 p-4">
        <Link to="/parties" className="hover:bg-gray-700 px-3 py-2 rounded-md text-gray-300 hover:text-white text-lg">
          Parties
        </Link>
        <Link to="/monsters" className="hover:bg-gray-700 px-3 py-2 rounded-md text-gray-300 hover:text-white text-lg">
          Monsters
        </Link>
        <Link
          to="/encounters"
          className="hover:bg-gray-700 px-3 py-2 rounded-md text-gray-300 hover:text-white text-lg"
        >
          Encounters
        </Link>
      </div>
    </nav>
  );
};
