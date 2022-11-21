import { reactive } from "vue";
import { deleteOne, getMobiles } from "../api/mobileService";
import { IMobile, IMobileRequest } from "../types/types";
import { addMobile } from "../api/mobileService";

type MobileStore = {
  mobileList: IMobile[];
  get: () => Promise<void>;
  add: (mobile: IMobileRequest) => Promise<void>;
  delete: (id: number) => Promise<void>;
};

export const mobileStore: MobileStore = reactive({
  mobileList: [],
  get: async () => {
    const apiMobiles = await getMobiles();
    mobileStore.mobileList = apiMobiles;
  },
  add: async (mobile: IMobileRequest) => {
    addMobile(mobile);
    mobileStore.get();
  },
  delete: async (id: number) => {
    deleteOne(id);

    mobileStore.get();
  },
});
