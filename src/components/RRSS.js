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
          className="redes-icon"
          sx={{
            pl: { sm: 0, md: 1.5 },
            mr: { sm: -1.5, md: 0 },
          }}
        >
          <Instagram />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          className="redes-icon"
          disableRipple
          aria-label="Contacto por WhatsApp"
          size="large"
        >
          <WhatsApp />
        </IconButton>
      </Grid>
    </Grid>
  );
}
