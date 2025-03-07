import { Monster } from '../api/types/Monsters';

export const MonsterCard = ({ name, challenge_rating, type }: Monster) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="mb-2 font-semibold text-xl">{name}</h2>
      <p className="mb-4 text-gray-600">Challenge Rating: {challenge_rating}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-sm">Type: {type}</span>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white">View Details</button>
      </div>
    </div>
  );
};
