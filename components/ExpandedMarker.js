import PropTypes from 'prop-types';
import React from "react";

const fieldsToShow = [
  "Dates",
  "Location",
  "People"
];

class ExpandedMarker extends React.Component {
  render () {
    const marker = this.props.marker;
    return (
      <center>
        {Object.keys(marker).filter(m => fieldsToShow.includes(m)).map(m => {
          return <div key={m}>{m}: {marker[m].toString()}</div>;
        })}
      </center>
    );
  }
};

ExpandedMarker.propTypes = {
  marker: PropTypes.object.isRequired
};

export default ExpandedMarker;
