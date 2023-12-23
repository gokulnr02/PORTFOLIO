import React from 'react';


import Grid from '@material-ui/core/Grid';

export default function GridContainer({ ...props }) {
    const { classes, children, className, ...rest } = props;
    return (
      <Grid container {...rest} className={className} >
        {children}
      </Grid>
    );
  }
