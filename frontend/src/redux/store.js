import {configureStore} from '@reduxjs/toolkit'
import adminSlice from './slice/adminSlice';
import userSlice from './slice/userSlice';


const store = configureStore(({
    reducer:{
        user:userSlice,
        admin:adminSlice,
    }
}))

export default store;