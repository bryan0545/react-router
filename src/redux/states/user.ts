import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../models/user.model';
import { clearLocalStorage, persistLocalStorage } from '../../utilities/localStorage.utility';

export const emptyState: UserInfo = {
  id: 0,
  name: '',
  email: '',
  rol: '',
};

export const userKey = 'user';

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem(userKey) ? JSON.parse(localStorage.getItem(userKey) as string) : emptyState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserInfo>(userKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      persistLocalStorage<UserInfo>(userKey, { ...state, ...action.payload });
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      clearLocalStorage(userKey);
      return emptyState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
