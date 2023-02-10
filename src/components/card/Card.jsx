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
    <Card className={styles.card} style={{backgroundColor: '#181828', borderRadius: '20px'}}>
        <Avatar url={avatarUrl} size={40} verified={verified}  className={styles.avatar}/>
        <div className={styles.mediaContainer}> 
          <CardMedia className={styles.media}  image={mediaUrl} title={name} />
        </div>
        <div className={styles.details}>
          <div className={styles.info}>
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>{price} {currency}</p>
          </div>
          <div className={styles.likesContainer}>
            <Chip className={styles.likes} 
            style={{color:'#24f25e', backgroundColor: '#1A2E2D', border:'1px solid #24f25e', padding:'10px 5px 10px 5px', margin: '10px auto'}} 
            label={millify(likes)} color="primary" avatar={<FavoriteIcon  style={{color:'#24f25e', backgroundColor: 'transparent', margin: '10px auto'}} />}/>
          </div>
        </div>
    </Card>
  );
}
