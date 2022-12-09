import axios from "axios";

import { IMobile, IMobileRequest, IMobileUpdate } from "../types/types";

const url: string = `${import.meta.env.VITE_API_URL}`;

export const getMobiles = async (): Promise<IMobile[]> => {
  return await axios.get(`${url}api/mobiles`).then((response) => {
    return response.data;
  });
};

export const addMobile = async (mobile: IMobileRequest): Promise<void> => {
  try {
    const { data } = await axios.post(`${url}api/mobiles`, mobile);
  } catch (error) {
    console.log("not added");
  }
};

export const getMobile = async (id: number): Promise<IMobile> => {
  return await axios.get(`${url}api/mobiles/${id}`).then((response) => {
    return response.data;
  });
};

export const deleteOne = async (id: number) => {
  try {
    const response = await axios.delete(`${url}api/mobiles/${id}`);
  } catch (error) {
    console.log("failed to delete");
  }
};

export const updateMobile = async (mobile: IMobileUpdate) => {
  const { id, brand, model } = mobile;
  try {
    await axios.put(`${url}api/mobiles/${id}`, {
      id,
      brand,
      model,
    });
  } catch (error) {
    console.log("failed to update");
  }
};

export const getMobileRatingsCount = async (id: number): Promise<any> => {
  return await axios.get(`${url}api/mobiles/rating/${id}`).then((response) => {
    return response.data;
  });
};
