import React, {FC, ReactElement} from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

type Props = {
  value: number
}

const CircularProgressWithLabel: FC<Props> = (props: CircularProgressProps & Props) : ReactElement => {
  return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} />
        <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
              props.value,
          )}%`}</Typography>
        </Box>
      </Box>
  );
}

export default CircularProgressWithLabel
