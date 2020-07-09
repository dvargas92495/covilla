import PropTypes from "prop-types";
import React from "react";
import styles from "../util/Styles.module.css";

class ExpandedMarker extends React.Component {
  render() {
    const marker = this.props.marker || { people: [] };
    return (
      <center style={{ padding: 16 }}>
        <div>{marker.dates}</div>
        <div>{marker.location}</div>
        <div className={styles.dotList}>
          {marker.people.map((p, i) => {
            return p.url.length ? (
              <a
                className={styles.link}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                {p.name}
              </a>
            ) : (
              <span key={i}>{p.name}</span>
            );
          })}
        </div>
      </center>
    );
  }
}

ExpandedMarker.propTypes = {
  marker: PropTypes.object.isRequired,
};

export default ExpandedMarker;
