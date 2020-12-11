import React from "react";
import {Switch, Route, Redirect } from 'react-router-dom';
import {UsersPage} from "./pages/UsersPage";


export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/users" exact>
                <UsersPage/>
            </Route>
            <Route path="/users/:userId" exact>
                {/*<SingleUserPage/>*/}
            </Route>
            <Route path="/posts" exact>
                {/*<PostsPage/>*/}
            </Route>
            <Route path="/posts/:postId" exact>
                {/*<SinglePostage/>*/}
            </Route>
            <Redirect to="/users"/>
        </Switch>
    );

}