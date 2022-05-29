import React from "react";
import { Box, Container, Typography, Grid, Icon, Button } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import Link from "next/link";

export function AboutSection() {
  return (
    <Box
      component="section"
      id="mision"
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: "rgba(227, 242, 253, 0.4)",
      }}
    >
      <Container>
        <Grid container>
          <Grid xs={12} item mb={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 5,
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                sx={{
                  display: "inline-block",
                  width: { xs: "80%", sm: "60%", md: "40%" },
                  "& span > svg": {
                    display: "block",
                    fill: "currentColor",
                  },
                }}
              >
                <span role="img" aria-label="Avilatek Inmobiliaria">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 55">
                    <path d="M82.639 54.552a5.775 5.775 0 01-1.989-1.259 5.618 5.618 0 01-1.284-1.936 6.937 6.937 0 010-4.944 5.662 5.662 0 011.284-1.941 5.808 5.808 0 011.989-1.272 7.539 7.539 0 015.141 0 5.785 5.785 0 011.993 1.268 5.664 5.664 0 011.285 1.941 6.95 6.95 0 010 4.944 5.62 5.62 0 01-1.285 1.936 5.752 5.752 0 01-1.993 1.259 7.595 7.595 0 01-5.141 0zm.7-10.067a4.013 4.013 0 00-1.431.933A4.122 4.122 0 0081 46.9a6.276 6.276 0 000 3.961 4.122 4.122 0 00.914 1.481 3.945 3.945 0 001.431.928 5.575 5.575 0 003.737 0 3.908 3.908 0 001.427-.928 4.149 4.149 0 00.909-1.481 6.26 6.26 0 000-3.961 4.148 4.148 0 00-.909-1.485 3.975 3.975 0 00-1.427-.933 5.518 5.518 0 00-3.737 0zm195.319 10.39a.6.6 0 01-.375-.109.67.67 0 01-.214-.275l-1.2-2.895h-5.734l-1.2 2.895a.653.653 0 01-.214.267.593.593 0 01-.375.117h-1.338l5.11-11.988h1.756L280 54.874zm-4.847-9.825q-.093.288-.182.506l-2.007 4.869h4.778l-2.006-4.878a8.663 8.663 0 01-.384-1.129c-.068.228-.132.438-.195.631zm-23.842 9.825V42.886h1.73v11.988zm-18.077 0a.77.77 0 01-.7-.343l-3.317-4.284a.961.961 0 00-.33-.289 1.263 1.263 0 00-.535-.088h-1.311v5h-1.721V42.886h3.622a8.391 8.391 0 012.1.23 4.1 4.1 0 011.458.665 2.682 2.682 0 01.852 1.05 3.31 3.31 0 01.277 1.376 3.257 3.257 0 01-.214 1.188 3.114 3.114 0 01-.62.991 3.676 3.676 0 01-.99.748 5.111 5.111 0 01-1.324.469 1.778 1.778 0 01.57.51l3.728 4.76zm-6.189-6.182h1.811a4.682 4.682 0 001.333-.172 2.773 2.773 0 00.963-.485 2.019 2.019 0 00.584-.748 2.308 2.308 0 00.2-.962 1.863 1.863 0 00-.754-1.615 3.826 3.826 0 00-2.243-.544h-1.891zM206.5 54.874a.6.6 0 01-.375-.109.67.67 0 01-.214-.275l-1.2-2.895h-5.734l-1.2 2.895a.652.652 0 01-.214.267.593.593 0 01-.375.117h-1.328l5.11-11.988h1.756l5.11 11.988zm-4.847-9.825q-.093.288-.182.506l-2.007 4.869h4.771l-2.007-4.878a8.814 8.814 0 01-.383-1.129c-.066.229-.13.439-.193.632zm-23.843 9.825V42.886h1.73v11.988zm-23.846 0V42.886h1.73v10.625h5.529v1.363zm-19.512 0V42.886h1.73v11.988zm-26.219 0V42.886h4.075a8.268 8.268 0 012.029.218 4.019 4.019 0 011.4.619 2.477 2.477 0 01.812.982 3.148 3.148 0 01.263 1.309 2.515 2.515 0 01-.147.854 2.438 2.438 0 01-.446.761 3.043 3.043 0 01-.749.627 4.288 4.288 0 01-1.056.452 4.052 4.052 0 012.114.946 2.393 2.393 0 01.713 1.807 3.194 3.194 0 01-.3 1.388 3.011 3.011 0 01-.874 1.08 4.161 4.161 0 01-1.409.7 6.706 6.706 0 01-1.9.247zm1.73-1.288h2.765a4.443 4.443 0 001.27-.159 2.413 2.413 0 00.874-.447 1.729 1.729 0 00.5-.686 2.315 2.315 0 00.161-.874 1.756 1.756 0 00-.7-1.468 3.448 3.448 0 00-2.118-.539h-2.756zm0-5.33h2.283a4.682 4.682 0 001.266-.151 2.615 2.615 0 00.887-.418 1.642 1.642 0 00.522-.648 2.016 2.016 0 00.17-.832 1.787 1.787 0 00-.678-1.548 3.6 3.6 0 00-2.1-.493h-2.345zm-49.307 6.618v-8.809c0-.117 0-.243.009-.376s.014-.27.027-.41l-4.379 7.5a.691.691 0 01-.624.376h-.25a.692.692 0 01-.624-.376l-4.477-7.52a7.218 7.218 0 01.053.811v8.809h-1.515V42.886h1.276a1.194 1.194 0 01.357.042.5.5 0 01.241.235l4.414 7.378a3.041 3.041 0 01.219.423q.093.222.182.447a6.39 6.39 0 01.411-.878l4.324-7.37a.5.5 0 01.241-.235 1.193 1.193 0 01.357-.042h1.276v11.988zm-30.133 0a.775.775 0 01-.343-.067.838.838 0 01-.272-.226l-7.393-9.026a10.106 10.106 0 01.035.778v8.541h-1.515V42.886h.891a.824.824 0 01.344.055.865.865 0 01.254.221l7.4 9.035c-.018-.145-.03-.286-.036-.423s-.009-.269-.009-.4v-8.488H31.4v11.988zm-29 0V42.886h1.73v11.988zm274.118-18.206a3.806 3.806 0 01-.831-.077 2.471 2.471 0 01-.584-.2 1.846 1.846 0 01-.454-.333 9.697 9.697 0 01-.415-.435L260.512 21.06a7.38 7.38 0 00-.533-.525 2.468 2.468 0 00-.57-.371 2.694 2.694 0 00-.753-.217 7.3 7.3 0 00-1.051-.064h-2.283v16.785h-5.009V0h5.009v16.069h1.894a4.164 4.164 0 001.569-.243 3.054 3.054 0 001.1-.832l12.382-13.817a3.908 3.908 0 011.1-.909A3.021 3.021 0 01274.733 0h4.281l-14.169 15.788a12.244 12.244 0 01-1.025 1 4.558 4.558 0 01-1.025.665 3.673 3.673 0 011.271.691 10.455 10.455 0 011.142 1.151L280 36.668zm-62.176 0V0h22.914v4.043h-17.855v12.18h14.454v3.889h-14.454v12.513h17.854v4.043zm-28.519 0V4.171h-12.067V0h29.116v4.171H189.98v32.5zm-19.618 0a1.686 1.686 0 01-1.09-.333 2.055 2.055 0 01-.623-.844l-3.477-8.854h-16.686l-3.477 8.854a1.994 1.994 0 01-.623.818 1.671 1.671 0 01-1.09.359h-3.892L149.238 0h5.112l14.869 36.668zm-14.1-30.054q-.272.882-.532 1.548l-5.839 14.892h13.883L152.9 8.137a27.8 27.8 0 01-1.116-3.454q-.284 1.048-.561 1.932zm-45.456 30.054V0h5.035v32.5H126.9v4.171zm-21.175 0V0h5.034v36.668zm-31.555 0L37.887 0h4.023A1.688 1.688 0 0143 .333a2.045 2.045 0 01.623.844l10.51 25.87a17.959 17.959 0 01.662 1.893q.3 1.024.584 2.124.233-1.1.506-2.124a14.67 14.67 0 01.636-1.893l10.456-25.87A2.139 2.139 0 0167.6.371 1.635 1.635 0 0168.69 0h4.048L57.583 36.668zm-22.084 0a1.688 1.688 0 01-1.09-.333 2.045 2.045 0 01-.623-.844l-3.477-8.854H9.082l-3.477 8.854a2 2 0 01-.622.818 1.673 1.673 0 01-1.09.359H0L14.869 0h5.112l14.87 36.668zM16.854 6.615q-.272.882-.532 1.548l-5.838 14.892h13.883L18.529 8.137a27.631 27.631 0 01-1.117-3.454q-.284 1.048-.558 1.932z" />
                  </svg>
                </span>
              </Typography>
            </Box>
            <Grid container justifyContent="center">
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  fontWeight: 300,
                  textAlign: "center",
                  lineHeight: { md: 2 },
                  width: { md: "80%" },
                }}
              >
                Lorem deserunt anim et dolor dolor aliquip ad eu nisi sint.
                Pariatur consectetur nisi labore do mollit. Occaecat ea velit
                minim qui consequat qui dolor labore adipisicing velit non.
                Nulla nostrud elit dolore aliqua ea anim non eu irure labore
                exercitation.
              </Typography>
            </Grid>

            {/* <Box display="flex" justifyContent="center" mt={4}>
              <Link href="/inmuebles/1" passHref>
                <Button component="a">Ver inmuebles publicados</Button>
              </Link>
            </Box> */}
          </Grid>
          <Grid item xs={12} mt="auto" container justifyContent="center">
            <Grid item xs={12}>
              <Typography
                component="p"
                textTransform="uppercase"
                textAlign="center"
                fontWeight={700}
              >
                Saber Más
              </Typography>
            </Grid>
            <Icon>
              <ArrowDownward />
            </Icon>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
