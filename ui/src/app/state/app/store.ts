import { configureStore } from "@reduxjs/toolkit";
import { adminAuthQuery } from "../features/auth/adminAuthQuery";
import { teamQuery } from "../features/teams/teamQuery";
import { matchQuery } from "../features/matches/matchesQuery";
import { newsQuery } from "../features/news/newsQuery";
import { tableQuery } from "../features/table/tableQuery";
export const store = configureStore({
  reducer: {
    [adminAuthQuery.reducerPath]: adminAuthQuery.reducer,
    [teamQuery.reducerPath]: teamQuery.reducer,
    [matchQuery.reducerPath]: matchQuery.reducer,
    [newsQuery.reducerPath]: newsQuery.reducer,
    [tableQuery.reducerPath]: tableQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      adminAuthQuery.middleware,
      teamQuery.middleware,
      matchQuery.middleware,
      newsQuery.middleware,
      tableQuery.middleware,
    ),
});
