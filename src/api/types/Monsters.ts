export type Monster = {
  name: string;
  challenge_rating: number;
  type: string;
};

export type MonsterResponse = {
  count: number;
  next: string;
  previous: string;
  results: Monster[];
};
