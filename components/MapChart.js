import PropTypes from "prop-types";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from "react-simple-maps";
import markers from "../util/markers";
import { colors } from "../util/styles";
import { isAfter, isBefore } from "../util/helpers";
import styles from '../util/SimpleMaps.module.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

class MapChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  setHover = (location) => () => {
    this.setState({ location });
  }

  setMarkerByHash = () => {
    const label = window.location.hash.replace(/^#(\/)?/, '');
    const startMarker = markers.find(m => m.label.toLowerCase().replace(/ '/, '') === label);
    this.props.setMarker(startMarker) 
  }

  componentDidMount = () => {
    const callback = this.setMarkerByHash.bind(this);
    callback();
    window.addEventListener('hashchange', callback);
  }

  render() {
    return (
      <>
        <ComposableMap width={1000} projection="geoAlbersUsa"
          style={{
            width: '100%'
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
          {markers.map(
            (marker) => {
              const { location, coordinates, label, start_date, end_date } = marker;
              const onClick = () => {
                window.location.hash = label.toLowerCase().replace(/ '/,'');
                this.props.setMarker(marker);
              }
              return (
                <Marker key={location} coordinates={coordinates}>
                  {isBefore(end_date) ? (
                    <circle
                      r={6}
                      fill={colors.night}
                      onClick={onClick}
                      style={{ cursor: "pointer" }}
                      onMouseOver={this.setHover(location)}
                      onMouseOut={this.setHover()}
                      className={'map-marker'}
                    />
                  ) : isAfter(start_date) ? (
                    <circle
                      r={6}
                      fill={colors.washedBlue}
                      onClick={onClick}
                      style={{ cursor: "pointer" }}
                      onMouseOver={this.setHover(location)}
                      onMouseOut={this.setHover()}
                      className={'map-marker'}
                    />
                  ) : (
                        <text
                          textAnchor="middle"
                          style={{
                            fontSize: 18,
                            fill: colors.black,
                            cursor: "pointer"
                          }}
                          onClick={onClick}
                          onMouseOver={this.setHover(location)}
                          onMouseOut={this.setHover()}
                          className={'map-marker'}
                        >
                          &#9733;
                        </text>
                      )}
                  {this.state.location === location && (
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
                  )}
                </Marker>
              );
            }
          )}
          {markers.map((m, index) => {
            if (index + 1 === markers.length) return;
            return (
              <Line
                key={index}
                to={m.coordinates}
                from={markers[index + 1].coordinates}
                stroke={colors.night}
                strokeWidth={1}
                strokeLinecap="round"
                className={styles.LineStyle}
              />
            )
          })}
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
