import React from 'react';
import { CircularProgress, Grid, Typoraphy, InputLabel, MenuItem, FormControl, Select, Typography } from '@material-ui/core';

import useStyles from './styles';


const List = () => {
    const classes = useStyles ();

    return (
        <div className={classes.container}>
            <Typography variant='h4'></Typography>
        </div>
    );
} 

export default List;