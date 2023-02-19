import React from 'react';
import Avatar from '../avatar/Avatar';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import millify from 'millify';
import styles from './Card.module.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function NftCard({
  name,
  likes=0,
  mediaUrl,
  user: { avatar: { url: avatarUrl }, verified },
  price,
  currency
}) {
  return (
    <Card className={styles.card}>
        <Avatar url={avatarUrl} size={40} verified={verified}  className={styles.avatar}/>
        <img className={styles.media} src={mediaUrl} title={name} />
        <div className={styles.details}>
          <div className={styles.info}>
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>{price} {currency}</p>
          </div>
          <div className={styles.likesContainer}>
            <Chip className={styles.likes}  
            label={millify(likes)} color="primary" avatar={<FavoriteIcon className={styles.icon} />}/>
          </div>
        </div>
    </Card>
  );
}
