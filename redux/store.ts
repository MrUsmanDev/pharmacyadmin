import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import { persistReducer, persistStore } from "redux-persist";
import SpecialitySlice from './features/SpecialitySlice'
import { Reducer } from 'redux';
import storage from './storage';
import { SpecialityInterface, UsersInterface } from '@/utils/types/ReduxTypes';
import { UserSlice } from './features/LoginSlice';

export interface RootState {
  Speciality: SpecialityInterface;
  Users: UsersInterface
   
}

const rootReducer: Reducer<RootState> = combineReducers({
  Speciality: SpecialitySlice,
  Users : UserSlice.reducer
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== "production",
  });
  export const persistor = persistStore(store);

  // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch