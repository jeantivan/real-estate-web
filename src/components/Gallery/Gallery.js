import { useState } from "react";
import { Grid, Hidden } from "@mui/material";
import { Carousel } from "./Carousel";
import { Thumbnail } from "./Thumbnail";

export function Gallery({ imagenes }) {
  const [index, setIndex] = useState(0);

  const handleChange = (index) => setIndex(index);

  const handleNext = () => {
    let nextIndex = imagenes.length === index ? 0 : index + 1;
    handleChange(nextIndex);
  };
  const handlePrev = () => {
    let prevIndex = index === 0 ? imagenes.length - 1 : index - 1;
    handleChange(prevIndex);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Carousel
          {...{ imagenes, index, handleChange, handleNext, handlePrev }}
        />
      </Grid>
      <Hidden smDown>
        {imagenes.map(({ imagen }, i) => (
          <Grid
            item
            xs={2}
            key={imagen.alt}
            onClick={() => handleChange(i)}
            onFocus={() => handleChange(i)}
          >
            <Thumbnail imagen={imagen} active={index === i} />
          </Grid>
        ))}
      </Hidden>
    </Grid>
  );
}
