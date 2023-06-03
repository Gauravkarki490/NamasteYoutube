import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice(
    {
        name:'search',
        initialState:{

        },
        reducers:{
            handleCacheResults:(state,action)=>{
                state = Object.assign(state,action.payload)
                
            }
        }
    }
)

export const {handleCacheResults} = searchSlice.actions
export default searchSlice.reducer;