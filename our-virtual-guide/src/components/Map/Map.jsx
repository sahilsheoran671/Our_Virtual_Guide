

import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'

import useStyles from './styles';

const Map=() => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates={lat:28.6139 , lng:77.2090};
    return (
      <div className={classes.mapContainer}>
           <GoogleMapReact
             bootstrapURLKeys={{Key: 'AIzaSyBjfjsRgrD8hOK8gbHOy8QWA3v8kOXD4R4' }}
             defaultCentre={coordinates}
            center={coordinates}
            defaultZoom={8}
            margin={[50,50,50,50]}
            option={''}
            onChange={''}
            onChildClick={''}

           ></GoogleMapReact>
      </div>
    );
  }

export default Map;
