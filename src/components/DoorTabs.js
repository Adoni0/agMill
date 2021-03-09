import React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Required from './Required'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DetailAccordian from './DetailAccordian'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        marginTop: 20
    },
    inline: {
        display: 'inline'
    }
}));

const Icon = () => {
    const classes = useStyles();
    return (
        <>
            <Typography component="span" variant="body2">
                <AddShoppingCartIcon className={classes.inline} />
                <Typography variant="caption" style={{ position: 'relative', bottom: 5, left: 2 }} className={classes.inline}>Add to Quote</Typography>
            </Typography>
        </>
    )
}

export default function DoorTabs({ switchImage }) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switchImage(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Bi-Fold Door - $Total Price" icon={<Icon />} {...a11yProps(0)} />
                    <Tab label="Slider Door - $$$" icon={<AddShoppingCartIcon />} {...a11yProps(1)} />
                    <Tab label="Swing Door - $$$" icon={<AddShoppingCartIcon />} {...a11yProps(2)} />

                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} dir={theme.direction}>
                <Required isSwing={false} />
                <DetailAccordian />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Required isSwing={false} />
                <DetailAccordian />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <Required isSwing={true} />
                <DetailAccordian />
            </TabPanel>


        </div>
    );
}
