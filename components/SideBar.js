import PropTypes from 'prop-types';
import React from 'react';
import styles from '../util/SideBar.module.css';

class SideBar extends React.Component {
  render() {
    const marker = this.props.marker;
    return (
      <div className={styles.sidenav}>
        <div onClick={this.props.onClose} className={styles.closebtn}>&times;</div>
        <div>{marker.dates}</div>
        <div>{marker.location}</div>
        <div>
          {marker.people.map((p, i) => {
            return (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className={styles.images}
              >
                <img src={p.photo} alt={p.name} height={50} width={50} />
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  onClose: PropTypes.func,
  marker: PropTypes.object.isRequired
};

export default SideBar;
