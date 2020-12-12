import React from "react";
import {Drawer, makeStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from '@mdi/react'
import {mdiAccountCircle} from '@mdi/js';
import {NavLink} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    logo: {
        marginLeft: theme.spacing(2)
    },
    linkStyle: {
        color: "black",
        textDecoration: "none"
    }
}));

export const Navbar = ({}) => {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <h2 className={classes.logo}>AdminPage</h2>
            <Divider/>
            <List>
                <NavLink to="/users" className={classes.linkStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon path={mdiAccountCircle}
                                  title="User Profile"
                                  size={1}
                                  color="#298880"
                            />
                        </ListItemIcon>
                        <ListItemText primary='Users'/>
                    </ListItem>
                </NavLink>
            </List>
        </Drawer>
    );
}