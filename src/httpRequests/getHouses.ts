import axios, { AxiosResponse } from "axios";
import { HousesObj } from "../Utils/Types/Types";

function getHouses(lang: string): Promise<AxiosResponse<HousesObj[]>> {
  return axios.get<HousesObj[]>(
    `https://potterapi-fedeperin.vercel.app/${lang}/houses`
  );
}

export default getHouses;
