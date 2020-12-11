import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 600,
        margin: "auto",
        marginTop: 10,
        marginBottom: 15,
        padding: 10
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
    },
    pos: {
        marginBottom: 12,
    },
    buttonText: {
        color: "white",
        textDecoration: "none"
    },
    button: {
        backgroundColor: "#298880",
        '&:hover': {
            backgroundColor: "#2a9d8f"
        }
    }
});

export const PostCard = ({post}) => {
    const classes = useStyles();

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