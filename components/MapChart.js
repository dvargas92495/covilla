import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import markers from "../util/markers";
import ExpandedMarker from "./ExpandedMarker";
import Popover from "@material-ui/core/Popover";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      marker: null,
    };
  }

  onClick = (marker) => (e) => {
    this.setState({ marker, anchorEl: e.currentTarget });
  };

  handleClose = () => this.setState({ marker: null, anchorEl: null });

  render() {
    const marker = this.state.marker;
    const anchorEl = this.state.anchorEl;
    return (
      <>
        <ComposableMap width={2000} projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#DDD"
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
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
          {Object.values(markers).map(({ location, coordinates }) => (
            <Marker key={location} coordinates={coordinates}>
              <circle
                r={10}
                fill="#F00"
                stroke="#fff"
                strokeWidth={2}
                onClick={this.onClick(location)}
              />
              <text
                textAnchor="middle"
                y={25}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              >
                {location}
              </text>
            </Marker>
          ))}
        </ComposableMap>
        <Popover
          open={!!marker}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <ExpandedMarker marker={markers[marker]} />
        </Popover>
      </>
    );
  }
}

export default MapChart;
