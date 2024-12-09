import axios, { AxiosResponse } from "axios";
import { CharactersObj } from "../Utils/Types/Types";

function getCharacters(lang: string): Promise<AxiosResponse<CharactersObj[]>> {
  return axios.get<CharactersObj[]>(
    `https://potterapi-fedeperin.vercel.app/${lang}/characters`
  );
}

export default getCharacters;
