import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true,
        isSearchOpen:false
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        },
        openSearchBar:(state)=>{
            state.isSearchOpen=true;
        },
        closeSearchBar:(state)=>{
            state.isSearchOpen=false;
        }
    }
})
export const {toggleMenu,closeMenu,closeSearchBar,openSearchBar} = appSlice.actions
export default appSlice.reducer;