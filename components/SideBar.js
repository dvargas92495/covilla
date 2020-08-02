import PropTypes from "prop-types";
import React from "react";
import styles from "../util/SideBar.module.css";
import content from "../util/content";

class SideBar extends React.Component {
  render() {
    const marker = this.props.marker || { people: [] };
    return (
      <div className={styles.sidenav}>
        <div onClick={this.props.onClose} className={styles.closebtn}>
          &times;
        </div>
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
                className={styles.profiles}
              >
                <img src={p.photo} alt={p.name} height={50} width={50} />
              </a>
            );
          })}
        </div>
        {marker.content.length > 0 && <h3>Content:</h3>}
        <div>
          {marker.content.map((c, i) => (
            <div
              key={i}
              style={{ display: "flex", padding: 8, border: "1px solid white" }}
            >
              <div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                >
                  <img src={c.type} alt={c.title} height={50} width={50} />
                </a>
              </div>
              <div style={{ marginLeft: 16 }}>
                <h4 style={{ marginTop: 0, marginBottom: 4 }}>{c.title}</h4>
                <p style={{ marginTop: 0, marginBottom: 4 }}>{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  onClose: PropTypes.func,
  marker: PropTypes.object.isRequired,
};

export default SideBar;
