import React from 'react';
import { Container, Grid, Select, Typography } from '@mui/material';
import Card from '../card/Card';

export default function Trending ({ cards = [] }) {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center">Trending</Typography>
      <Select />
      <Grid container spacing={2}>
        {cards.map(card => (
          <Grid item xs={3} key={card.name}>
            <Card card={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};


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