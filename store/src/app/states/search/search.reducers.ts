import { createReducer, on } from "@ngrx/store"
import { toggleSearchInput } from "./search.actions"

export interface SearchState {
    isSearchShow : boolean
}

export const initialSearchState : SearchState = {
    isSearchShow: false
}

export const SearchReducer = createReducer(
    initialSearchState,
    on(toggleSearchInput, state => ({...state, isSearchShow: !state.isSearchShow}))
)