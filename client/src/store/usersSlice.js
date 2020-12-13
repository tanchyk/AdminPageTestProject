import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    status: 'idle',
    error: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('http://localhost:5000/users/').then(response => response.json());
    return response.users;
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.users = state.users.concat(action.payload);
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
})

export const selectAllUsers = (state) => {
    return state.users.users;
};

export const selectUserById = (state, userId) => state.users.users.find((user) => {
    const num = parseInt(userId);
    if(user.id === num) {
        return user;
    }
})

export default usersSlice.reducer;
