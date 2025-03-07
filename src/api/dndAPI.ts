export const getMonsters = async () => {
  const response = await fetch('https://api.open5e.com/monsters/');
  const data = await response.json();
  return data;
};
