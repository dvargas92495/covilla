import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import markers from "../util/markers";
import SideBar from "./SideBar";
import { colors } from "../util/styles";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  onClick = marker => e => {
    this.setState({ marker });
  };

  render() {
    const marker = this.state.marker;
    return (
      <>
        {marker && <SideBar onClose={this.onClick()} marker={markers[marker]} />}
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
          {Object.values(markers).map(({ location, coordinates, label }) => (
            <Marker key={location} coordinates={coordinates}>
              <circle
                r={6}
                fill={colors.night}
                onClick={this.onClick(location)}
              />
              <text
                textAnchor="middle"
                y={25}
                style={{ fontFamily: "system-ui", fill: colors.night }}
              >
                {label}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </>
    );
  }
}

export default MapChart;
