import { Box, Card, CardContent, Typography, Link } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

export function InmuebleItem({
  slug,
  titulo,
  precio,
  ubiaprox,
  habitaciones,
  estado,
  banos,
  area,
  mainimg,
  fecha,
  agent,
  priority,
}) {
  return (
    <NextLink href="/inmueble/[slug]" as={`/inmueble/${slug}`} passHref>
      <Link underline="none">
        <Card
          sx={(theme) => ({
            minWidth: "100%",
            boxShadow: theme.shadows[2],
            transition: "box-shadow 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              boxShadow: theme.shadows[6],
            },
          })}
          component="article"
        >
          <Box
            sx={{
              backgroundColor: "#e2e2e2",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              position: "relative",
              overflow: "hidden",
              aspectRatio: "16 / 9",
            }}
          >
            <Image
              src={mainimg.url}
              alt={mainimg.alt}
              layout="fill"
              priority={priority}
            />
            <Box
              sx={(theme) => ({
                position: "absolute",
                padding: theme.spacing(0.5, 1),
                fontWeight: 600,
                borderRadius: 1,
                top: 20,
                right: 20,
                color:
                  estado === "Venta"
                    ? theme.palette.getContrastText(theme.palette.primary.A700)
                    : theme.palette.getContrastText(
                        theme.palette.secondary.main
                      ),

                bgcolor:
                  estado === "Venta"
                    ? theme.palette.primary.A700
                    : theme.palette.secondary.main,
              })}
            >
              {estado}
            </Box>
          </Box>
          <CardContent>
            <Typography variant="h6" fontWeight={700}>
              {titulo.text}
            </Typography>
            <Typography
              variant="body2"
              fontWeight={700}
              color="textSecondary"
              gutterBottom
            >
              {ubiaprox}
            </Typography>
            <Typography variant="h5" gutterBottom>
              ${precio}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {area} m<sup>2</sup> | {habitaciones} Habitaciones | {banos} Baños
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </NextLink>
  );
}
