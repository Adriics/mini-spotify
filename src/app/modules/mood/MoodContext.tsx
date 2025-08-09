export interface MoodConfig {
  moodEmotion: string | null;
  moodScene: string | null;
  moodTime: string | null;
  moodSound: string | null;
  moodEnergy: number | null;
}

export interface MoodContextType {
  moodConfig: MoodConfig;
  updateMood: (key: keyof MoodConfig, value: unknown) => void;
  resetMood: () => void;
}
