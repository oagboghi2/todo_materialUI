import React, { memo } from "react";
import {TextField, Paper, Button, Grid } from "@material-ui/core";

/* Grid in the material design responsive layout grid adapts to screen size
orientation, ensuring consistency across layouts

The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs.
Material Design resoinsive UI is based on a 12-column grid layout
*/

const AddTodo = memo(props => (
    <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
            < TextField
                placeholder="Add Todo Here"
                value={props.inputValue}
                onChange={props.onInputChange}
                onKeyPress={props.onInputKeyPress}
                fullWidth
            />
        </Grid>
    <Grid xs={2} md={1} item>
        <Button 
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={props.onButtonClick}
        >Add
        </Button>
        </Grid>
        </Grid>
    </Paper>
))

export default AddTodo