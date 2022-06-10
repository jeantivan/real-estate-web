import { Box } from "@mui/material";

export function Map({ rounded }) {
  return (
    <Box
      sx={{
        borderRadius: rounded ? 3 : undefined,
        width: "100%",
        height: 0,
        paddingTop: { xs: "calc(3/4 * 100%)", sm: "calc(9 / 21 * 100%)" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundColor: theme.palette.grey[500],
          "& > iframe": {
            width: "100%",
            height: "100%",
          },
        })}
      >
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Centro%20Per%C3%BA+(Avilatek%20Inmobiliaria)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        />
      </Box>
    </Box>
  );
}
