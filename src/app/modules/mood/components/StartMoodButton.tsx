import React from "react";
import { Button } from "../../../../components/Button";

interface StartMoodButtonProps {
  onStart: () => void;
}

export const StartMoodButton: React.FC<StartMoodButtonProps> = ({
  onStart,
}) => {
  return (
    <Button variant="primary" onClick={onStart}>
      🎯 Empezar a crear mi Mood
    </Button>
  );
};
