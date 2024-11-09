import { createReducer, on } from "@ngrx/store";
import { toggleShowSidebarNavbar } from "./navbar.actions";

export interface NavbarState {
    isSidebarNavbarShow : boolean
}

export const initialNavbarState : NavbarState = {
    isSidebarNavbarShow : false
}

export const NavbarReducer = createReducer(
    initialNavbarState,
    on(toggleShowSidebarNavbar, state => ({...state, isSidebarNavbarShow: !state.isSidebarNavbarShow}))
)