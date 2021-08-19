import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const useStyle = makeStyles(theme => ({
  container: {
    background: "linear-gradient(90deg, #fbd2e5, transparent)",
  },
  imageContainer: {
    width: "50%",
  },
  loginButton: {
    marginTop: 0,
  },
}));

const Home: NextPage = () => {
  const classes = useStyle();

  return (
    <>
      <Head>
        <title>Login | Goals</title>
      </Head>
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        className={classes.container}
      >
        <div />

        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box className={classes.imageContainer}>
            <Image
              src="/images/piggy-bank.png"
              width={512}
              height={512}
              alt="Pig Money"
            />
          </Box>
        </Box>

        <Button
          className={classes.loginButton}
          size="large"
          endIcon={<FcGoogle />}
          variant="outlined"
          color="secondary"
        >
          Login With Google
        </Button>
      </Box>
    </>
  );
};

export default Home;
