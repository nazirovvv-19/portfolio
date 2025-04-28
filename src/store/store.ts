import { create } from 'zustand';
type Store = {
    darkMode: boolean;
    isOpenNavbar: boolean;
    toggleDarkMode: () => void;
  };
const useMyStore = create<Store>((set) => ({
  darkMode: false,
  isOpenNavbar:false,
  toggleDarkMode: () =>
    set((state) => ({ darkMode: !state.darkMode })),
}));

export default useMyStore;
