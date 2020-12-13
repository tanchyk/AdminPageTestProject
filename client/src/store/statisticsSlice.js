import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    statistics: [],
    status: 'idle',
    error: null
}

export const fetchStatistics = createAsyncThunk('users/fetchStatistics', async (userId) => {
    const response = await fetch(`http://localhost:5000/users/${userId}/statistics`).then(response => response.json());
    return response.statistics;
})

const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchStatistics.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchStatistics.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.statistics = state.statistics.concat(action.payload);
        },
        [fetchStatistics.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
})

export const selectUserStatistics = (state, userId) => {
    const id = parseInt(userId)
    return state.statistics.statistics.filter(statistic => statistic.userId === id);
};

export default statisticsSlice.reducer;
