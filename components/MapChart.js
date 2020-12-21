import PropTypes from "prop-types";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import markers from "../util/markers";
import { colors } from "../util/styles";
import { isAfter, isBefore } from "../util/helpers";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapChart extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <>
        <ComposableMap width={1200} projection="geoAlbersUsa"
          style={{
            transition: "width 0.5s ease-in-out",
            width: this.props.marker ? '300px' : '1000px'
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
                        stokeWidth: "0.25px",
                        outline: "none",
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
            (marker) => {
              const { location, coordinates, label, start_date, end_date } = marker;
              return (
                <Marker key={location} coordinates={coordinates}>
                  {isBefore(end_date) ? (
                    <circle
                      r={6}
                      fill={colors.night}
                      onClick={() => this.props.setMarker(marker)}
                      style={{ cursor: "pointer" }}
                    />
                  ) : isAfter(start_date) ? (
                    <circle
                      r={6}
                      fill={colors.washedBlue}
                      onClick={() => this.props.setMarker(marker)}
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
                          onClick={() => this.props.setMarker(marker)}
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
                );
              }
            )
          }
        </ComposableMap>
      </>
    );
  }
}

MapChart.propTypes = {
  marker: PropTypes.object,
  setMarker: PropTypes.func.isRequired
};

export default MapChart;
