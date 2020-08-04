import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {LocalTaxi, DirectionsCar,AccessTime,TimeToLeave} from '@material-ui/icons'
import { Link, Redirect, useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
    const history = useHistory();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleClick = (e) =>{
        console.log("i clicked")
        history.push("/riderdashboard/rentals")
    }

    return (
        <div className="fixed-bottom rider-bottom-navbar">
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        className={classes.root}
        >
        <BottomNavigationAction   icon={<LocalTaxi />}  />
        <BottomNavigationAction onClick={handleClick}  icon={<TimeToLeave />} />
        <BottomNavigationAction  icon={<AccessTime />} />
        <BottomNavigationAction  icon={<DirectionsCar />} />
        </BottomNavigation>
        </div>
    );
}
