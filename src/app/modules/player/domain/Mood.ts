export type Mood = "focus" | "relax" | "party" | "chill"

export class MoodVO {
  private constructor(public readonly value: Mood) {}

  static readonly allowed: readonly Mood[] = [
    "focus",
    "relax",
    "party",
    "chill",
  ]

  static create(value: string): MoodVO {
    if (!(this.allowed as readonly string[]).includes(value)) {
      throw new Error(`Mood inválido ${value}`)
    }

    return new MoodVO(value as Mood)
  }
}
