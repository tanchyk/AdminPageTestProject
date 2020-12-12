import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsers, selectUserById} from "../store/usersSlice";
import Divider from "@material-ui/core/Divider";
import {fetchPosts, selectAllPosts} from "../store/postsSlice";
import {PostCard} from "../components/PostCard";
import {AddPost} from "../components/AddPost";
import {UserCard} from "../components/UserCard";
import state from '../store/store'

export const SingleUserPage = ({match}) => {
    const dispatch = useDispatch();

    const { userId } = match.params;
    const user = useSelector((state) => selectUserById(state, userId));
    const userStatus = useSelector((state) => state.users.status);

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector((state) => state.posts.status)
    const error = useSelector((state) => state.posts.error)

    useEffect(() => {
        if (userStatus === 'idle') {
            return dispatch(fetchUsers());
        }
    }, [userStatus, dispatch])

    useEffect(() => {
        if (postStatus === 'idle') {
            return dispatch(fetchPosts());
        }
    }, [postStatus, dispatch])

    if (!user) {
        return (
            <section>
                <h2 style={{marginLeft: 260}}>User not found!</h2>
            </section>
        )
    }

    let postsAry;
    console.log(state.getState());
    if (userStatus === 'loading') {
        postsAry = <div className="loader">Loading...</div>
    } else if (userStatus === 'succeeded') {
        const orderedPosts = posts
            .slice()
            .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))

        postsAry = orderedPosts.map((post, key) => {
            if(post.userId === user.id) {
                return <PostCard post={post} key={key}/>
            }
        })
    } else if (userStatus === 'error') {
        console.log(error)
        postsAry = <h1>Sorry, our server has responded with an error</h1>
    }

    return (
        <div>
            <h1 style={{marginLeft: 260}}>Name: {user.name}, Email: {user.email}</h1>
            <Divider/>
            <AddPost userId={userId}/>
            {postsAry}
        </div>
    );
}