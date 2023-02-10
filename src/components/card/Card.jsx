import React from 'react';
import Avatar from '../avatar/Avatar';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import millify from 'millify';
import styles from './Card.module.scss';

export default function NftCard({
  name,
  likes,
  mediaUrl,
  user: { avatar: { url: avatarUrl }, verified },
  price,
  currency
}) {
  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.media}
        image={mediaUrl}
        title={name}
      />
      <div className={styles.details}>
        <Avatar url={avatarUrl} size={40} verified={verified} />
        <div className={styles.info}>
          <p className={styles.title}>{name}</p>
          <p className={styles.price}>
            {price} {currency}
          </p>
        </div>
        <Chip
          className={styles.likes}
          label={millify(likes)}
          color="primary"
        />
      </div>
    </Card>
  );
}
