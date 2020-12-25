import PropTypes from 'prop-types';
import React from 'react';

import styles from '../util/DetailView.module.css';

class DetailView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      youtubeId: ''
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
    this.setState({ youtubeId: '' });
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  };

  render() {
    const marker = this.props.marker;
    if (!marker) return <div
      style={{
        'opacity': '0.0'
      }} />;
    return (
      <div
        ref={this.wrapperRef}
        style={{
          top: '400px',
          position: 'absolute',
          opacity: 1,
          transition: 'opacity 1.0s ease-in-out',
          transitionDelay: '0.5s'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1>{marker.location}</h1>
          <h2>{marker.label}</h2>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 64
          }}
        >
          {marker.people.map((p, i) => {
            return (
              <a
                href={p.url}
                target='_blank'
                rel='noopener noreferrer'
                key={i}
                className={styles.profile}
                style={{
                  padding: '5px',
                }}
              >
                <img
                  src={p.photo}
                  alt={p.name}
                  width={50}
                  style={{ 'borderRadius': '5px' }}
                />
              </a>
            );
          })}
        </div>
        <div>
          {marker.articles.map((c, i) => (
            <a
              href={c.url}
              target='_blank'
              rel='noopener noreferrer'
              key={i}
              style={{
                textDecoration: 'none',
                display: 'flex',
                cursor: 'pointer',
                fontSize: 12,
                justifyContent: 'center'
              }}
            >
              <div className={styles.icon}>
                <img
                  src='/images/content/article.png'
                  alt={c.title}
                  width={20}
                />
              </div>
              <div style={{ marginLeft: 10 }}>
                <h5 style={{ marginTop: 0, marginBottom: 1 }}>{c.title}</h5>
                <p style={{ marginTop: 0, fontSize: 8 }}>By {c.by.name}</p>
              </div>
            </a>
          ))}
        </div>
        <div>
          {this.state.youtubeId && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundColor: '#00000080',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
              }}
            >
              <div onClick={this.closeYoutube} className={styles.closebtn}>
                &times;
              </div>
              <YouTube
                videoId={this.state.youtubeId}
                opts={{
                  height: '585',
                  width: '960',
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
              style={{
                display: 'flex',
                cursor: 'pointer',
                fontSize: 12,
                justifyContent: 'center'
              }}
              onClick={this.setYoutubeId(c.url.substring(30))}
            >
              <div className={styles.icon}>
                <img
                  src='/images/content/youtube.png'
                  alt={c.title}
                  width={20}
                />
              </div>
              <div style={{ marginLeft: 10 }}>
                <h5 style={{ marginTop: 0, marginBottom: 1 }}>{c.title}</h5>
                <p style={{ marginTop: 0, fontSize: 8 }}>{c.date}</p>
              </div>
            </div>
          ))}
          {marker.podcasts.map((c, i) => (
            <a
              href={c.url}
              target='_blank'
              rel='noopener noreferrer'
              key={i}
              style={{
                textDecoration: 'none',
                display: 'flex',
                cursor: 'pointer',
                fontSize: 12,
                justifyContent: 'center'
              }}
            >
              <div className={styles.icon}>
                <img
                  src='/images/content/spotify.png'
                  alt={c.title}
                  width={20}
                />
              </div>
              <div style={{ marginLeft: 10 }}>
                <h5 style={{ marginTop: 0 }}>{c.title}</h5>
              </div>
            </a>
          ))}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10
            }}
          >
            {marker.haikus.map((c, i) => (
              <div key={i} style={{ display: 'inline-block', margin: 12, textAlign: 'center' }}>
                <h5 style={{ marginTop: 0 }}>{c.for.name} by {c.by.name}</h5>
                <p style={{ whiteSpace: 'pre-wrap' }}>{c.content}</p>
              </div>
            ))}
          </div>
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
