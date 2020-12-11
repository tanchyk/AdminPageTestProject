import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const result = await fetch(`http://localhost:5000/posts`).then(response => response.json());
    console.log(result.posts);
    return result.posts;
});

export const fetchPostByUser = createAsyncThunk('posts/fetchPostByUser', async (userId) => {
    const result = await fetch(`http://localhost:5000/users/${userId}/posts`).then(response => response.json());
    console.log(result.posts);
    return result.posts;
});

export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async (initialPost) => {
        const result = await fetch(`http://localhost:5000/users/${initialPost.userId}/posts/new`, {
            method: 'POST',
            body: {
                title: initialPost.title,
                body: initialPost.body
            }
        }).then(response => response.json());
        console.log(result.posts);
        return result.post;
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postUpdated(state, action) {
            const { id, title, content } = action.payload
            const existingPost = state.posts.find((post) => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
    },
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
        [addNewPost.fulfilled]: (state, action) => {
            state.posts.push(action.payload);
        },
    },
});

export const { postUpdated } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) => state.posts.posts.find((post) => post.id === postId);
