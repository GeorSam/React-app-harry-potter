export type SpellsObj = {
  spell: string;
  use: string;
  index: number;
};

export type BooksObj = {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
  index: number;
};

export type CharactersObj = {
  fullName: string;
  nickname: string;
  hogwartsHouse: string;
  interpretedBy: string;
  children: string[];
  image: string;
  birthdate: string;
  index: number;
};

export type HousesObj = {
  house: string;
  emoji: string;
  founder: string;
  colors: string[];
  animal: string;
  index: number;
};
