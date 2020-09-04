import PropTypes from "prop-types";
import React from "react";
import YouTube from "react-youtube";
import styles from "../util/SideBar.module.css";
import { toFormat } from "../util/helpers";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      youtubeId: "",
    };
  }

  setYoutubeId = (youtubeId) => () => this.setState({ youtubeId });

  closeYoutube = (e) => {
    this.setState({ youtubeId: "" });
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  };

  render() {
    const marker = this.props.marker || { people: [] };
    return (
      <div className={styles.sidenav} ref={this.containerRef}>
        <div onClick={this.props.onClose} className={styles.closebtn} id="sidebar-close">
          &times;
        </div>
        <div>
          {toFormat(marker.start_date)} - {toFormat(marker.end_date)}
        </div>
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
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <div key={i} style={{ display: "flex" }}>
                <div className={styles.icon}>
                  <img
                    src="/images/content/article.png"
                    alt={c.title}
                    width={50}
                  />
                </div>
                <div style={{ marginLeft: 16 }}>
                  <h5 style={{ marginTop: 0, marginBottom: 4 }}>{c.title}</h5>
                  <p style={{ marginTop: 0, marginBottom: 4 }}>By {c.by}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div>
          <br />
          {this.state.youtubeId && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "#00000080",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
              }}
            >
              <div onClick={this.closeYoutube} className={styles.closebtn}>
                &times;
              </div>
              <YouTube
                videoId={this.state.youtubeId}
                opts={{
                  height: "585",
                  width: "960",
                  playerVars: {
                    autoplay: 1,
                  },
                }}
              />
            </div>
          )}
          {marker.videos.map((c, i) => (
            <div
              key={i}
              style={{ display: "flex", cursor: "pointer" }}
              onClick={this.setYoutubeId(c.url.substring(30))}
            >
              <div className={styles.icon}>
                <img
                  src="/images/content/youtube.png"
                  alt={c.title}
                  width={50}
                />
              </div>
              <div style={{ marginLeft: 16 }}>
                <h5 style={{ marginTop: 0, marginBottom: 4 }}>{c.title}</h5>
                <p style={{ marginTop: 0, marginBottom: 4 }}>{c.date}</p>
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
