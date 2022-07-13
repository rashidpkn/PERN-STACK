import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username:'',
    password:'',
    isLogin:false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername:(state,action)=>{
        state.username = action.payload
    },
    setPassword:(state,action)=>{
        state.password = action.payload
    },
    setIsLogin:(state,action)=>{
        state.isLogin = action.payload
    }
  }
});

export const {setIsLogin,setPassword,setUsername} = userSlice.actions

export default userSlice.reducer