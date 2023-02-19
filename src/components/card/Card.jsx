import React from 'react';
import Avatar from '../avatar/Avatar';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import millify from 'millify';
import styles from './Card.module.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Countdown from 'react-countdown';


export default function NftCard({
  name,
  likes=0,
  mediaUrl,
  user: { avatar: { url: avatarUrl }, verified },
  price,
  currency,
  timeLeft
}) {
  return (
    <>
    {timeLeft ? (
      <Card className={styles.cardLive}>
      <div className={styles.liveContainer}>
        <div className={styles.liveBadge}>
          <div className={styles.liveIcon}></div>
          <span className={styles.liveText}>LIVE</span>
        </div>
        <Countdown date={Date.now() + timeLeft} />
      </div>
      <Avatar url={avatarUrl} size={40} verified={verified} className={styles.avatar} />
        <img className={styles.media} src={mediaUrl} title={name} />
        <div className={styles.details}>
          <div className={styles.info}>
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>{price} {currency}</p>
          </div>
          <div className={styles.likesContainer}>
            <Chip className={styles.likes}
              label={millify(likes)} color="primary" avatar={<FavoriteIcon className={styles.icon} />} />
          </div>
        </div>
      </Card>
    ) : (
      <Card className={styles.card}>
        <Avatar url={avatarUrl} size={40} verified={verified} className={styles.avatar} />
        <img className={styles.media} src={mediaUrl} title={name} />
        <div className={styles.details}>
          <div className={styles.info}>
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>{price} {currency}</p>
          </div>
          <div className={styles.likesContainer}>
            <Chip className={styles.likes}
              label={millify(likes)} color="primary" avatar={<FavoriteIcon className={styles.icon} />} />
          </div>
        </div>
        </Card>
    )}
    </>
  );
}

/*
return (
  <Card className={styles.card}>
    {timeLeft ? (
      <div className={styles.liveContainer}>
        <div className={styles.liveBadge}>
          <div className={styles.liveIcon}></div>
          <span className={styles.liveText}>LIVE</span>
        </div>
        <Countdown date={Date.now() + timeLeft} />
      </div>
    ) : (
      <>
        <Avatar url={avatarUrl} size={40} verified={verified} className={styles.avatar} />
        <img className={styles.media} src={mediaUrl} title={name} />
        <div className={styles.details}>
          <div className={styles.info}>
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>{price} {currency}</p>
          </div>
          <div className={styles.likesContainer}>
            <Chip className={styles.likes}
              label={millify(likes)} color="primary" avatar={<FavoriteIcon className={styles.icon} />} />
          </div>
        </div>
      </>
    )}
  </Card>
);*/
