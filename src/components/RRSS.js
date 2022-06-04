import { IconButton, Grid } from "@mui/material/";
import { Instagram, WhatsApp } from "@mui/icons-material";

// Redes Sociales
export function RRSS() {
  return (
    <Grid
      container
      sx={{
        justifyContent: {
          xs: "center",
          md: "flex-end",
        },
      }}
    >
      <Grid item>
        <IconButton
          disableRipple
          aria-label="Cuenta de instagram"
          size="large"
          sx={{
            color: "inherit",
          }}
        >
          <Instagram />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          disableRipple
          aria-label="Contacto por Whatsapp"
          size="large"
          sx={{
            color: "inherit",
          }}
        >
          <WhatsApp />
        </IconButton>
      </Grid>
    </Grid>
  );
}
