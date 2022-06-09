import {
  Container,
  Box,
  useMediaQuery,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export function SalesSection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box bgcolor="primary.dark">
      <Container sx={{ py: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          divider={
            <Divider
              orientation={matches ? "horizontal" : "vertical"}
              flexItem
              sx={{ bgcolor: "primary.light" }}
            />
          }
          color="white"
        >
          <Box pl={2} pr={2} pt={7} pb={3}>
            <Typography variant="h3" fontWeight={700} mb={3}>
              100+
            </Typography>
            <Typography>
              De inmuebles vendidos a través de la compañía
            </Typography>
          </Box>
          <Box pl={2} pr={2} pt={7} pb={3}>
            <Typography variant="h3" fontWeight={700} mb={3}>
              50+
            </Typography>
            <Typography>De inmuebles publicados en la plataforma</Typography>
          </Box>

          <Box pl={2} pr={2} pt={7} pb={{ xs: 7, sm: 3 }}>
            <Typography variant="h3" fontWeight={700} mb={3}>
              500+
            </Typography>
            <Typography>Familias felices en su nuevo hogar</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
