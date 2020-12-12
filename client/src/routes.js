import React from "react";
import {Switch, Route, Redirect } from 'react-router-dom';
import {UsersPage} from "./pages/UsersPage";
import {SingleUserPage} from "./pages/SingleUserPage";
import {SinglePostPage} from "./pages/SinglePostPage";


export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/users" exact>
                <UsersPage/>
            </Route>
            <Route exact path="/users/:userId" component={SingleUserPage} />
            <Route exact path="/posts/:postId" component={SinglePostPage} />
            <Redirect to="/users"/>
        </Switch>
    );

}