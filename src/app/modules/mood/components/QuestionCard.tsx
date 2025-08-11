interface Question {
  text: string;
  options: string[];
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (option: string) => void;
}

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <div>
      <h3>{question.text}</h3>
      <div>
        {question.options.map((option: string) => (
          <div className="flex justify-center" key={option}>
            <button
              className="bg-spotimy-green-medium w-full m-2 p-2 rounded-2xl hover:bg-spotimy-green-light transition-colors"
              key={option}
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
