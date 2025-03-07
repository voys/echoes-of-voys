import { Link } from 'react-router-dom';

export const SavedEncounters = () => {
  return (
    <div className="mx-auto px-4 py-8 container">
      <h1 className="mb-6 font-bold text-3xl">Saved Encounters</h1>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="mb-2 font-semibold text-xl">Sample Encounter</h2>
          <p className="mb-4 text-gray-600">Difficulty: Medium</p>
          <div className="mb-4">
            <h3 className="font-medium text-gray-700 text-sm">Party members:</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Wizard (level 2)</li>
              <li>Barbarian (level 2)</li>
              <li>Bard (level 1)</li>
              <li>Ranger (level 2)</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-medium text-gray-700 text-sm">Monsters:</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>2x Goblin</li>
              <li>1x Bugbear</li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Total XP: 700</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Link to="/encounters/create">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-medium text-white">
            Create Encounter
          </button>
        </Link>
      </div>
    </div>
  );
};
