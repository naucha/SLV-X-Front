import axios from "axios";
import { IMobile } from "../types/types";

const url = `${import.meta.env.VITE_API_URL}`;

export const getMobiles = async (): Promise<IMobile[]> => {
  return await axios.get(`${url}api/mobiles`).then((response) => {
    return response.data;
  });
};

export const addMobile = async (mobile: any): Promise<void> => {
  try {
    const { data } = await axios.post(`${url}api/mobiles`, mobile);
  } catch (error) {
    console.log("not added");
  }
};
