import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostByUser, fetchPosts, selectPostById} from "../store/postsSlice";
import {fetchUsers, selectUserById} from "../store/usersSlice";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {UpdatePost} from "../components/UpdatePost";
import store from "../store/store";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 600,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        padding: 0
    },
    title: {
        fontSize: 20,
        marginLeft: 10
    },
    nametag: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 200
    },
    header: {
        fontSize: 24,
        marginLeft: 10
    }
});

export const SinglePostPage = ({match}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {postId } = match.params;

    const post = useSelector((state) => selectPostById(state, postId));
    const postStatus = useSelector((state) => state.posts.status);

    useEffect(() => {
        if (postStatus === 'idle') {
            return dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    if(!post) {
        return (
            <section>
                <h2 style={{marginLeft: 260}}>Post not found!</h2>
            </section>
        );
    }

    return (
        <div style={{marginLeft: 240}}>
            <Card className={classes.root}>
                <CardContent style={{padding: 0}}>
                    <h3 className={classes.nametag}>Title</h3>
                    <h2 className={classes.title}>{post.title}</h2>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardContent style={{padding: 0}}>
                    <h3 className={classes.nametag}>Body</h3>
                    <h2 className={classes.title}>{post.body}</h2>
                </CardContent>
            </Card>

            <UpdatePost post={post} />
        </div>
    );
}