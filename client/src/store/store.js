import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './postsSlice';
import usersReducer from './usersSlice';
import statisticsReducer from './statisticsSlice';

export default configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        statistics: statisticsReducer
    },
})