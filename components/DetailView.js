import PropTypes from "prop-types";
import React from "react";

import styles from "../util/SideBar.module.css";

class DetailView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      youtubeId: ""
    };
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef.current && this.wrapperRef.current.contains(event.target)) return;
    this.props.setMarker();
  }

  setYoutubeId = (youtubeId) => () => this.setState({ youtubeId });

  closeYoutube = (e) => {
    this.setState({ youtubeId: "" });
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  };

  render() {
    const marker = this.props.marker;
    if (!marker) return <div 
      style={{
        "opacity" : "0.0"
      }}/>;
    return (
      <div
        ref={this.wrapperRef}
        style={{
          "top": "400px",
          "position": "absolute",
          "opacity": "1.0",
          "transition": "opacity 1.0s ease-in-out",
          "transition-delay": "0.5s"
        }}
        >
        <div style={{ "textAlign": "center" }}>
          <h1>{marker.location}</h1>
          <h2>{marker.label}</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "400px"
          }}
        >
          {marker.people.map((p, i) => {
            return (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className={styles.profile}
                style={{
                  padding: "5px",
                }}

              >
                <img
                  src={p.photo}
                  alt={p.name}
                  width={50}
                  style={{ "borderRadius": "5px" }}
                />
              </a>
            );
          })}
        </div>
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
                  <p style={{ marginTop: 0, marginBottom: 4 }}>By {c.by.name}</p>
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
          {marker.podcasts.map((c, i) => (
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
                    src="/images/content/spotify.png"
                    alt={c.title}
                    width={50}
                  />
                </div>
                <div style={{ marginLeft: 16 }}>
                  <h5 style={{ marginTop: 0, marginBottom: 4 }}>{c.title}</h5>
                </div>
              </div>
            </a>
          ))}
          {marker.haikus.map((c, i) => (
            <div key={i}>
              <div style={{ marginLeft: 16 }}>
                <h5 style={{ marginTop: 0, marginBottom: 4 }}>{c.for.name} by {c.by.name}</h5>
                <p style={{ marginTop: 0, marginBottom: 4, whiteSpace: 'pre-wrap' }}>{c.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

DetailView.propTypes = {
  marker: PropTypes.object,
  setMarker: PropTypes.func.isRequired
};

export default DetailView;
