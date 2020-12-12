import React, {useState} from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Icon from "@mdi/react";
import {mdiArrowDown} from "@mdi/js";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {addNewPost} from "../store/postsSlice";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 620,
        margin: "auto",
        marginBottom: 15,
        marginTop: 10
    },
    heading: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightBold,
    },
    expanded: {
        margin: "0 auto"
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
}));

export const AddPost = ({userId}) => {
    const classes = useStyles();
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
