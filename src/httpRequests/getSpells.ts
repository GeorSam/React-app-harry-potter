import { default as axios, AxiosResponse } from "axios";
import { SpellsObj } from "../Utils/Types/Types";

function getSpells(lang: string): Promise<AxiosResponse<SpellsObj[]>> {
  return axios.get<SpellsObj[]>(
    `https://potterapi-fedeperin.vercel.app/${lang}/spells`
  );
}

export default getSpells;
