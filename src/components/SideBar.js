import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ImageBanner from './ImageBanner'
import DoorTabs from './DoorTabs'
import cyan from '@material-ui/core/colors/cyan';
import blueGrey from '@material-ui/core/colors/blueGrey';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposurePlus2Icon from '@material-ui/icons/ExposurePlus2';
import GetAppIcon from '@material-ui/icons/GetApp';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: blueGrey[50]
    },
    content: {
        // flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(3),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 60,
        flexBasis: '100%'
    },
    inline: {
        display: 'inline',
        fontFamily: 'Oxygen'
    },
    download: {
        position: 'relative'
    },
    remove: {
        position: 'relative',
        top: 6, 
        paddingRight: 5,
        color: 'red'
    }
}));

const options = [
    {
        type: '12-0 3 Left Bi-Fold Door',
        addon: 'Priming',
        amount: '$11,000',
        addAmount: '$400',
        config: '3 Left'
    },
    {
        type: '8-0 4L-4R Slider Door',
        addon: 'Cardinal w/Argon Gas',
        amount: '$8,000',
        addAmount: '$7,800',
        config: '4L 4R'
    },
    {
        type: '11-0 French Swing Door',
        addon: 'Flashing Fin',
        amount: '$11,000',
        addAmount: '$500',
        config: '6 Left'
    },
    {
        type: '6-0 French Swing Door',
        addon: 'Sienna Handle',
        addOn2: 'loE 272 Glass',
        amount: '$9,000',
        addAmount: '$400',
        addOn2Amount: '$100',
        config: '2L 1R'
    }
];

const totals = [
    {
        title: 'Subtotal: $64,000'
    },
    {
        title: 'Delivery Charge: $350'
    },
    {
        title: 'Sales Tax: $1,000'
    },
    {
        title: 'Grand Total: $65,350'
    }
];

const RemoveBtn = ({ type }) => {
    const classes = useStyles();
    return (
        <>
            <RemoveCircleOutlineIcon className={classes.remove} />
            {type}
        </>
    )
}

const SideBar = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [imageVal, setImageVal] = React.useState(0);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const switchImage = (val) => {
        setImageVal(val)
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List style={{ overflow: 'auto' }}>
                {options.map((text, index) => (
                    <ListItem button key={text.type}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText
                            primary={<RemoveBtn type={text.type} />}
                            secondary={
                                <>
                                    <Typography component="span" style={{ marginLeft: 25 }} variant="body2" className={classes.inline} color="textPrimary">
                                        Base Price:
                                </Typography>
                                    { ' ' + text.amount}
                                    <br />
                                    <Typography component="span" style={{ marginLeft: 25 }} variant="body2" className={classes.inline} color="textPrimary">
                                        {text.addon}
                                    </Typography>
                                    {" - " + text.addAmount}
                                    {text.addOn2 &&
                                        <>
                                            <br />
                                            <Typography component="span" style={{ marginLeft: 25 }} variant="body2" className={classes.inline} color="textPrimary">
                                                {text.addOn2}
                                            </Typography>
                                            {" - " + text.addOn2Amount}
                                        </>
                                    }
                                </>
                            }
                        />
                        {text.type === '8-0 4L-4R Slider Door' ? <ExposurePlus2Icon className={classes.inline} /> : <ExposurePlus1Icon className={classes.inline} />}
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {totals.map((text, index) => (
                    <ListItem button key={index} style={text.title === 'Grand Total: $65,350' ? { backgroundColor: '#04bff3', paddingBottom: 60, marginTop: 20, fontSize: 28 } : null}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={
                            <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                {text.title}
                            </Typography>
                        }
                        />
                        {text.title === 'Grand Total: $65,350' && <GetAppIcon className={classes.download} />}
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar style={{ backgroundColor: '#04bff3' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ fontWeight: 'bold', fontFamily: 'Libre Baskerville' }} variant="h6" noWrap>
                        AG Millworks
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                {/* <div className={classes.toolbar} /> */}
                <ImageBanner imageVal={imageVal} />
                <DoorTabs switchImage={switchImage} />
            </main>
        </div>
    );
}

SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default SideBar
