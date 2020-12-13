import React, {useState} from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Icon from "@mdi/react";
import {mdiArrowDown} from "@mdi/js";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {addNewPost} from "../store/postsSlice";
import {stylesChangePost} from "../styles";

export const AddPost = ({userId}) => {
    const classes = stylesChangePost();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        title: '',
        body: ''
    });

    const changeHandler = event => {
        setForm({...form, [event.target.id]: event.target.value})
    }

    const savePost = () => {
        if(form.title.length > 50) {
            alert('Title is too long');
        } else if(form.body.length > 250) {
            alert('Body is too long');
        } else if(form.title.length === 0) {
            alert('Enter the title');
        } else if(form.body.length === 0) {
            alert('Enter the body');
        } else {
            dispatch(addNewPost({
                userId,
                ...form
            }))
        }
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
                    <Typography className={classes.heading}>Add New Post</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.inputBox}>
                    <TextField
                        id="title"
                        label="Title"
                        variant="outlined"
                        onChange={changeHandler}
                        className={classes.textInput}
                    />
                    <TextField
                        id="body"
                        label="Body"
                        variant="outlined"
                        multiline
                        rows={4}
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
