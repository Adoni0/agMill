import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        height: 20,
        position: 'relative',
        top: -25
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    height: {
        height: 50
    }
}));

export default function Selection({ typeRequired }) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div className={classes.height}>
            <FormControl required className={classes.formControl}>
                <InputLabel htmlFor="age-native-required">{typeRequired === 'unitSize' ? 'Size' : typeRequired === 'config' ? 'Config' : 'Quantity'}</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    name="age"
                    inputProps={{
                        id: 'age-native-required',
                    }}
                >
                    {typeRequired === 'unitSize' &&
                        <>
                            <option aria-label="None" value="" />
                            <option value={5}>5-0</option>
                            <option value={6}>6-0</option>
                            <option value={7}>7-0</option>
                            <option value={8}>8-0</option>
                            <option value={9}>9-0</option>
                            <option value={10}>10-0</option>
                            <option value={11}>11-0</option>
                            <option value={12}>12-0</option>
                        </>
                    }
                    {typeRequired === 'config' &&
                        <>
                            <option aria-label="None" value="" />
                            <option value={'2 Left'}>2 Left</option>
                            <option value={'2 Right'}>2 Right</option>
                            <option value={'3 Left'}>3 Left</option>
                            <option value={'3 Right'}>3 Right</option>
                            <option value={'1L 2R'}>1L 2R</option>
                            <option value={'3L 3R'}>3L 3R</option>
                            <option value={'4L 4R'}>4L 4R</option>
                            <option value={'5L 1R'}>5L 1R</option>
                            <option value={'6 Left'}>6 Left</option>
                        </>
                    }
                    {typeRequired === 'Quantity' &&
                        <>
                            <option aria-label="None" value="" />
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                        </>

                    }

                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>

        </div>
    );
}