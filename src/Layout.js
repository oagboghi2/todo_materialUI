import React, { memo } from 'react'; 
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core"; 

/* In material ui, Paper brings the physial properties of paper to the screen 

The background of an application resembles the flat, 
opaque texture of a sheet of paper, and an application’ s 
behavior mimics paper’ s ability to be re - sized, shuffled, 
and bound together in multiple sheets.

*/

/* AppBar displays information and actions relating to the current screen

It can transform into a contextual action bar or used as a navbar
*/

/* Typography to present your design and content as clearly and 
as efficiently as possible

Too many type sizes and styles at once can spoil any layout. 
A typographic scale has a limited set of type sizes that work well 
together along with the layout grid.

*/



const Layout = memo(props => (
  <Paper
    elevation = {0}
    style = {{padding: 0, margin: 0, backgroundColor: "fafafa"}}
  >
      <AppBar color="primary" position = "static" style = {{ height: 64 }}>
        <Toolbar style = {{ height: 64 }}>
          <Typography color = "inherit">TODO APP</Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </Paper>
));

export default Layout;
