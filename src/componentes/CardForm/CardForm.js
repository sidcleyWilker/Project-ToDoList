import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Button from '@mui/material/Button';


function CardForm(){
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Card sx={{ width: 500}} >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                        To Do List
                </Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 450 }}
                    >
                    
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Informe uma tarefa"
                        inputProps={{ 'aria-label': 'Informe uma tarefa' }}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    {/* <IconButton color="primary" sx={{ p: '2px' }} aria-label="directions">
                        <DirectionsIcon />
                        Add
                    </IconButton> */}
                    <Button size="small"> <strong>Add</strong> </Button>
                </Paper>
            </CardContent>
        </Card>
        </div>
      );
}

export default CardForm;