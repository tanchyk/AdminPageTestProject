import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {stylesUserCard} from "../styles";

export const UserCard = ({user}) => {
    const classes = stylesUserCard();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {user.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {user.email}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" className={classes.button}><NavLink to={`/users/${user.id}`} className={classes.buttonText}>User Page</NavLink></Button>
            </CardActions>
        </Card>
    );
}