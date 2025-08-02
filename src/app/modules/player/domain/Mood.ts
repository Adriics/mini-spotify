export type Mood = "focus" | "relax" | "party" | "chill";

export class MoodVO {
  private constructor(public readonly value: Mood) {}

  static allowed: Mood[] = ["focus", "relax", "party", "chill"];

  static create(value: string): MoodVO {
    if (!this.allowed.includes(value as Mood)) {
      throw new Error(`Mood inválido ${value}`);
    }

    return new MoodVO(value as Mood);
  }
}
