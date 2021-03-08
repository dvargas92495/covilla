import React from "react";
import Head from "next/head";
import MapChart from "./MapChart";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import CancelIcon from "@material-ui/icons/Cancel";
import { colors } from "../util/styles";
import Typist from "react-typist";
import DetailView from "./DetailView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConvertKit: false,
    };
  }

  toggleConvertKit = () =>
    this.setState({ showConvertKit: !this.state.showConvertKit });

  setMarker = marker => this.setState({ marker });

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Head>
            <title>covilla</title>
            <link rel="icon" href="images/favicon/favicon.ico" />
            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="images/favicon/apple-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="images/favicon/apple-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="images/favicon/apple-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="images/favicon/apple-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="images/favicon/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="images/favicon/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="images/favicon/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="images/favicon/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="images/favicon/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="images/favicon/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="images/favicon/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="images/favicon/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="images/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="images/favicon/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
              name="msapplication-TileImage"
              content="images/favicon/ms-icon-144x144.png"
            />
            <meta name="theme-color" content="#ffffff" />
            <script async src="https://prodigious-trader-7332.ck.page/dbdc7c9d00/index.js" />
            <style>
              {`html {
  overflow-x: hidden;
}`}
            </style>
          </Head>

          <main
            style={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: colors.white,
              width: "100vw",
              color: colors.night,
            }}
          >
            <div
              style={{
                "transformOrigin": "top center",
                transform: this.state.marker ? "scale(0.5)" : "scale(1.0)",
                "MozTransform": this.state.marker ? "scale(0.5)" : "scale(1.0)",
                transition: "transform 0.5s ease-in-out",
                width: "95%",
                maxWidth: "1000px"
              }}
            >
              <div
                id="topSection"
                style={{
                  paddingTop: "2.7rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "1ch",
                }}
              >
                <h1>
                  covilla
                </h1>
                <div
                  style={{
                    padding: "0 4rem",
                    textAlign: "center",
                  }}>
                  <Typist cursor={{ show: false }}>
                    <span>nomads living month-to-month in different cities.</span>
                  </Typist>
                </div>

                <MapChart marker={this.state.marker} setMarker={this.setMarker} />
              </div>
            </div>
            <DetailView marker={this.state.marker} setMarker={this.setMarker} />
            <script data-uid="dbdc7c9d00" />
            <IconButton
              onClick={this.toggleConvertKit}
              style={{ position: "fixed", bottom: 0, right: 0 }}
            >
              {this.state.showConvertKit ? <CancelIcon /> : <MailIcon />}
            </IconButton>
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
            .formkit-form {
              display: ${!this.state.showConvertKit && "none"};
              position: absolute;
              bottom: 32px;
              right: 32px;
            }

            * {
              box-sizing: border-box;
            }
          `}</style>
        </div>
      </>
    );
  }
}

export default App;
