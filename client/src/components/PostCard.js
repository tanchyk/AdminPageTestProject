import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {stylesPostCard} from "../styles";

export const PostCard = ({post}) => {
    const classes = stylesPostCard();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {post.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" className={classes.button}><NavLink to={`/posts/${post.id}`} className={classes.buttonText}>Change Post</NavLink></Button>
            </CardActions>
        </Card>
    );
}