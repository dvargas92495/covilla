import PropTypes from 'prop-types';
import React from 'react';
import styles from './Modal.module.css';

class Modal extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClose} className={styles.modal} >
        <div>
          <div type="content">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  content: PropTypes.object.isRequired
};

export default Modal;
