import { Knight } from "./knight";

export interface iCharacter {
  id: number;
  name: string;
  family: string;
  age: number;
  category: "king" | "knight" | "counselor" | "squire";
  message: string;
  kingdomYears?: number;
  weapon?: string;
  skill?: number;
  submission?: number;
  lord?: Knight;
  chief?: Character;
}

export class Character {
  static series = "GoT";
  static generateId(): number {
    return Math.ceil(Math.random() * 100_000);
  }
  lifeState: boolean;
  message: string;
  id: number;
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public category: "king" | "knight" | "counselor" | "squire"
  ) {
    this.id = Character.generateId();
    this.lifeState = true;
    this.message = "";
  }
}
