import React, {useEffect, useState} from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Icon from "@mdi/react";
import {mdiArrowDown} from "@mdi/js";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {updatePost} from "../store/postsSlice";
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 600,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        padding: 0
    },
    buttonText: {
        color: "white",
        textDecoration: "none"
    },
    textInput: {
        width: "100%",
        margin: 5
    },
    inputBox: {
        display: "flex",
        flexDirection: "column"
    },
    button: {
        width: 120,
        marginLeft: 5,
        marginTop: 5,
        backgroundColor: "#298880",
        color: "white",
        '&:hover': {
            backgroundColor: "#2a9d8f"
        }
    }
});

export const UpdatePost = ({post}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState({
        title: post.title,
        body: post.body
    });

    const changeHandler = event => {
        setForm({...form, [event.target.id]: event.target.value})
    }

    const savePost = () => {
        let titleCheck = form.title;
        let bodyCheck = form.body;
        if (form.title.length > 50) {
            alert('Title is too long');
            return;
        } else if (form.body.length > 250) {
            alert('Body is too long');
            return;
        } else if (titleCheck === '') {
            titleCheck = post.title;
        } else if (bodyCheck === '') {
            bodyCheck = post.body;
        }
        dispatch(updatePost({
            userId: post.userId,
            postId: post.id,
            title: titleCheck,
            body: bodyCheck
        }))
        history.push(`/users/${post.userId}`)
    }

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={
                        <Icon path={mdiArrowDown}
                              title="User Profile"
                              size={1}
                              color="#298880"
                        />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Update Post</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.inputBox}>
                    <TextField
                        id="title"
                        label="Title"
                        variant="outlined"
                        value={form.title}
                        onChange={changeHandler}
                        className={classes.textInput}
                    />
                    <TextField
                        id="body"
                        label="Body"
                        variant="outlined"
                        multiline
                        value={form.body}
                        onChange={changeHandler}
                        className={classes.textInput}
                    />
                    <Button
                        size="small"
                        className={classes.button}
                        onClick={savePost}
                    >
                        Save Post
                    </Button>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}