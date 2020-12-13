import makeStyles from "@material-ui/core/styles/makeStyles";

export const stylesSinglePost = makeStyles({
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

export const stylesChangePost = makeStyles((theme) => ({
    root: {
        width: 620,
        margin: "auto",
        marginBottom: 15,
        marginTop: 10
    },
    rootUpdate: {
        minWidth: 275,
        maxWidth: 600,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        padding: 0
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

export const stylesPostCard = makeStyles({
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

const drawerWidth = 240;

export const stylesNavbar = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        [theme.breakpoints.down('md')]: {
            visibility: 'hidden',
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
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

export const stylesUserCard = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        maxWidth: 600,
        marginLeft: 260,
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
        },
        marginBottom: 10,
        marginTop: 10
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
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
}));