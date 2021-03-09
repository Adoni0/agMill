import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Selection from './Selection'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: blueGrey[50]
    },
    inline: {
        display: 'inline'
    },
    list: {
        height: 80
    }
}));

export default function Required({ isSwing }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List className={classes.list} aria-label="primary">
                <ListItem>

                    <ListItemText primary="Unit Size" />
                    <Selection className={classes.inline} typeRequired="unitSize" />
                </ListItem>

            </List>
            {!isSwing &&
                <>
                    <Divider />
                    <List className={classes.list} aria-label="secondary">
                        <ListItem>
                            <ListItemText primary="Configuration" />
                            <Selection className={classes.inline} typeRequired="config" />
                        </ListItem>
                    </List>
                </>
            }
            <Divider />
            <List className={classes.list}>
                <ListItem>
                    <ListItemText primary="Quantity" />
                    <Selection className={classes.inline} typeRequired="Quantity" />
                </ListItem>
            </List>
        </div>
    );
}