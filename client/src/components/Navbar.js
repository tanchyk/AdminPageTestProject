import React from "react";
import {Drawer} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from '@mdi/react'
import {mdiAccountCircle} from '@mdi/js';
import {NavLink} from "react-router-dom";
import {stylesNavbar} from "../styles";

export const Navbar = ({}) => {
    const classes = stylesNavbar();

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