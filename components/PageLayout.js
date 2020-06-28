import React from "react";
import Head from "next/head";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
import { colors } from "../util/styles";

const PageLayout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Chamilea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <AppBar
        position="sticky"
        style={{
          backgroundColor: colors.barkBrown,
        }}
      >
        <Typography variant="h2" align="center">
          WELCOME TO CHAMILEA!
        </Typography>
      </AppBar> */}

      <main
        style={{
          padding: "1rem 0",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.oliveGreen,
          width: "100%",
          color: colors.white,
        }}
      >
        {children}
      </main>

      <footer
        style={{
          width: "100%",
          height: 100,
          borderTop: `1px solid ${colors.white}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: colors.white,
        }}
      >
        {/* <span>
          Interested in joining during a given month? Email us at
          dvargas92495@gmail.com and nikhilpunwaney@gmail.com
        </span> */}
        <center>
          chamilea
          <br />
          nomads living month-to-month in a different city around the world (america while covid-19 is still a thing)
        </center>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: ${colors.barkBrown};
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default PageLayout;
