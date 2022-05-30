import { Paper, Typography, Avatar, Icon, Box } from "@mui/material";

export function Testimonial({ client, type, picture, text }) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 4,
        borderRadius: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Icon
        sx={(theme) => ({
          fontSize: 48,
          color: theme.palette.primary.main,
          mb: 4,
          "& > svg": {
            fill: "currentColor",
          },
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z" />
        </svg>
      </Icon>
      <Typography mb={4}>{text}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: 80, height: 80, mr: 2 }}
          alt={client}
          src={picture}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" component="p" fontWeight={500}>
            {client}
          </Typography>
          <Typography
            component="p"
            color="primary"
            variant="subtitle2"
            textTransform="uppercase"
            fontWeight={500}
          >
            {type}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
