import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        marginTop: 20
    },
}));

export function WoodChoices() {
    const classes = useStyles();
    
    const [wood, setWood] = useState([
        {id: 1, label: 'Walnut - $100', variant: 'outlined', checkMark: false},
        {id: 2, label: 'Mahogany - $200', variant: 'outlined', checkMark: false},
        {id: 3, label: 'Red Oak - $300', variant: 'outlined', checkMark: false},
        {id: 4, label: 'Douglas Fir - $400', variant: 'outlined', checkMark: false}
    ]);

    const handleDelete = (id) => {
        console.log('delete clicked')
    };

    const handleClick = (id) => {
       const copy = [...wood];
        copy.forEach(item => {
            if (id === item.id && item.variant === 'outlined' && item.checkMark === false) {
                item.variant = "default";
                item.checkMark = true;
            } else if (id === item.id && item.variant === 'default' && item.checkMark === true){
                item.variant = 'outlined';
                item.checkMark = false;
            } else {
                return null;
            }
        })
       
        setWood(copy);
    };

    return (
        <div className={classes.root}>
            {wood.map(item => (
                <Chip
                    key={item.id}
                    label={item.label}
                    color="primary"
                    variant={item.variant}
                    onClick={() => handleClick(item.id)}
                    onDelete={item.checkMark && handleDelete}
                    deleteIcon={item.checkMark && <DoneIcon />}              
                />
            ))}
        </div>
    );
}

export function LitesChoices() {
    const classes = useStyles();
    
    const [lites, setLites] = useState([
        {id: 1, label: 'Simulated Divided Lite - $450', variant: 'outlined', checkMark: false}, 
        {id: 2, label: 'True Divided Lite - $600', variant: 'outlined', checkMark: false}
    ]);

    const handleDelete = (id) => {
        console.log('delete clicked')
    };

    const handleClick = (id) => {
       const copy = [...lites];
        copy.forEach(item => {
            if (id === item.id && item.variant === 'outlined' && item.checkMark === false) {
                item.variant = "default";
                item.checkMark = true;
            } else if (id === item.id && item.variant === 'default' && item.checkMark === true){
                item.variant = 'outlined';
                item.checkMark = false;
            } else {
                return null;
            }
        })
       
        setLites(copy);
    };

    return (
        <div className={classes.root}>
            {lites.map(item => (
                <Chip
                    key={item.id}
                    label={item.label}
                    color="primary"
                    variant={item.variant}
                    onClick={() => handleClick(item.id)}
                    onDelete={item.checkMark && handleDelete}
                    deleteIcon={item.checkMark && <DoneIcon />}              
                />
            ))}
        </div>
    );
}


export function ScreenChoices() {
    const classes = useStyles();
    
    const [screens, setScreen] = useState([
        {id: 1, label: 'Black - $1,000', variant: 'outlined', checkMark: false}, 
        {id: 2, label: 'White - $1,000', variant: 'outlined', checkMark: false}
    ]);

    const handleDelete = (id) => {
        console.log('delete clicked')
    };

    const handleClick = (id) => {
       const copy = [...screens];
        copy.forEach(item => {
            if (id === item.id && item.variant === 'outlined' && item.checkMark === false) {
                item.variant = "default";
                item.checkMark = true;
            } else if (id === item.id && item.variant === 'default' && item.checkMark === true){
                item.variant = 'outlined';
                item.checkMark = false;
            } else {
                return null;
            }
        })
       
        setScreen(copy);
    };

    return (
        <div className={classes.root}>
            {screens.map(item => (
                <Chip
                    key={item.id}
                    label={item.label}
                    color="primary"
                    variant={item.variant}
                    onClick={() => handleClick(item.id)}
                    onDelete={item.checkMark && handleDelete}
                    deleteIcon={item.checkMark && <DoneIcon />}              
                />
            ))}
        </div>
    );
}


