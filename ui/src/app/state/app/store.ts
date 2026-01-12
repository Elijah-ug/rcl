import { configureStore } from "@reduxjs/toolkit";
import { adminAuthQuery } from "../features/auth/adminAuthQuery";
import { teamQuery } from "../features/auth/teamQuery";
export const store = configureStore({
  reducer: {
    [adminAuthQuery.reducerPath]: adminAuthQuery.reducer,
    [teamQuery.reducerPath]: teamQuery.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(adminAuthQuery.middleware, teamQuery.middleware),
});
