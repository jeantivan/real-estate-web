import { IconButton, TextField, Box } from "@mui/material";
import { useSnackbar } from "notistack";
import { ChevronRight } from "@mui/icons-material";
import React from "react";

export function Newsletter({ isLight }) {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = React.useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enqueueSnackbar("Gracias por suscribirte. Por favor confirma tu correo.", {
      variant: "success",
      anchorOrigin: {
        autoHideDuration: 3000,
        vertical: "top",
        horizontal: "center",
      },
      preventDuplicate: true,
    });
    setEmail("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent: { xs: "flex-start", sm: "flex-end" },
        alignItems: "center",
      }}
    >
      <TextField
        name="email-newsletter"
        label="Correo Electrónico"
        type="email"
        variant="filled"
        value={email}
        onChange={handleChange}
        required
        placeholder="Correo Electrónico"
        size={isLight ? "large" : "small"}
        sx={(theme) => ({
          marginRight: theme.spacing(2),
          color: "#fff",
          "& .MuiFormLabel-root": {
            color: "rgba(255, 255, 255, 0.7)",
          },
          "& .MuiFilledInput-root": {
            color: "#fff",
            backgroundColor: "rgba(255, 255, 255, 0.09)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.13)",
            },
          },
          "& .MuiFilledInput-underline:before": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.7);",
          },
        })}
      />
      <IconButton
        type="submit"
        aria-label="subscribirse"
        size="large"
        sx={(theme) => ({
          backgroundColor: "rgba(255, 255, 255, 0.09)",
          color: isLight ? "whitesmoke" : "#8a99b3",
          width: 48,
          height: 48,
          borderRadius: "100%",
          transition: theme.transitions.create(["color", "backgroundColor"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          "&:hover": {
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.13)",
          },
        })}
      >
        <ChevronRight fontSize="large" />
      </IconButton>
    </Box>
  );
}
