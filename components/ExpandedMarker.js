import PropTypes from 'prop-types';
import React from "react";

class ExpandedMarker extends React.Component {
  render () {
    const marker = this.props.marker;
    return (
      <center>
        {Object.keys(marker).map(m => {
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
