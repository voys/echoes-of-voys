import { useMemo } from 'react';

const XP_THRESHOLDS = {
  1: { easy: 25, medium: 50, hard: 75, deadly: 100 },
  2: { easy: 50, medium: 100, hard: 150, deadly: 200 },
  3: { easy: 75, medium: 150, hard: 225, deadly: 400 },
  4: { easy: 125, medium: 250, hard: 375, deadly: 500 },
} as const;

const ENCOUNTER_MULTIPLIERS = [
  { max: 1, multiplier: 1 },
  { max: 2, multiplier: 1.5 },
  { max: 6, multiplier: 2 },
  { max: 10, multiplier: 2.5 },
  { max: 14, multiplier: 3 },
  { max: Infinity, multiplier: 4 },
] as const;

type Character = {
  level: number;
};

type Monster = {
  xp: number;
};

type DifficultyRating = 'Easy' | 'Medium' | 'Hard' | 'Deadly' | 'Overwhelming';

export function useEncounterCalculator(characters: Character[], monsters: Monster[]) {
  return useMemo(() => {
    const partyThresholds = characters.reduce(
      (acc, char) => {
        const levelThresholds = XP_THRESHOLDS[char.level as keyof typeof XP_THRESHOLDS];
        if (!levelThresholds) return acc;

        return {
          easy: acc.easy + levelThresholds.easy,
          medium: acc.medium + levelThresholds.medium,
          hard: acc.hard + levelThresholds.hard,
          deadly: acc.deadly + levelThresholds.deadly,
        };
      },
      { easy: 0, medium: 0, hard: 0, deadly: 0 },
    );

    const rawMonsterXP = monsters.reduce((sum, monster) => sum + monster.xp, 0);

    const multiplier = ENCOUNTER_MULTIPLIERS.find((m) => monsters.length <= m.max)?.multiplier ?? 4;
    const adjustedXP = rawMonsterXP * multiplier;

    let difficulty: DifficultyRating;
    if (adjustedXP < partyThresholds.easy) {
      difficulty = 'Easy';
    } else if (adjustedXP < partyThresholds.medium) {
      difficulty = 'Medium';
    } else if (adjustedXP < partyThresholds.hard) {
      difficulty = 'Hard';
    } else if (adjustedXP < partyThresholds.deadly) {
      difficulty = 'Deadly';
    } else {
      difficulty = 'Overwhelming';
    }

    return {
      partyThresholds,
      rawMonsterXP,
      adjustedXP,
      multiplier,
      difficulty,
    };
  }, [characters, monsters]);
}
