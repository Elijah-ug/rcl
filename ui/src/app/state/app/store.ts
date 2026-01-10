import { configureStore } from "@reduxjs/toolkit";
import { adminAuthQuery } from "../features/auth/adminAuthQuery";
export const store = configureStore({
  reducer: {
    [adminAuthQuery.reducerPath]: adminAuthQuery.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(adminAuthQuery.middleware),
});
