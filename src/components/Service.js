import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export function Service({ title, text, img, i }) {
  const isEven = i % 2 === 0;
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        "&:not(:last-child)": {
          mb: { xs: 6, md: 8 },
        },
      }}
    >
      <Grid
        item
        xs={10}
        sm={7}
        md={4}
        sx={{
          aspectRatio: "1",
          backgroundColor: "#eee",
          position: "relative",
          order: { md: isEven ? "0" : "1" },
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Image
          layout="fill"
          src={img}
          alt={title.replaceAll(" ", "-")}
          placeholder="blur"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        md={7}
        sx={{
          py: { xs: 3, md: 2 },
          px: { md: 4 },
          order: { md: isEven ? "1" : "0" },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={(theme) => ({
            color: "white",
            fontWeight: 700,
            mb: { xs: 3, sm: 5, md: 7 },
            textAlign: {
              xs: "center",
              sm: "left",
              md: isEven ? "left" : "right",
            },
            pb: 1,
            position: "relative",
            "&:before": {
              content: "''",
              position: "absolute",
              backgroundColor: theme.palette.primary.main,
              width: { xs: "30%", sm: "15%" },
              height: 5,
              borderRadius: {
                xs: 1,
                sm: "4px 8px 8px 4px",
                md: isEven ? "4px 8px 8px 4px" : "8px 4px 4px 8px",
              },
              top: "100%",
              left: { xs: "50%", sm: 0, md: isEven ? "0%" : "100%" },
              transform: {
                xs: "translateX(-50%)",
                sm: "translateX(0%)",
                md: isEven ? "translateX(0%)" : "translateX(-100%)",
              },
            },
          })}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255, 0.8)",
            lineHeight: 1.5,
            textAlign: {
              xs: "center",
              sm: "left",
              md: isEven ? "left" : "right",
            },
            mx: { md: 3 },
          }}
          ml={{ md: 3 }}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}
