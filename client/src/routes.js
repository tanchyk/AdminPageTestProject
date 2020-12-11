import React from "react";
import {Switch, Route, Redirect } from 'react-router-dom';
import {UsersPage} from "./pages/UsersPage";
import {SingleUserPage} from "./pages/SingleUserPage";


export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/users" exact>
                <UsersPage/>
            </Route>
            <Route exact path="/users/:userId" component={SingleUserPage} />
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