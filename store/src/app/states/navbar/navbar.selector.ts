import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectNavbarState = (state: AppState) => state.navbar

export const selectIsSidebarNavbarShow = createSelector (
    selectNavbarState,
    (state) => state.isSidebarNavbarShow
)