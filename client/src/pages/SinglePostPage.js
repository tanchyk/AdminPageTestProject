import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, selectPostById} from "../store/postsSlice";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {UpdatePost} from "../components/UpdatePost";
import {stylesSinglePost} from "../styles";

export const SinglePostPage = ({match}) => {
    const dispatch = useDispatch();
    const classes = stylesSinglePost();
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