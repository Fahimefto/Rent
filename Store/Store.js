import create from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  bears: false,
  increasePopulation: () => set((state) => ({ bears: true })),
  removeAllBears: () => set({ bears: false }),
});
store = persist(store, {
  name: "storage",
  getStorage: () => sessionStorage,
});
const useBearStore = create(store);

export default useBearStore;
