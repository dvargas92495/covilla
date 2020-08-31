import React from "react";
import Head from "next/head";
import MapChart from "./MapChart";
import Overlay from "./Overlay";
import { colors } from "../util/styles";

class App extends React.Component {
  render() {
    return (
      <>
        <Overlay />
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
            <title>covilla</title>
            <link rel="icon" href="images/favicon/favicon.ico" />
          </Head>
    
          <main
            style={{
              padding: "1rem 0",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.washedBlue,
              width: "100%",
              color: colors.white,
            }}
          >
            <MapChart />
          </main>
    
          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
    
            * {
              box-sizing: border-box;
            }
          `}</style>
        </div>
      </>
    );
  }
};

export default App;
