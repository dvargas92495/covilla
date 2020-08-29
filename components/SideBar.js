
import PropTypes from "prop-types";
import React from "react";
import styles from "../util/SideBar.module.css";
import { toFormat } from "../util/helpers";

class SideBar extends React.Component {
  render() {
    const marker = this.props.marker || { people: [] };
    return (
      <div className={styles.sidenav}>
        <div onClick={this.props.onClose} className={styles.closebtn}>
          &times;
        </div>
        <div>{toFormat(marker.start_date)} - {toFormat(marker.end_date)}</div>
        <br />
        <div style={{ fontSize: 24 }}>{marker.location}</div>
        <br />
        <div>
          {marker.people.map((p, i) => {
            return (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className={styles.profile}
              >
                <img src={p.photo} alt={p.name} width={50} />
              </a>
            );
          })}
        </div>
        <br />
        <div>
          {marker.articles.map((c, i) => (
            <div
              key={i}
              style={{ display: "flex" }}
            >
              <div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className={styles.icon}
                >
                  <img src="/images/content/article.png" alt={c.title} width={50} />
                </a>
              </div>
              <div style={{ marginLeft: 16 }}>
                <h4 style={{ marginTop: 0, marginBottom: 4 }}>{c.title}</h4>
                <p style={{ marginTop: 0, marginBottom: 4 }}>By {c.by}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <br />
          {marker.videos.map((c, i) => (
            <div
              key={i}
              style={{ display: "flex" }}
            >
              <div>
                <iframe width="100%" src={`${c.url}?showinfo=0`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
