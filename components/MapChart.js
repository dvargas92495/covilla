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
import { isAfter, isBefore } from "../util/helpers";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.sideBarRef = React.createRef();
  }

  close = (e) => {
    if (
      this.sideBarRef.current &&
      this.sideBarRef.current.contains(e.target) &&
      e.target.id !== "sidebar-close"
    ) {
      return;
    }
    this.setState({ marker: null });
  };

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
        {marker && (
          <SideBar
            onClose={this.close}
            marker={markers[marker]}
            ref={(ref) => {
              if (ref) {
                this.sideBarRef = ref.containerRef;
              }
            }}
          />
        )}
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
                        fill: colors.washed,
                        stroke: colors.washedDarker,
                        "stoke-width": "0.25px"
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
      </>
    );
  }
}

export default MapChart;
