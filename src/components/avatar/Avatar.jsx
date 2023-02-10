import React from 'react';
import styles from './Avatar.module.scss';


const Avatar = ({ size = 90, url, verified = false }) => {
  return (
    <div className={styles.avatar} style={{ width: size, height: size }}>
      <img className={styles.image} src={url} alt="avatar" style={{ width: size }} />
      {verified && <img className={styles.badge} src='/images/verified.svg' alt="verified" />}
    </div>
  );
};

export default Avatar;