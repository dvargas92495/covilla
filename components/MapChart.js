import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import markers, { status } from "../util/markers";
import SideBar from "./SideBar";
import { colors } from "../util/styles";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  close = () => this.setState({ marker: null });

  onClick = (marker) => (e) => {
    this.setState({ marker });
    e.nativeEvent.stopImmediatePropagation();
  };

  componentDidMount = () => {
    document.addEventListener("click", this.close);
  };

  componentWillUnmount = () => {
    document.removeEventListener("click", this.close);
  };

  render() {
    const marker = this.state.marker;
    return (
      <>
        {marker && <SideBar onClose={this.close} marker={markers[marker]} />}
        <ComposableMap width={1200} projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colors.washed}
                    style={{
                      default: {
                        fill: colors.oliveGreen,
                        outline: "none",
                      },
                      hover: {
                        fill: colors.fadedGreen,
                        outline: "none",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                ))}
              </>
            )}
          </Geographies>
          {Object.values(markers).map(
            ({ location, coordinates, label, isCurrent }) => (
              <Marker key={location} coordinates={coordinates}>
                {isCurrent ? (
                  <text
                    textAnchor="middle"
                    style={{ fontSize: 24, fill: "#FFFFFF", cursor: "pointer" }}
                    onClick={this.onClick(location)}
                  >
                    &#9733;
                  </text>
                ) : (
                  <circle
                    r={8}
                    fill={"#FFFFFF"}
                    onClick={this.onClick(location)}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                )}
                <text
                  textAnchor="middle"
                  y={24}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#FFFFFF",
                    textShadow: "1px 1px #000000",
                    fontSize: 16,
                  }}
                >
                  {label}
                </text>
              </Marker>
            )
          )}
        </ComposableMap>
      </>
    );
  }
}

export default MapChart;
