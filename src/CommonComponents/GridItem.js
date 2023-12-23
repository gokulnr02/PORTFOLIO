import React from 'react';


import Grid from '@material-ui/core/Grid';

export default function GridItem({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item  className={className+" GridItemPadding"} {...rest}>
      {children}
    </Grid>
  );
}