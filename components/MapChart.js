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
import { colors } from "../util/styles";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      marker: null,
      open: false,
    };
  }

  onClick = (marker) => (e) => {
    this.setState({ marker, anchorEl: e.currentTarget, open: true });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    const marker = this.state.marker;
    const anchorEl = this.state.anchorEl;
    return (
      <>
        <ComposableMap width={1200} projection="geoAlbersUsa">
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
          open={this.state.open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: 100,
            horizontal: "center",
          }}
        >
          {marker && <ExpandedMarker marker={markers[marker]} />}
        </Popover>
      </>
    );
  }
}

export default MapChart;
