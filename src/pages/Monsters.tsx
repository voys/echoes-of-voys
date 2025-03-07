import { useEffect, useState } from 'react';
import { getMonsters } from '../api/dndAPI';
import { Monster, MonsterResponse } from '../api/types/Monsters';
import { MonsterCard } from '../components/MonsterCard';

export const Monsters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      const monsters: MonsterResponse = await getMonsters();
      setMonsters(monsters.results);
    };
    fetchMonsters();
  }, []);

  return (
    <div className="mx-auto px-4 py-8 container">
      <h1 className="mb-6 font-bold text-3xl">Monster Library</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search monsters..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {monsters.map((monster) => (
          <MonsterCard key={monster.name} {...monster} />
        ))}
      </div>
    </div>
  );
};
