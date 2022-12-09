import { reactive } from "vue";
import {
  deleteOne,
  getMobiles,
  getMobileRatingsCount,
  updateMobile,
} from "../api/mobileService";
import { IMobileRequest, IMobileUpdate } from "../types/types";
import { addMobile } from "../api/mobileService";

type MobileStore = {
  mobileList: any[];
  ratesList: any[];
  showUpdate: boolean;
  get: () => Promise<void>;
  add: (mobile: IMobileRequest) => Promise<void>;
  delete: (id: number) => Promise<void>;
  update: (mobile: IMobileUpdate) => Promise<void>;
  getCountById: (id: number) => Promise<void>;
};

export const mobileStore: MobileStore = reactive({
  mobileList: [],
  ratesList: [],
  showUpdate: false,

  get: async () => {
    const apiMobiles = await getMobiles();
    mobileStore.mobileList = apiMobiles;

    let testMobile: any = await apiMobiles.map((mobile) =>
      mobileStore.getCountById(mobile.id)
    );
    mobileStore.ratesList = await Promise.all(testMobile);
  },
  add: async (mobile: IMobileRequest) => {
    await addMobile(mobile);
    await mobileStore.get();
  },
  delete: async (id: number) => {
    await deleteOne(id);
    await mobileStore.get();
  },
  update: async (mobile) => {
    await updateMobile(mobile);
    await mobileStore.get();
  },
  getCountById: async (id: number) => {
    const apiRatingCount = await getMobileRatingsCount(id);
    return apiRatingCount[0].length;
  },
});
