import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch(`http://localhost:5000/posts`).then(response => response.json());
    // console.log(result.posts);
    return response.posts;
});

export const fetchPostByUser = createAsyncThunk('posts/fetchPostByUser', async (userId) => {
    const response = await fetch(`http://localhost:5000/users/${userId}/posts`).then(response => response.json());
    return response.posts;
});

export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async (initialPost) => {
        const response = await fetch(`http://localhost:5000/users/${initialPost.userId}/posts/new`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: initialPost.title,
                body: initialPost.body
            })
        }).then(response => response.json());
        // console.log(response.posts);
        return response.post;
    }
)

export const updatePost = createAsyncThunk(
    'posts/updatePost',
    async (initialPost) => {
        const response = await fetch(`http://localhost:5000/users/${initialPost.userId}/posts/${initialPost.postId}/edit`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: initialPost.title,
                body: initialPost.body
            })
        }).then(response => response.json());
        // console.log(response.posts);
        return response.post;
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            // Add any fetched posts to the array
            state.posts = state.posts.concat(action.payload);
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        [updatePost.fulfilled]: (state, action) => {
            const post = state.posts.find(post => post.id === action.payload.id);
            const index = state.posts.indexOf(post)
            state.posts[index] = action.payload;
            // state.posts.push(action.payload);
        },
        [addNewPost.fulfilled]: (state, action) => {
            state.posts.push(action.payload);
        },
    },
});

export default postsSlice.reducer;

export const selectAllPosts = (state) => {
    // console.log(state.posts);
    return state.posts.posts
};

export const selectPostById = (state, postId) => state.posts.posts.find((post) => {
    const num = parseInt(postId);
    if(post.id === num) {
        return post;
    }
})