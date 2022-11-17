import axios from "axios";
import { IMobile } from "../types/types";

export const getMobiles = async (): Promise<IMobile[]> => {
  let url = `${import.meta.env.VITE_API_URL}`;
  return await axios.get(`${url}api/mobiles`).then((response) => {
    return response.data;
  });
};
