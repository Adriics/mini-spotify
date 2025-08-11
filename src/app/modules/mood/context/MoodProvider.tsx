import React, { useState, useEffect } from "react";
import { MoodContext, type MoodConfig } from "./MoodContextDefinition";

export const MoodProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [moodConfig, setMoodConfig] = useState<MoodConfig>(() => {
    const stored = localStorage.getItem("moodConfig");
    return stored
      ? JSON.parse(stored)
      : {
          moodEmotion: null,
          moodScene: null,
          moodTime: null,
          moodSound: null,
          moodEnergy: null,
        };
  });

  useEffect(() => {
    localStorage.setItem("moodConfig", JSON.stringify(moodConfig));
    console.log("MoodConfig updated:", moodConfig);
  }, [moodConfig]);

  const updateMood = (key: keyof MoodConfig, value: unknown) => {
    setMoodConfig((prev) => ({ ...prev, [key]: value }));
  };

  const resetMood = () => {
    setMoodConfig({
      moodEmotion: null,
      moodScene: null,
      moodTime: null,
      moodSound: null,
      moodEnergy: null,
    });
  };

  return (
    <MoodContext.Provider value={{ moodConfig, updateMood, resetMood }}>
      {children}
    </MoodContext.Provider>
  );
};
