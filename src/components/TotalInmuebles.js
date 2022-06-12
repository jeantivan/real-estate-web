import { Typography } from "@mui/material";

export function TotalInmuebles({
  total_results_size,
  page,
  results_size,
  results_per_page,
}) {
  const from = (page - 1) * results_per_page + 1;

  const to = from + results_size - 1;

  return (
    <Typography variant="body2" color="text.secondary">
      Mostrando {from}-{to} de {total_results_size} inmuebles disponibles
    </Typography>
  );
}
