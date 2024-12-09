import axios, { AxiosResponse } from "axios";
import { BooksObj } from "../Utils/Types/Types";

function getBooks(lang: string): Promise<AxiosResponse<BooksObj[]>> {
  return axios.get<BooksObj[]>(
    `https://potterapi-fedeperin.vercel.app/${lang}/books`
  );
}
export default getBooks;
