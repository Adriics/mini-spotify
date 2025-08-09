import { useContext } from "react";
import { MoodContext } from "../context/MoodContextDefinition";

export const useMood = () => {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error("useMood debe usarse dentro de un MoodProvider");
  }
  return context;
};
