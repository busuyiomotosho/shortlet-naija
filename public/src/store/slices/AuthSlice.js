export const createAuthSlice = (set, get) => ({
  isAuthModalOpen: false,
  // Check if user is logged in
  isLoggedIn: false,
  userInfo: null,
  setAuthModal: () => {
    set({ isAuthModalOpen: !get().isAuthModalOpen });
  },
  setIsLoggedIn: (status) => {
    set({ isLoggedIn: status });
  },
  setUserInfo: (userInfo) => {
    set({ userInfo });
  },
});
