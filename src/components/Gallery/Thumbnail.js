import { styled } from '@mui/material/styles';
import Image from "next/image";
import clsx from "clsx";

const PREFIX = 'Thumbnail';

const classes = {
  root: `${PREFIX}-root`,
  container: `${PREFIX}-container`,
  active: `${PREFIX}-active`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.root}`]: {
    position: "relative",
    width: "100%",
    height: 0,
    overflow: "hidden",
    paddingTop: "56.25%",
    background: theme.palette.grey[600],
    cursor: "pointer",
  },

  [`& .${classes.container}`]: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },

  [`&.${classes.active}`]: {
    outline: `2px solid ${theme.palette.primary.main}`,
  }
}));

export function Thumbnail({ imagen, active }) {

  return (
    <Root className={clsx(classes.root, { [classes.active]: active })}>
      <div className={classes.container}>
        <Image alt={imagen.alt} src={imagen.url} layout="fill" />
      </div>
    </Root>
  );
}
