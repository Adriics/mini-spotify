import { useState } from "react"
import { QuestionCard } from "../../app/modules/mood/components/QuestionCard"
import { useMood } from "../../app/modules/mood/hooks/useMood"

export function QuestionPanel() {
  const { updateMood } = useMood()

  const questions = [
    {
      id: 1,
      text: "¿Donde estas ahora?",
      options: [
        "En casa",
        "En trabajo",
        "En la calle",
        "En el gimnasio",
        "En el coche",
      ],
    },
    {
      id: 2,
      text: "¿Como te sientes?",
      options: ["Felix", "Triste", "Enfadado", "Cansado", "Motivado"],
    },
    {
      id: 3,
      text: "Que quieres conseguir con la música?",
      options: [
        "Relajarme",
        "Motivarme",
        "Concentrarme",
        "Divertirme",
        "Recordar momentos",
      ],
    },
    {
      id: 4,
      text: "Prefieres algo nuevo o conocido?",
      options: ["Nuevo", "Conocido", "Ambos"],
    },
  ]

  const [current, setCurrent] = useState(0)

  const handleAnswer = (answer: string) => {
    setCurrent((prev) => prev + 1)
    if (current === 0) updateMood("moodEmotion", answer)
    if (current === 1) updateMood("moodScene", answer)
    if (current === 2) updateMood("moodTime", answer)
    if (current === 3) updateMood("moodSound", answer)
    if (current === 4) updateMood("moodEnergy", answer)
    console.log(`Respuesta a la pregunta ${questions[current].id}: ${answer}`)
  }

  return (
    <div className="p-4">
      {current < questions.length ? (
        <QuestionCard
          key={questions[current].id}
          question={questions[current]}
          onAnswer={handleAnswer}
        />
      ) : (
        <p className="text-xl text-spotimy-gray-light tracking-tighter font-spotimy">
          Has terminado el cuestionario
        </p>
      )}
    </div>
  )
}
