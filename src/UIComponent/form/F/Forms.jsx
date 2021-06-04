import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { LEditor } from '../../Editor/Editor';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function CenteredGrid() {
  const classes = useStyles();
  const [type, setType] = useState("");

  const createGrid = (row, col) => {
    let colClass = 12 / col;

    let gridContainer = [];

    let cellCount = row * col;

    for (let i = 0; i < cellCount; i++) {
      let gridCell = (
        <Grid item xs={colClass} border={1} borderColor="primary.main" 
        onDragOver={(ev)=>{ev.preventDefault();}}
        onDrop={(ev)=>{
          debugger;
          let widgetType=ev.dataTransfer.getData("INPUT")
          setType(widgetType);
        } }> 
           <>
           {/* <Paper className={classes.paper}>{i}</Paper>  */}

          <LEditor></LEditor>
          
          
           </>
         
        </Grid>
      );

      gridContainer.push(gridCell);
    }

    return gridContainer;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}  >
        {createGrid(1, 1)}
      </Grid>
    </div>
  );
}
