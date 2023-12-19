import { SpecialityInterface } from "@/utils/types/ReduxTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";


const initialState : SpecialityInterface ={
    SpecialitiesID : 0
}
export const SpecialitySlice = createSlice({
    name: 'Speciality',
    initialState,
    reducers:{
        setSpecialitiesID : (state, action: PayloadAction<number>)=>{
                state.SpecialitiesID  = action.payload
        }
    }
})

export const {setSpecialitiesID} = SpecialitySlice.actions
export default SpecialitySlice.reducer