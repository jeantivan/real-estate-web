import { Layout } from "@/components";
import { styled } from "@mui/material/styles";
import { getAllInmueblesPages, getInmueblesByPage } from "@/lib/api";
import { Container, Typography } from "@mui/material";

const PREFIX = "inmuebles";

const classes = {
  title: `${PREFIX}-title`,
  grid: `${PREFIX}-grid`,
  pagination: `${PREFIX}-pagination`,
};

const StyledLayout = styled(Layout)(({ theme }) => ({
  [`& .${classes.title}`]: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Inmuebles({ data }) {
  return (
    <StyledLayout
      titulo="Inmuebles"
      descripcion="Cras rutrum, ligula id varius consequat, nunc leo tincidunt massa, eu ornare neque ipsum vitae dui. Etiam arcu mauris, rhoncus vel nibh id, auctor porttitor leo. Phasellus eu lectus lorem. Curabitur consequat porta lacus interdum placerat. Nullam urna ligula, dignissim non enim eu, fermentum porta nulla. Etiam ut feugiat felis. In a odio ut erat efficitur vehicula. Proin vestibulum neque est, sit amet varius libero finibus et. Nullam magna justo, volutpat eget lacinia vel, fringilla non ligula. Nam sagittis justo ac ornare condimentum. Donec eros eros, bibendum quis velit nec, tincidunt gravida nisi."
    >
      <Container sx={{ py: 5 }}>
        <Typography>Inmuebles</Typography>
      </Container>
    </StyledLayout>
  );
}

export async function getStaticPaths() {
  let paths = [];

  const { total_pages } = await getAllInmueblesPages();

  for (let i = 0; i <= total_pages; i++) {
    let page = `${i + 1}`;
    paths[i] = { params: { page } };
  }

  console.log(paths);

  return {
    props: {
      paths,
      fallback: false,
    },
  };
}

export async function getStaticProps({ params }) {
  const page = await getInmueblesByPage(params.page);

  console.log(page);
  return {
    props: {
      page,
    },
  };
}
