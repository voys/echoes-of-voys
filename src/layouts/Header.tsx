import { Link } from 'react-router-dom';
import d20VoysLogo from '../assets/d20.svg';

export const Header = () => {
  return (
    <header className="bg-red-900 shadow-lg border-gray-700 border-b px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={d20VoysLogo} alt="D20 Logo" className="mr-2 w-10 h-10" />
            <span className="font-bold text-white text-2xl">Echoes of Voys</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
