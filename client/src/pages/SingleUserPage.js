import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsers, selectUserById} from "../store/usersSlice";
import Divider from "@material-ui/core/Divider";

export const SingleUserPage = ({match}) => {
    const dispatch = useDispatch();

    const { userId } = match.params;
    const user = useSelector((state) => selectUserById(state, userId));
    const userStatus = useSelector((state) => state.users.status);

    useEffect(() => {
        if (userStatus === 'idle') {
            return dispatch(fetchUsers());
        }
    }, [userStatus, dispatch])

    if (!user) {
        return (
            <section>
                <h2 style={{marginLeft: 260}}>User not found!</h2>
            </section>
        )
    }

    return (
        <div>
            <h1 style={{marginLeft: 260}}>Name: {user.name}, Email: {user.email}</h1>
            <Divider/>
        </div>
    );
}