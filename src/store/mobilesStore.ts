import { reactive } from "vue";
import { deleteOne, getMobiles, updateMobile } from "../api/mobileService";
import { IMobile, IMobileRequest, IMobileUpdate } from "../types/types";
import { addMobile } from "../api/mobileService";

type MobileStore = {
  mobileList: IMobile[];
  showUpdate: boolean;
  get: () => Promise<void>;
  add: (mobile: IMobileRequest) => Promise<void>;
  delete: (id: number) => Promise<void>;
  update: (mobile: IMobileUpdate) => Promise<void>;
};

export const mobileStore: MobileStore = reactive({
  mobileList: [],
  showUpdate: false,
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
  update: async (mobile) => {
    updateMobile(mobile);
    await mobileStore.get();
  },
});
