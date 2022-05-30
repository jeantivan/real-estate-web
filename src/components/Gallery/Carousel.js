import SwipeableViews from "react-swipeable-views";
import { Box } from "@mui/material";
import Image from "next/image";
import { Controls } from "./Controls";

export function Carousel({
  imagenes,
  index,
  handleNext,
  handlePrev,
  handleChange,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        backgroundColor: "#757575",
        overflow: "hidden",
        "&:hover button": {
          transform: "translate(0, -50%)",
          opacity: 1,
        },
      }}
    >
      <Box
        component={SwipeableViews}
        index={index}
        onChangeIndex={handleChange}
        enableMouseEvents
        slideStyle={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          "& .react-swipeable-view-container": {
            width: "100%",
            maxHeight: "100%",
          },
        }}
      >
        {imagenes.map(({ imagen }, i) => (
          <Image
            key={imagen.alt}
            alt={imagen.alt}
            src={imagen.url}
            layout="fill"
            priority={i === 0}
          />
        ))}
      </Box>
      <Controls
        handleNext={handleNext}
        handlePrev={handlePrev}
        index={index}
        max={imagenes.length - 1}
      />
    </Box>
  );
}
