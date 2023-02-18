import React from 'react';
import styles from './Trending.module.scss';
import classNames from "classnames";
import { Container, Grid, Menu, Select, MenuItem } from '@mui/material';
import NftCard from '../card/Card';

export default function Trending({cards=[]}) {

  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
      <div className={classNames(styles.containerMenu)}>
      <h2 className={classNames(styles.heading)}>Trending</h2>
      <Select label="this week" placeholder='this week' className={classNames(styles.selectMenu)}><MenuItem>This week</MenuItem></Select>
      </div>
     
      <Grid container style={{width: '100%'}} justifyContent="space-between">
        {cards.map((card, index) => (
          <Grid item  xs={2} sm={6} md={3} key={index} columnGap={0}>
            <NftCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function NftCard({ name, likes=0, mediaUrl, user, price, currency }) {
  const classes = useStyles();
  const { avatar, verified } = user || {};
  const avatarUrl = avatar ? avatar.url : '';

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={mediaUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {likes} likes
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {price} {currency}
        </Typography>
      </CardContent>
    </Card>
  );
}

*/ 