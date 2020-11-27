import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import markers from "../util/markers";
import DetailView from "./DetailView";
import { colors } from "../util/styles";
import { isAfter, isBefore } from "../util/helpers";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.sideBarRef = React.createRef();
  }

  close = () => {
    this.setState({ marker: null });
  };

  onClick = (marker) => () => {
    this.setState({ marker });
  };

  render() {
    const marker = markers[this.state.marker];
    return (
      <>
        <ComposableMap width={1200} projection="geoAlbersUsa"
          style={{
            transition: "width 0.5s ease-in-out",
            width: marker ? '300px' : '1000px'
          }}
        >
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
                        fill: colors.washed,
                        stroke: colors.washedDarker,
                        stokeWidth: "0.25px"
                      },
                      hover: {
                        fill: "#C1DEE7",
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
            ({ location, coordinates, label, start_date, end_date }) => (
              <Marker key={location} coordinates={coordinates}>
                {isBefore(end_date) ? (
                  <circle
                    r={4}
                    fill={colors.night}
                    onClick={this.onClick(location)}
                    style={{ cursor: "pointer" }}
                  />
                ) : isAfter(start_date) ? (
                  <circle
                    r={4}
                    fill={colors.washedBlue}
                    onClick={this.onClick(location)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                      <text
                        textAnchor="middle"
                        style={{
                          fontSize: 18,
                          fill: colors.black,
                          cursor: "pointer",
                        }}
                        onClick={this.onClick(location)}
                      >
                        &#9733;
                      </text>
                    )}
                <text
                  textAnchor="middle"
                  y={24}
                  style={{
                    fontFamily: "system-ui",
                    fontSize: 12,
                    fill: colors.black,
                  }}
                >
                  {label}
                </text>
              </Marker>
            )
          )}
        </ComposableMap>
        <DetailView marker={marker} close={this.close} />
      </>
    );
  }
}

export default MapChart;
