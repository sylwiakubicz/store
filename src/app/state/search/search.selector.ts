import { createSelector } from "@ngrx/store"
import { AppState } from "../app.state"

export const selectSearchState = (state: AppState) => state.search 

export const selectIsSearchShow = createSelector(
    selectSearchState,
    (state) => state.isSearchShow
)