export function SillsChoices() {
    const classes = useStyles();
    
    const [sills, setSills] = useState([
        {id: 1, label: 'Sillution - $800', variant: 'outlined', checkMark: false}, 
        {id: 2, label: 'Stainless Steel - $900', variant: 'outlined', checkMark: false},
         {id: 3, label: 'Aluminum - $1000', variant: 'outlined', checkMark: false}
    ]);

    const handleDelete = (id) => {
        console.log('delete clicked')
    };

    const handleClick = (id) => {
       const copy = [...sills];
        copy.forEach(item => {
            if (id === item.id && item.variant === 'outlined' && item.checkMark === false) {
                item.variant = "default";
                item.checkMark = true;
            } else if (id === item.id && item.variant === 'default' && item.checkMark === true){
                item.variant = 'outlined';
                item.checkMark = false;
            } else {
                return null;
            }
        })
       
        setSills(copy);
    };

    return (
        <div className={classes.root}>
            {sills.map(item => (
                <Chip
                    key={item.id}
                    label={item.label}
                    color="primary"
                    variant={item.variant}
                    onClick={() => handleClick(item.id)}
                    onDelete={item.checkMark && handleDelete}
                    deleteIcon={item.checkMark && <DoneIcon />}              
                />
            ))}
        </div>
    );
}

export function HandleChoices() {
    const classes = useStyles();
    
    const [handles, setHandles] = useState([
        {id: 1, label: 'White - $400', variant: 'outlined', checkMark: false}, 
        {id: 2, label: 'Brass - $500', variant: 'outlined', checkMark: false}, 
        {id: 3, label: 'Satin Nickel - $450', variant: 'outlined', checkMark: false}, 
        {id: 4, label: 'Chrome - $500', variant: 'outlined', checkMark: false}, 
        {id: 5, label: 'Black - $400', variant: 'outlined', checkMark: false}, 
        {id: 6, label: 'Umber - $600', variant: 'outlined', checkMark: false}
    ]);

    const handleDelete = (id) => {
        console.log('delete clicked')
    };

    const handleClick = (id) => {
       const copy = [...handles];
        copy.forEach(item => {
            if (id === item.id && item.variant === 'outlined' && item.checkMark === false) {
                item.variant = "default";
                item.checkMark = true;
            } else if (id === item.id && item.variant === 'default' && item.checkMark === true){
                item.variant = 'outlined';
                item.checkMark = false;
            } else {
                return null;
            }
        })
       
        setHandles(copy);
    };

    return (
        <div className={classes.root}>
            {handles.map(item => (
                <Chip
                    key={item.id}
                    label={item.label}
                    color="primary"
                    variant={item.variant}
                    onClick={() => handleClick(item.id)}
                    onDelete={item.checkMark && handleDelete}
                    deleteIcon={item.checkMark && <DoneIcon />}              
                />
            ))}
        </div>
    );
}


export function ColorChoices() {
    const classes = useStyles();
    
    const [colors, setColors] = useState([
        {id: 1, label: 'Carbon - $100', variant: 'outlined', checkMark: false}, 
        {id: 2, label: 'Espresso Brown - $100', variant: 'outlined', checkMark: false}, 
        {id: 3, label: 'Sandcastle Tan - $150', variant: 'outlined', checkMark: false},
        {id: 4, label: 'Linen White - $100', variant: 'outlined', checkMark: false}, 
        {id: 5, label: 'Anodized - $150', variant: 'outlined', checkMark: false}
    ]);

    const handleDelete = (id) => {
        console.log('delete clicked')
    };

    const handleClick = (id) => {
       const copy = [...colors];
        copy.forEach(item => {
            if (id === item.id && item.variant === 'outlined' && item.checkMark === false) {
                item.variant = "default";
                item.checkMark = true;
            } else if (id === item.id && item.variant === 'default' && item.checkMark === true){
                item.variant = 'outlined';
                item.checkMark = false;
            } else {
                return null;
            }
        })
       
        setColors(copy);
    };

    return (
        <div className={classes.root}>
            {colors.map(item => (
                <Chip
                    key={item.id}
                    label={item.label}
                    color="primary"
                    variant={item.variant}
                    onClick={() => handleClick(item.id)}
                    onDelete={item.checkMark && handleDelete}
                    deleteIcon={item.checkMark && <DoneIcon />}              
                />
            ))}
        </div>
    );
}