import Image from "next/image";
import { Box } from "@mui/material";

export function Thumbnail({ imagen, active }) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        position: "relative",
        background: "#757575",
        cursor: "pointer",
        aspectRatio: "16 / 9",
        outline: active ? `2px solid ${theme.palette.primary.main}` : "none",
      })}
    >
      <Image alt={imagen.alt} src={imagen.url} layout="fill" />
    </Box>
  );
}
