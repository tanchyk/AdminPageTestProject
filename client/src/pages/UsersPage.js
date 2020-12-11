import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsers, selectAllUsers} from "../store/usersSlice";
import {UserCard} from "../components/UserCard";

export const UsersPage = ({}) => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const userStatus = useSelector((state) => state.users.status);
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        if (userStatus === 'idle') {
            return dispatch(fetchUsers());
        }
    }, [userStatus, dispatch])

    let content

    if (userStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (userStatus === 'succeeded') {
        const orderedUsers = users
            .slice()
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))

        content = orderedUsers.map((user, key) => {
            // console.log(user)
            return <UserCard user={user} key={key}/>
        });
    } else if (userStatus === 'error') {
        content = <div>{error}</div>
    }

    return (
        <div>
            <h1 style={{marginLeft: 260}}>Users</h1>
            {content}
        </div>
    );
}