import { UsersInterface } from "@/utils/types/ReduxTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState : UsersInterface ={
    Users : []
}
export const UserSlice = createSlice({
    name: 'Users',
    initialState,
    reducers:{
        setUsers : (state, action: PayloadAction<Array<UsersInterface>>)=>{
                state.Users  = action.payload
        }
    }
})

export const {setUsers} = UserSlice.actions
export default UserSlice.reducer