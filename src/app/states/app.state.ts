import { NavbarState } from "./navbar/navbar.reducers";
import { SearchState } from "./search/search.reducers";

export interface AppState {
    search: SearchState,
    navbar: NavbarState
}